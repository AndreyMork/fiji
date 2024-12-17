import * as Znv from 'znv';
import type * as Z from 'zod';

/**
 * Parses environment variables using the provided Zod schemas.
 *
 * This function is a wrapper around the `Znv.parseEnv` method.
 *
 * @template schemas - A record of Zod schemas to validate the environment variables.
 * @param {schemas} schemas - The Zod schemas to use for validation.
 * @param {NodeJS.ProcessEnv} [env=process.env] - The environment variables to parse. Defaults to process.env.
 * @throws {ZodError} If any of the environment variables do not match the provided schemas.
 *
 * @example
 * const env = parseEnv({ API_KEY: Zod.string().min(10) });
 * console.log(env.API_KEY);
 */
export const parseEnv = <schemas extends Record<string, Z.ZodType<any>>>(
	schemas: schemas,
	env: NodeJS.ProcessEnv = process.env,
): { [key in keyof schemas]: Z.output<schemas[key]> } => {
	const result = Znv.parseEnv(
		env,
		// @ts-expect-error
		schemas,
	);

	// @ts-expect-error
	return result;
};

/**
 * Parses a single environment variable using the provided Zod schema.
 *
 * This function is a wrapper around the `Znv.parseEnv` method for a single variable.
 *
 * @template schema - A Zod schema to validate the environment variable.
 * @param {string} name - The name of the environment variable to parse.
 * @param {schema} schema - The Zod schema to use for validation.
 * @param {NodeJS.ProcessEnv} [env=process.env] - The environment variables to parse. Defaults to process.env.
 * @throws {ZodError} If the environment variable does not match the provided schema.
 *
 * @example
 * const apiKey = parseEnv1('API_KEY', Zod.string().min(10));
 */
export const parseEnv1 = <schema extends Z.ZodType<any>>(
	name: string,
	schema: schema,
	env: NodeJS.ProcessEnv = process.env,
): Z.output<schema> => parseEnv({ [name]: schema }, env)[name]!;
