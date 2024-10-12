import * as Strukt from '@ayka/domistrukt';

export class EnvNotLoadedError extends Strukt.error({
	constructor(name: string) {
		const data = { name };
		const message = `ENV [${name}] is not loaded`;
		return { data, message };
	},
}) {}

export class InternalFijiError extends Strukt.staticError() {}
