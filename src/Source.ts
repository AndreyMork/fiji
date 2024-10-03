import type * as Zod from 'zod';

export { value as val };
export const value = <t>(val: t) => new ValueSource(val);

export const env = <t extends Zod.ZodType>(
	name: string,
	schema: t,
): EnvSource<t> => new EnvSource(name, schema);

export { Source as t };
export abstract class Source<t> {
	get $$t(): t {
		throw new Error('Type property is not accessible');
	}

	isSecret = false;

	secret(value = true) {
		this.isSecret = value;
		return this;
	}
}

export { ValueSource as Value };
export class ValueSource<t> extends Source<t> {
	constructor(readonly value: t) {
		super();
	}
}

export { EnvSource as Env };
export class EnvSource<t extends Zod.ZodType> extends Source<Zod.output<t>> {
	constructor(
		readonly name: string,
		readonly schema: t,
	) {
		super();
	}
}
