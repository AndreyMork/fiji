// export { Config as t } from './Config.ts';
// export type { ctx, initFn } from './Config.ts';
//
// export * as Config from './Config.ts';

export * as ConfigDefinition from './ConfigDefinition.ts';
export { init } from './ConfigDefinition.ts';
export type {
	ctx,
	defFn,
	defParams,
	loadOpts,
	loadEnvOpts,
} from './ConfigDefinition.ts';

export * as Config from './Config.ts';
export type { toJSOpts, FijiConfig as config } from './Config.ts';

export * as Source from './Source.ts';
export * as Env from './Env.ts';
export * as Errors from './Errors.ts';

export * as Helpers from './Helpers.ts';

export * as Zod from 'zod';
export * as Znv from 'znv';

export type { rawConfig, patch, extension } from './Types/Types.d.ts';
export type * as Types from './Types/Types.d.ts';
