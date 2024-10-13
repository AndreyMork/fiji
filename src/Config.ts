import * as Znv from 'znv';

import * as Im from 'immutable';

import type * as T from '#Types';
import type * as ConfigDefinition from './ConfigDefinition.ts';
import type * as Env from './Env.ts';
import * as Errors from './Errors.ts';
import * as Source from './Source.ts';

export type toJSOpts = Readonly<{
	hideSecrets?: boolean;
}>;

export type params<t extends T.rawConfig> = Readonly<{
	def: ConfigDefinition.t<t>;
	env: Env.t;
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

	/**
	 * Constructs a new FijiConfig.
	 * @param params - The configuration parameters.
	 */
	constructor(params: params<t>) {
		this.#def = params.def;
		this.#env = params.env;
	}

	/**
	 * Gets the configuration definition.
	 */
	get $def() {
		return this.#def;
	}

	/**
	 * Gets the environment configuration.
	 */
	get $env() {
		return this.#env;
	}

	/**
	 * Gets the parsed environment variables.
	 */
	get $parsedEnv() {
		return this.#parsedEnv.toJS();
	}

	/**
	 * Converts the configuration to a JavaScript object.
	 * @param opts - Options for conversion, such as hiding secret values.
	 * @returns The configuration as a plain JavaScript object, with secrets optionally masked.
	 * @example
	 * const config = configInstance.$toJS({ hideSecrets: true });
	 * console.log(config); // { key: 'value', secretKey: '#secret#' }
	 */
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

	/**
	 * Loads the configuration, parsing environment variables and applying any patches.
	 * This method should be called to initialize the configuration with the current environment state.
	 * @returns The loaded configuration instance, ready for use.
	 * @example
	 * const config = configInstance.$load();
	 * console.log(config.$toJS()); // { key: 'value', ... }
	 */
	$load() {
		this.#loadEnv();

		Object.assign(this, this.$toJS());

		return this;
	}

	#loadEnv() {
		this.#parsedEnv = Im.Map(
			Znv.parseEnv(this.#env.toJS(), this.#def.znvSchema),
		);

		return this;
	}

	#getEnv(env: Source.Env<any>) {
		if (!this.#parsedEnv.has(env.name)) {
			throw new Errors.EnvNotLoadedError(env.name);
		}
		return this.#parsedEnv.get(env.name);
	}

	/**
	 * Provides detailed information about the environment configuration.
	 * This includes which variables are loaded, defaulted, missing, patched, and unused.
	 * @param opts - Options for displaying unused variables.
	 * @returns An object containing arrays of environment variable names categorized by their status.
	 * @example
	 * const envInfo = configInstance.$envInfo({ showUnused: true });
	 * console.log(envInfo); // { loaded: ['PORT'], defaulted: ['API_KEY'], missing: [], patched: ['HOST'], unused: ['UNUSED_VAR'] }
	 */
	$envInfo(opts?: { showUnused: boolean }) {
		const { showUnused = false } = opts ?? {};

		const envs = this.#def.envs
			.values()
			.map((item) => item.name)
			.toSet();

		const notInSource = envs.filter((name) => !this.#env.has(name));

		const defaulted = notInSource.filter(
			(name) =>
				this.#parsedEnv.has(name) && this.#parsedEnv.get(name) !== undefined,
		);
		const missing = notInSource.filter(
			(name) =>
				this.#parsedEnv.has(name) && this.#parsedEnv.get(name) === undefined,
		);

		const loaded = envs.filter((name) => this.#env.fromSource(name));

		const patched = envs.filter((name) => this.#env.fromPatch(name));

		const unused = showUnused
			? this.#env.keys().filter((name) => !envs.has(name))
			: [];

		const prepare = (collection: Iterable<string>) =>
			Im.Set(collection).toArray().sort();

		return {
			loaded: prepare(loaded),
			defaulted: prepare(defaulted),
			missing: prepare(missing),
			patched: prepare(patched),
			unused: prepare(unused),
		};
	}
}

/**
 * Represents a configuration instance.
 */
export type configInstance<t extends T.rawConfig> = FijiConfig<t> & T.config<t>;

/**
 * Initializes a new FijiConfig.
 * @param params - The configuration parameters.
 * @returns A new configuration instance.
 * @example
 * const configInstance = init({ def: configDef, env: envConfig });
 * console.log(configInstance.$toJS()); // { ... }
 */
export const init = <t extends T.rawConfig>(
	params: params<t>,
): configInstance<t> => {
	return new FijiConfig<t>(params) as configInstance<t>;
};
