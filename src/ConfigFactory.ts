import * as FS from 'node:fs';
import * as Strukt from '@ayka/domistrukt';
import * as Dotenv from '@glitchdotcom/dotenv';
import * as Im from 'immutable';
import * as Znv from 'znv';
import * as Zod from 'zod';

import * as Errors from './Errors.ts';
import * as Source from './Source.ts';
import type * as T from './Types/Types.ts';

const zod = { ...Zod.z, port: Znv.port };

const ctx = {
	value: Source.value,
	val: Source.value,
	env: Source.env,
	zod,
	z: zod,
} as const;

/**
 * Context object for configuration initialization.
 *
 * @property {typeof Source.value} value - Function to create a value source.
 * @property {typeof Source.value} val - Alias for `value`.
 * @property {typeof Source.env} env - Function to create an environment source.
 * @property {typeof Zod.z} zod - Zod instance for validation.
 * @property {typeof Znv.z} z - Alias for `zod`.
 * @property {typeof Znv.port} zod.port - Zod port type for validation.
 */
export type ctx = typeof ctx;
export type initFn<t extends T.rawConfig> = (ctx: ctx) => t;
export type initParams<t extends T.rawConfig> = t | initFn<t>;

/**
 * Options for converting the configuration to a JavaScript object.
 *
 * @property {boolean} [hideSecrets] - If true, secrets will be hidden in the output.
 */
export type toJSOpts = { hideSecrets?: boolean };

/**
 * Options for loading configuration.
 *
 * @property {NodeJS.ProcessEnv} [processEnv] - Custom environment source to use instead of `process.env`.
 * @property {string[]} [envFiles] - Array of file paths to load environment variables from.
 * @property {NodeJS.ProcessEnv[]} [envSources] - Additional environment sources to load variables from.
 */
export type loadOpts = Readonly<{
	processEnv?: Readonly<NodeJS.ProcessEnv>;
	envFiles?: readonly string[];
	envSources?: readonly Readonly<NodeJS.ProcessEnv>[];
}>;

type flatConfig = Strukt.FlatObject.t<Source.t<any>>;

const makeFlatConfig = <t extends T.rawConfig>(
	configSource: initParams<t>,
): flatConfig => {
	const source =
		typeof configSource === 'function' ? configSource(ctx) : configSource;

	return Strukt.toFlatObject(source).map((item) =>
		item instanceof Source.t ? item : Source.value(item),
	);
};

/**
 * Initializes a new configuration factory with the provided configuration source.
 *
 * @param {initParams<t>} configSource - The configuration source to initialize the factory with.
 * @returns {ConfigFactory<t>} A new configuration factory with the specified source.
 */
export const init = <t extends T.rawConfig>(
	configSource: initParams<t>,
): ConfigFactory<t> => {
	const flatConfig = makeFlatConfig(configSource);
	return new ConfigFactory(flatConfig);
};

export { ConfigFactory as t };
export class ConfigFactory<t extends T.rawConfig> {
	readonly #flatConfig: flatConfig;
	readonly #secrets: Im.Set<Strukt.FlatObject.keys>;

	static defaults = {
		secretMarker: '<secret>',
		hideSecrets: false,
	};

	constructor(flatConfig: flatConfig) {
		this.#flatConfig = flatConfig;
		this.#secrets = this.#flatConfig.properties
			.filter((item) => item.value.isSecret)
			.map((item) => item.keys)
			.toSet();
	}

	/**
	 * This property provides the TypeScript type of the configuration.
	 * It is undefined at runtime.
	 *
	 * @example
	 * ```typescript
	 * const config: typeof configFactory.$$config = {
	 *   key: 'value',
	 *   nested: {
	 *     key: 'nestedValue',
	 *   },
	 * };
	 * ```
	 */
	get $$config(): T.config<t> {
		return undefined as any;
	}

	/**
	 * This property provides the TypeScript type of the patch configuration.
	 * It is undefined at runtime.
	 *
	 * @example
	 * ```typescript
	 * const patch: typeof configFactory.$$patch = {
	 *   key: 'newValue',
	 *   nested: {
	 *     key: 'newNestedValue',
	 *   },
	 * };
	 * ```
	 */
	get $$patch(): T.patch<t> {
		return undefined as any;
	}

	/**
	 * This property provides the secret marker used to hide secrets in the output.
	 * It is undefined at runtime.
	 *
	 * @example
	 * ```typescript
	 * const config = configFactory.toJS({ hideSecrets: true });
	 * // Output: { key: '<secret>', nested: { key: '<secret>' } }
	 * ```
	 */
	get secretMarker() {
		return ConfigFactory.defaults.secretMarker;
	}

	/**
	 * Converts the configuration to a JavaScript object.
	 *
	 * @param {toJSOpts} [opts] - Options for converting the configuration.
	 * @returns {T.config<t>} The JavaScript object representation of the configuration.
	 *
	 * @example
	 * ```typescript
	 * const factory = Fiji.init((ctx) => ({
	 *   apiKey: ctx.value('my-secret-key').secret(),
	 *   dbPassword: ctx.env('DB_PASSWORD').secret(),
	 * }));
	 *
	 * factory.load();
	 * const config = factory.toJS({ hideSecrets: true });
	 * console.log(config); // { apiKey: '<secret>', dbPassword: '<secret>' }
	 * ```
	 */
	toJS(opts?: toJSOpts): T.config<t> {
		const { hideSecrets = ConfigFactory.defaults.hideSecrets } = opts ?? {};

		const flatObject = this.#flatConfig.map((item, keys) => {
			if (hideSecrets && this.#secrets.has(keys)) {
				return ConfigFactory.defaults.secretMarker;
			}

			if (item instanceof Source.Value) {
				return item.value;
			}

			if (item instanceof Source.Env) {
				if (!this.#env.has(item.name)) {
					throw new Errors.EnvNotLoadedError(item.name);
				}

				const value = this.#env.get(item.name);
				return value;
			}

			throw new Errors.InternalFijiError(`Unknown source type: ${item}`);
		});

		return flatObject.toJS();
	}

	/**
	 * Loads the configuration from environment variables and files.
	 * @example
	 * ```typescript
	 * const factory = Fiji.init((ctx) => ({
	 *   port: ctx.env('PORT', ctx.z.port().default(3000)),
	 *   dbUrl: ctx.env('DATABASE_URL', ctx.z.string().url()),
	 * }));
	 *
	 * factory.load({
	 *   processEnv: { PORT: '8080' },
	 *   envFiles: ['.env', 'config.env'],
	 *   envSources: [{ DATABASE_URL: 'postgres://user:pass@localhost:5432/db' }],
	 * });
	 *
	 * const config = factory.toJS();
	 * console.log(config); // { port: 8080, dbUrl: 'postgres://user:pass@localhost:5432/db' }
	 * ```
	 */
	load(opts?: loadOpts) {
		for (const envFile of opts?.envFiles ?? []) {
			this.addEnvFile(envFile);
		}

		for (const envSource of opts?.envSources ?? []) {
			this.addEnvSource(envSource);
		}

		this.parseEnv(opts?.processEnv ?? process.env);
		return this;
	}

	/**
	 * Applies a patch to the existing configuration and returns a new factory instance.
	 * @example
	 * ```typescript
	 * const factory = Fiji.init((ctx) => ({
	 *   apiKey: ctx.value('my-secret-key').secret(),
	 *   dbPassword: ctx.env('DB_PASSWORD').secret(),
	 * }));
	 *
	 * const newFactory = factory.patch({
	 *   apiKey: 'new-secret-key',
	 * });
	 *
	 * newFactory.load();
	 *
	 * const config = newFactory.toJS();
	 * console.log(config); // { apiKey: 'new-secret-key', dbPassword: '<secret>' }
	 * ```
	 * @param patch - The patch to apply to the existing configuration.
	 * @returns A new ConfigFactory instance with the applied patch.
	 */
	patch(patch: initParams<T.patch<t>>): ConfigFactory<t> {
		const flatPatch = makeFlatConfig(patch).filter((_, keys) =>
			this.#flatConfig.has(keys),
		);
		const newFlatConfig = this.#flatConfig.merge(flatPatch);
		return new ConfigFactory(newFlatConfig);
	}

	/**
	 * Extends the existing configuration with additional properties and returns a new factory instance.
	 * @example
	 * ```typescript
	 * const factory = Fiji.init((ctx) => ({
	 *   apiKey: ctx.value('my-secret-key').secret(),
	 *   dbPassword: ctx.env('DB_PASSWORD').secret(),
	 * }));
	 *
	 * const extendedFactory = factory.extend({
	 *   newProperty: 'new-value',
	 * });
	 *
	 * extendedFactory.load();
	 * const config = extendedFactory.toJS();
	 * console.log(config); // { apiKey: '<secret>', dbPassword: '<secret>', newProperty: 'new-value' }
	 * ```
	 * @param extension - The additional properties to extend the existing configuration.
	 * @returns A new ConfigFactory instance with the extended configuration.
	 */
	extend<r extends T.rawConfig>(
		extension: initParams<r>,
	): ConfigFactory<T.extension<t, r>> {
		const newConfig = this.#flatConfig.merge(makeFlatConfig(extension));
		return new ConfigFactory(newConfig);
	}

	clone(): ConfigFactory<t> {
		return new ConfigFactory(this.#flatConfig);
	}

	/**
	 * Converts the configuration factory to a class constructor.
	 * This is particularly useful for integrating with the NestJS framework.
	 * The resulting class can be used as a provider in NestJS modules, allowing for typed configuration injection throughout your application.
	 *
	 * @example
	 * ```typescript
	 * import * as Fiji from '@ayka/fiji';
	 *
	 * const factory = Fiji.init((ctx) => ({
	 *   apiKey: ctx.env('API_KEY').secret(),
	 *   dbPassword: ctx.env('DB_PASSWORD').secret(),
	 * }));
	 *
	 * factory.load();
	 * class Config extends factory.asClass() {}
	 * const config = new Config();
	 * console.log(config.apiKey);
	 * console.log(config.dbPassword);
	 * ```
	 *
	 * @example
	 * ```typescript
	 * import { Module } from '@nestjs/common';
	 * import { Config } from './config';
	 *
	 * @Module({
	 *   providers: [Config],
	 * })
	 * export class AppModule {}
	 * ```
	 *
	 * @returns A class constructor with the configuration properties.
	 */
	asClass(): configClassConstructor<t> {
		const self = this;

		// @ts-ignore
		return class extends BaseConfig<t> {
			constructor() {
				super(self);
			}
		};
	}

	get #envList(): Im.List<Source.Env<any>> {
		return this.#flatConfig.properties
			.filter((item) => item.value instanceof Source.Env)
			.map((item) => item.value) as Im.List<Source.Env<any>>;
	}

	get #znvSchema() {
		const schema: Record<string, Zod.ZodType> = {};

		this.#envList.forEach((item) => {
			schema[item.name] = item.schema;
		});

		return schema;
	}

	#env: Im.Map<string, any> = Im.Map();
	get env() {
		return this.#env.toJS();
	}

	#envSource: Im.Map<string, any> = Im.Map();
	resetEnvSource() {
		this.#envSource = Im.Map();
		return this;
	}

	/**
	 * Adds an environment source to the configuration factory.
	 *
	 * @param {NodeJS.ProcessEnv} envSource - The environment source to add.
	 * @returns {ConfigFactory<t>} The current configuration factory instance.
	 */
	addEnvSource(envSource: NodeJS.ProcessEnv) {
		this.#envSource = this.#envSource.merge(Im.Map(envSource));
		return this;
	}

	/**
	 * Adds an environment file to the configuration factory.
	 *
	 * @param {string} [path='.env'] - The path to the environment file. Defaults to '.env'.
	 * @returns {ConfigFactory<t>} The current configuration factory instance.
	 */
	addEnvFile(path = '.env') {
		const env = Dotenv.parseText(FS.readFileSync(path, 'utf8'));
		this.addEnvSource(env);
		return this;
	}

	/**
	 * Parses the environment variables and updates the internal environment map.
	 *
	 * @param {NodeJS.ProcessEnv} [envSource=process.env] - The environment source to parse. Defaults to `process.env`.
	 * @returns {ConfigFactory<t>} The current configuration factory instance.
	 */
	parseEnv(envSource: NodeJS.ProcessEnv = process.env) {
		const source = { ...envSource, ...this.#envSource.toJS() };
		const env = Znv.parseEnv(source, this.#znvSchema);
		this.#env = Im.Map(env);
		return this;
	}

	/**
	 * Retrieves information about the environment variables loaded by the configuration factory.
	 *
	 * @returns {Record<string, any>} An object containing the environment variables.
	 */
	envInfo() {
		const [missing, loaded] = this.#envList
			.map((item) => item.name)
			.partition((name) => this.#envSource.has(name) || name in process.env);

		const defaulted = missing.filter(
			(name) => this.#env.get(name) !== undefined,
		);

		return {
			missing: missing.toSet().toArray().sort(),
			loaded: loaded.toSet().toArray().sort(),
			defaulted: defaulted.toSet().toArray().sort(),
			sourced: this.#envSource.keySeq().toArray().sort(),
		};
	}
}

export class BaseConfig<t extends T.rawConfig> {
	readonly #factory: ConfigFactory<t>;
	constructor(factory: ConfigFactory<t>) {
		this.#factory = factory;
		Object.assign(this, this.#factory.toJS());
	}

	/**
	 * Retrieves the underlying ConfigFactory instance.
	 *
	 * @returns {ConfigFactory<t>} The ConfigFactory instance.
	 */
	get $factory() {
		return this.#factory;
	}

	/**
	 * Converts the configuration to a JavaScript object.
	 *
	 * @param {toJSOpts} [opts] - Options for converting the configuration.
	 * @returns {T.config<t>} The JavaScript object representation of the configuration.
	 */
	$toJS(opts?: toJSOpts) {
		return this.#factory.toJS(opts);
	}

	/**
	 * Retrieves information about the environment variables loaded by the configuration factory.
	 *
	 * @returns {Record<string, any>} An object containing the environment variables.
	 */
	$envInfo() {
		return this.#factory.envInfo();
	}
}

export type configClassConstructor<t extends T.rawConfig> = {
	new (): BaseConfig<t> & T.config<t>;
};
