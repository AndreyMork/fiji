import * as Strukt from '@ayka/domistrukt';
import * as Znv from 'znv';
import * as Zod from 'zod';

import * as Config from './Config.ts';
import * as Source from './Source.ts';
import type * as T from './Types/Types.ts';

const zod = { ...Zod.z, port: Znv.port };

const ctx = {
	value: Source.value,
	val: Source.value,
	secret: <t>(value: t) => Source.value(value).secret(),
	env: Source.env,
	zod,
	z: zod,
} as const;

export type ctx = typeof ctx;
export type defFn<t extends T.rawConfig> = (ctx: ctx) => t;
export type defParams<t extends T.rawConfig> = t | defFn<t>;

export type configClassConstructor<t extends T.rawConfig> = {
	new (opts?: Config.loadOpts): Config.configInstance<t>;
};

type flatConfig = Strukt.FlatObject.t<Source.t<any>>;

export { ConfigDefinition as t };
export class ConfigDefinition<t extends T.rawConfig> {
	readonly #flatConfig: flatConfig;

	/**
	 * Exposes the types of the config.
	 */
	get $$config(): T.config<t> {
		return undefined as any;
	}

	/**
	 * Exposes the Fiji configuration.
	 */
	get $$fijiConfig(): Config.t<t> {
		return undefined as any;
	}

	/**
	 * Exposes the patch type.
	 */
	get $$patch(): T.patch<t> {
		return undefined as any;
	}

	constructor(flatConfig: flatConfig) {
		this.#flatConfig = flatConfig;
	}

	/**
	 * Lazily retrieves the values from the configuration.
	 */
	@Strukt.lazy()
	get values(): Strukt.flatObject<Source.ValueSource<any>> {
		return this.#flatConfig.filter(
			(item) => item instanceof Source.ValueSource,
		) as Strukt.FlatObject.t<Source.ValueSource<any>>;
	}

	/**
	 * Lazily retrieves the environment variables from the configuration.
	 */
	@Strukt.lazy()
	get envs(): Strukt.flatObject<Source.Env<any>> {
		return this.#flatConfig.filter(
			(item) => item instanceof Source.Env,
		) as Strukt.FlatObject.t<Source.Env<any>>;
	}

	@Strukt.lazy()
	get sources() {
		return this.values.merge(this.envs);
	}

	@Strukt.lazy({ useValue: false })
	get znvSchema() {
		const schema: Record<string, Zod.ZodType> = {};

		this.envs.values().forEach((item) => {
			schema[item.name] = item.schema;
		});

		return schema;
	}

	/**
	 * Loads the configuration instance.
	 * @param opts - Optional load options.
	 * @returns The loaded configuration instance.
	 * @example
	 * const def = Fiji.init((ctx) => ({
	 *   port: ctx.env('PORT', ctx.zod.number().default(3000)),
	 *   dbUrl: ctx.env('DATABASE_URL', ctx.zod.string().url()),
	 * }));
	 * const config = def.load();
	 * console.log(config.$toJS()); // { port: 3000, dbUrl: '...' }
	 */
	load(opts?: Config.loadOpts): Config.configInstance<t> {
		const env = Config.env(opts);
		return Config.init({ def: this, env }).$load();
	}

	/**
	 * Converts the configuration definition to a class constructor.
	 * Useful for dependency injection in frameworks like NestJS.
	 * @returns A class constructor for the configuration.
	 * @example
	 * class Config extends configDef.asClass() {};
	 * const config = new Config({ envFiles: ['.env'] });
	 * console.log(config.$toJS()); // { ... }
	 */
	asClass(): configClassConstructor<t> {
		const self = this;

		// @ts-ignore
		return class extends Config.t<t> {
			constructor(opts?: Config.loadOpts) {
				const env = Config.env(opts);
				super({ def: self, env });
				this.$load();
			}
		};
	}

	/**
	 * Applies a patch to the configuration.
	 * @param patch - The patch to apply, either as an object or a function.
	 * @returns A new ConfigDefinition with the patch applied.
	 * @example
	 * const patchedConfig = configDef.patch({ newKey: 'newValue' });
	 * const config = patchedConfig.load();
	 * console.log(config.$toJS()); // { newKey: 'newValue', ... }
	 */
	patch(patch: T.patch<t> | ((ctx: ctx) => T.patch<t>)): ConfigDefinition<t> {
		const flatPatch = refineDefinition(patch).filter((_, keys) =>
			this.#flatConfig.has(keys),
		);
		const newFlatConfig = this.#flatConfig.merge(flatPatch);
		return create(newFlatConfig);
	}

	/**
	 * Extends the configuration with additional definitions.
	 * @param extensionDef - The extension definition, either as an object or a function.
	 * @returns A new ConfigDefinition with the extension applied.
	 * @example
	 * const extendedConfig = configDef.extend({ additionalKey: 'additionalValue' });
	 * const config = extendedConfig.load();
	 * console.log(config.$toJS()); // { additionalKey: 'additionalValue', ... }
	 */
	extend<r extends T.rawConfig>(
		extensionDef: defParams<r>,
	): ConfigDefinition<T.extension<t, r>> {
		const extension = refineDefinition(extensionDef);
		const newConfig = this.#flatConfig.merge(extension);
		return create(newConfig);
	}

	/**
	 * Clones the current configuration definition.
	 * @returns A new ConfigDefinition that is a clone of the current one.
	 * @example
	 * const clonedConfig = configDef.clone();
	 * const config = clonedConfig.load();
	 * console.log(config.$toJS()); // { ... }
	 */
	clone(): ConfigDefinition<t> {
		return create(this.#flatConfig);
	}
}

export const refineDefinition = <t extends T.rawConfig>(
	configSource: defParams<t>,
): flatConfig => {
	const source =
		typeof configSource === 'function' ? configSource(ctx) : configSource;

	return Strukt.toFlatObject(source).map((item) =>
		item instanceof Source.t ? item : Source.value(item),
	);
};

export const create = <t extends T.rawConfig>(
	flatConfig: flatConfig,
): ConfigDefinition<t> => {
	return new ConfigDefinition(flatConfig);
};

/**
 * Initializes a new ConfigDefinition from a configuration source.
 * @param configSource - The configuration source, either as an object or a function.
 * @returns A new ConfigDefinition instance.
 * @example
 * // Simple definition example
 * const simpleConfigDef = init({ key: 'value' });
 * const simpleConfig = simpleConfigDef.load();
 * console.log(simpleConfig.$toJS()); // { key: 'value' }
 *
 * // Using a function with ctx to define the configuration
 * const complexConfigDef = init((ctx) => ({
 *   port: ctx.env('PORT', ctx.z.port().default(3000)),
 *   apiKey: ctx.env('API_KEY', ctx.z.string()).secret(),
 * }));
 * const complexConfig = complexConfigDef.load();
 * console.log(complexConfig.$toJS({ hideSecrets: true })); // { port: 3000, apiKey: '<secret>' }
 */
export const init = <t extends T.rawConfig>(
	configSource: defParams<t>,
): ConfigDefinition<t> => {
	const flatConfig = refineDefinition(configSource);
	return create(flatConfig);
};
