import * as FS from 'node:fs';
import * as Strukt from '@ayka/domistrukt';
import * as Dotenv from '@glitchdotcom/dotenv';
import * as Im from 'immutable';

export type opts = {
	source?: Readonly<NodeJS.ProcessEnv>;
	patch?: Readonly<NodeJS.ProcessEnv>;
	files?: readonly string[];
};

// class ExternalEnv extends Strukt.init({
// 	constructor() {}
// }) {}

export type envMap = Im.Map<string, string>;
export class Env {
	readonly #envMap: envMap;
	readonly #fromFiles: envMap;
	readonly #source: envMap;
	readonly #patch: envMap;

	constructor(opts?: opts) {
		const source = opts?.source ?? process.env;
		const patch = opts?.patch ?? {};
		const files = opts?.files ?? [];

		this.#fromFiles = files.reduce(
			(acc, file) =>
				acc.merge(Dotenv.parseText(FS.readFileSync(file, 'utf-8'))),
			Im.Map() as envMap,
		);

		this.#source = Im.Map(source) as envMap;
		this.#patch = Im.Map(patch) as envMap;
		this.#envMap = this.#source.merge(this.#fromFiles).merge(this.#patch);
	}

	toJS() {
		return this.#envMap.toJS();
	}

	has(name: string) {
		return this.#envMap.has(name);
	}

	fromPatch(name: string) {
		return this.#patch.has(name) || this.#fromFiles.has(name);
	}

	fromSource(name: string) {
		return this.#source.has(name);
	}

	keys() {
		return this.#envMap.keySeq().toSet();
	}
}

export { Env as t };

export const create = Strukt.makeConstructor(Env);
