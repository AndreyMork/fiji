import * as Strukt from '@ayka/domistrukt';
// import type * as Im from 'immutable';
import * as Znv from 'znv';
import * as Zod from 'zod';

import * as Env from './Env.ts';
// import * as Errors from './Errors.ts';
import * as FijiConfig from './FijiConfig.ts';
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
export type defFn<t extends T.rawConfig> = (ctx: ctx) => t;
export type defParams<t extends T.rawConfig> = t | defFn<t>;

export type configClassConstructor<t extends T.rawConfig> = {
	new (opts?: FijiConfig.loadOpts): FijiConfig.configInstance<t>;
};

type flatConfig = Strukt.FlatObject.t<Source.t<any>>;

export { ConfigDefinition as t };
export class ConfigDefinition<t extends T.rawConfig> {
	readonly #flatConfig: flatConfig;
	// readonly #secrets: Im.Set<Strukt.FlatObject.keys>;
	// readonly #env: Im.Map<string, any>;

	constructor(flatConfig: flatConfig) {
		this.#flatConfig = flatConfig;
		// this.#secrets = this.#flatConfig
		// 	.filter((item) => item.isSecret)
		// 	.keys()
		// 	.toSet();
	}

	@Strukt.lazy()
	get values(): Strukt.flatObject<Source.ValueSource<any>> {
		return this.#flatConfig.filter(
			(item) => item instanceof Source.ValueSource,
		) as Strukt.FlatObject.t<Source.ValueSource<any>>;
	}

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

	load(opts?: FijiConfig.loadOpts): FijiConfig.configInstance<t> {
		const env = Env.create(opts?.env);
		return FijiConfig.init({ def: this, env }).$load();
	}

	asClass(): configClassConstructor<t> {
		const self = this;

		// @ts-ignore
		return class extends FijiConfig.t<t> {
			constructor(opts?: FijiConfig.loadOpts) {
				const env = Env.create(opts?.env);
				super({ def: self, env });
				this.$load();
			}
		};
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

export const init = <t extends T.rawConfig>(
	configSource: defParams<t>,
): ConfigDefinition<t> => {
	const flatConfig = refineDefinition(configSource);
	return create(flatConfig);
};
