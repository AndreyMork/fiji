import * as FS from 'node:fs';
import * as Strukt from '@ayka/domistrukt';
import * as Dotenv from '@glitchdotcom/dotenv';

// import * as Im from 'immutable';

export type opts = {
	source?: Readonly<NodeJS.ProcessEnv>;
	patch?: Readonly<NodeJS.ProcessEnv>;
	files?: readonly string[];
};

// class ExternalEnv extends Strukt.init({
// 	constructor() {}
// }) {}

export { Env as t };
class Env extends Strukt.init({
	constructor(opts?: opts) {
		const { source = process.env, patch = {}, files = [] } = opts ?? {};

		const fromFiles = files.reduce(
			(acc, file) =>
				Object.assign(acc, Dotenv.parseText(FS.readFileSync(file, 'utf-8'))),
			{},
		);

		const record: NodeJS.ProcessEnv = {
			...source,
			...patch,
			...fromFiles,
		};

		return {
			record,
			source,
			patch,
			files,
		};
	},
}) {}

export const create = Strukt.makeConstructor(Env);
