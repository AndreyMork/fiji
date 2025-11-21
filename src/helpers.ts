import type * as Strukt from '@ayka/domistrukt';
import * as Z from 'zod';

import * as Source from './Source.ts';

/**
 * Defines a Zod schema for an environment variable based on a Strukt enum.
 *
 * @template t - The type of the Strukt enum.
 * @param {string} name - The name of the environment variable.
 * @param {t} strukt - The Strukt enum to use for validation.
 * @returns {Source.t<t['$$t']>} The Zod schema for the environment variable.
 */

export const enumStrukt = <t extends Strukt.Enum.enumStrukt<any>>(
	name: string,
	strukt: t,
): Source.t<t['$$t']> => Source.env(name, Z.enum(strukt.$toArray() as any));

export const logLevels = [
	'fatal',
	'error',
	'warn',
	'info',
	'debug',
	'trace',
	'silent',
] as const;

/**
 * Defines a Zod schema for a log level environment variable.
 *
 * @param {string} name - The name of the environment variable.
 * @param {typeof logLevels[number]} [defaultLevel='info'] - The default log level.
 * @returns {Z.ZodType<typeof logLevels[number]>} The Zod schema for the log level.
 */
export const logLevel = (
	name: string,
	defaultLevel?: (typeof logLevels)[number],
) => Source.env(name, Z.enum(logLevels).default(defaultLevel ?? 'info'));
