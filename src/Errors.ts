import * as Strukt from '@ayka/domistrukt';

export class EnvNotLoadedError extends Strukt.error<{ name: string }, string>({
	create(name) {
		return {
			name,
		};
	},
	message: (data) => `ENV [${data.name}] is not loaded`,
}) {}

export class InternalFijiError extends Strukt.staticError() {}
