import type * as Zod from 'zod';

export { value as val };
export const value = <t>(val: t) => new ValueSource(val);

export const env = <t extends Zod.ZodType>(
	name: string,
	schema: t,
): EnvSource<t> => new EnvSource(name, schema);

export abstract class Source<t> {
	// needed for type inference to work
	get $$t(): t {
		return undefined as any;
	}

	isSecret = false;

	secret(value = true) {
		this.isSecret = value;
		return this;
	}
}
export { Source as t };

export class ValueSource<t> extends Source<t> {
	constructor(readonly value: t) {
		super();
	}
}
export { ValueSource as Value };

export class EnvSource<t extends Zod.ZodType> extends Source<Zod.output<t>> {
	constructor(
		readonly name: string,
		readonly schema: t,
	) {
		super();
	}
}

export { EnvSource as Env };
