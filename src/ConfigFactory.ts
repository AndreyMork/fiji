import * as FS from 'node:fs';
import * as Dotenv from '@glitchdotcom/dotenv';
import * as Im from 'immutable';
import * as Znv from 'znv';
import * as Zod from 'zod';

import * as FlatObject from './FlatObject.ts';
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

export type ctx = typeof ctx;
export type initFn<t extends T.rawConfig> = (ctx: ctx) => t;
export type initParams<t extends T.rawConfig> = t | initFn<t>;

export type toJSOpts = { hideSecrets?: boolean };
export type loadOpts = {
	envSource?: NodeJS.ProcessEnv;
};

type flatConfig = FlatObject.t<Source.t<any>>;

const makeFlatConfig = <t extends T.rawConfig>(
	configSource: initParams<t>,
): flatConfig => {
	const source =
		typeof configSource === 'function' ? configSource(ctx) : configSource;

	return FlatObject.init(source).map((item) =>
		item instanceof Source.t ? item : Source.value(item),
	);
};

export const init = <t extends T.rawConfig>(
	configSource: initParams<t>,
): ConfigFactory<t> => {
	const flatConfig = makeFlatConfig(configSource);
	return new ConfigFactory(flatConfig);
};

export { ConfigFactory as t };
export class ConfigFactory<t extends T.rawConfig> {
	readonly #flatConfig: flatConfig;
	readonly #secrets: Im.Set<FlatObject.keys>;

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

	get $$config(): T.config<t> {
		throw new TypePropertyError('$$config');
	}
	get $$patch(): T.patch<t> {
		throw new TypePropertyError('$$patch');
	}

	get secretMarker() {
		return ConfigFactory.defaults.secretMarker;
	}

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
					throw new Error(`ENV not loaded: ${item.name}`);
				}

				const value = this.#env.get(item.name);
				return value;
			}

			throw new Error(`Unknown source type: ${item}`);
		});

		return flatObject.toJS();
	}

	load(opts?: loadOpts) {
		this.parseEnv(opts?.envSource);
		return this;
	}

	patch(patch: initParams<T.patch<t>>): ConfigFactory<t> {
		const flatPatch = makeFlatConfig(patch).filter((_, keys) =>
			this.#flatConfig.has(keys),
		);
		const newFlatConfig = this.#flatConfig.merge(flatPatch);
		return new ConfigFactory(newFlatConfig);
	}

	extend<r extends T.rawConfig>(
		extension: initParams<r>,
	): ConfigFactory<T.extension<t, r>> {
		const newConfig = this.#flatConfig.merge(makeFlatConfig(extension));
		return new ConfigFactory(newConfig);
	}

	clone(): ConfigFactory<t> {
		return new ConfigFactory(this.#flatConfig);
	}

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

	addEnvSource(envSource: NodeJS.ProcessEnv) {
		this.#envSource = this.#envSource.merge(Im.Map(envSource));
		return this;
	}

	addEnvFile(path = '.env') {
		const env = Dotenv.parseText(FS.readFileSync(path, 'utf8'));
		this.addEnvSource(env);
		return this;
	}

	parseEnv(envSource: NodeJS.ProcessEnv = process.env) {
		const source = { ...envSource, ...this.#envSource.toJS() };
		const env = Znv.parseEnv(source, this.#znvSchema);
		this.#env = Im.Map(env);
		return this;
	}

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

	get $factory() {
		return this.#factory;
	}

	$toJS(opts?: toJSOpts) {
		return this.#factory.toJS(opts);
	}

	$envInfo() {
		return this.#factory.envInfo();
	}
}

export type configClassConstructor<t extends T.rawConfig> = {
	new (): BaseConfig<t> & T.config<t>;
};

export class TypePropertyError extends Error {
	constructor(readonly propertyName: string) {
		super(`Type property ${propertyName} is not accessible in runtime`);
		this.name = 'TypePropertyError';
	}
}
