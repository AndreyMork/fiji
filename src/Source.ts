import type * as Zod from 'zod';

export { Source, Source as t };

export type source = EnvSource<any> | ValueSource<any> | MappedSource<any, any>;

abstract class Source<t> {
	// needed for type inference to work
	get $$t(): t {
		return undefined as any;
	}

	isSecret = false;

	secret(value = true) {
		this.isSecret = value;
		return this;
	}

	map<output>(fn: (input: t) => output) {
		const mapped = new MappedSource(this, fn);

		if (this.isSecret) {
			return mapped.secret();
		}

		return mapped;
	}
}

// Value

export { ValueSource, ValueSource as Value };
class ValueSource<t> extends Source<t> {
	constructor(readonly value: t) {
		super();
	}
}

export { value as val };
export const value = <t>(val: t) => new ValueSource(val);
export const secretValue = <t>(val: t) => value(val).secret();

// Env

export { EnvSource, EnvSource as Env };
class EnvSource<t extends Zod.ZodType> extends Source<Zod.output<t>> {
	constructor(
		readonly name: string,
		readonly schema: t,
	) {
		super();
	}
}

export const env = <t extends Zod.ZodType>(
	name: string,
	schema: t,
): EnvSource<t> => new EnvSource(name, schema);

export const secretEnv = <t extends Zod.ZodType>(
	name: string,
	schema: t,
): EnvSource<t> => env(name, schema).secret();

// Mapped

export { MappedSource, MappedSource as Mapped };
class MappedSource<input, output> extends Source<output> {
	constructor(
		readonly source: Source<input>,
		readonly fn: (input: input) => output,
	) {
		super();
	}
}
