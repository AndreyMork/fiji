import type * as Strukt from '@ayka/domistrukt';
import * as Z from 'zod';

import * as Source from './Source.ts';

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

export const logLevel = (
	name: string,
	defaultLevel?: (typeof logLevels)[number],
) => Source.env(name, Z.enum(logLevels).default(defaultLevel ?? 'info'));
