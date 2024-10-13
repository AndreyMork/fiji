// import * as Strukt from '@ayka/domistrukt';
import * as Znv from 'znv';

import * as Im from 'immutable';

import type * as T from '#Types';
import type * as ConfigDefinition from './ConfigDefinition.ts';
import * as Env from './Env.ts';
import * as Errors from './Errors.ts';
import * as Source from './Source.ts';

export type toJSOpts = Readonly<{
	hideSecrets?: boolean;
}>;

export type loadOpts = Readonly<{
	env?: Env.opts;
}>;

export type params<t extends T.rawConfig> = Readonly<{
	def: ConfigDefinition.t<t>;
	env?: Env.t;
}>;

export namespace defaults {
	export const secretMarker = '#secret#';
	export const hideSecrets = false;
}

export { FijiConfig as t };
export class FijiConfig<t extends T.rawConfig> {
	readonly #def: ConfigDefinition.t<t>;
	readonly #env: Env.t;
	#parsedEnv: Im.Map<string, any> = Im.Map();

	constructor(params: params<t>) {
		this.#def = params.def;
		this.#env = params.env ?? Env.create();
	}

	get $def() {
		return this.#def;
	}

	// 	$patch() {
	// 		return this.#def.patch();
	// 	}
	//
	// 	$extend() {
	// 		return this.#def.extend();
	// 	}

	get $env() {
		return this.#env;
	}

	get $parsedEnv() {
		return this.#parsedEnv.toJS();
	}

	$toJS(opts?: toJSOpts): T.config<t> {
		const { hideSecrets = defaults.hideSecrets } = opts ?? {};

		const result = this.#def.sources.map((item) => {
			if (hideSecrets && item.isSecret) {
				return defaults.secretMarker;
			}

			if (item instanceof Source.Env) {
				return this.#getEnv(item);
			}

			if (item instanceof Source.ValueSource) {
				return item.value;
			}

			throw new Errors.InternalFijiError(`Unknown source type: ${item}`);
		});

		return result.toJS();
	}

	$load() {
		this.#loadEnv();

		Object.assign(this, this.$toJS());

		return this;
	}

	#loadEnv() {
		this.#parsedEnv = Im.Map(
			Znv.parseEnv(this.#env.record, this.#def.znvSchema),
		);

		return this;
	}

	#getEnv(env: Source.Env<any>) {
		if (!this.#parsedEnv.has(env.name)) {
			throw new Errors.EnvNotLoadedError(env.name);
		}

		return this.#parsedEnv.get(env.name);
	}
}

export type configInstance<t extends T.rawConfig> = FijiConfig<t> & T.config<t>;

export const init = <t extends T.rawConfig>(
	params: params<t>,
): configInstance<t> => {
	return new FijiConfig<t>(params) as configInstance<t>;
};
