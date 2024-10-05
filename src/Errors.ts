import * as Strukt from '@ayka/domistrukt';

export class EnvNotLoadedError extends Strukt.error<{ name: string }, string>({
	create: (name: string) => ({
		name,
	}),
	message: ({ name }) => `ENV [${name}] is not loaded`,
}) {}

export class InternalFijiError extends Strukt.error<string>({
	message: (msg) => msg,
}) {}
