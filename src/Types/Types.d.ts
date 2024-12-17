import type * as Helpers from '../Helpers.ts';
import type * as Source from '../Source.ts';

export type rawConfig = Record<PropertyKey, any>;

export type configValue<t> = t | Source.t<t>;

export type patch<t extends rawConfig> = Partial<{
	[key in keyof t]: t[key] extends Source.t<infer r>
		? configValue<r>
		: t[key] extends any[]
			? configValue<t[key]>
			: t[key] extends rawConfig
				? patch<t[key]>
				: configValue<t[key]>;
}>;

export type extension<x extends rawConfig, y extends rawConfig> = {
	[key in keyof x | keyof y]: key extends keyof y
		? y[key]
		: key extends keyof x
			? x[key]
			: never;
};

export type config<t extends rawConfig> = {
	[key in keyof t]: t[key] extends Source.t<infer value>
		? value
		: t[key] extends any[]
			? t[key]
			: t[key] extends rawConfig
				? config<t[key]>
				: t[key];
};

export type logLevel = Helpers.logLevels[number];
