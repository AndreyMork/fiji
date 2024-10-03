import * as Japa from '@japa/runner';
import type * as Zod from 'zod';
import type * as Source from '#Src/Source.ts';
import type * as Types from '#Src/Types/Types.d.ts';

const test = Japa.test;

test.group('Types', () => {
	test('`rawConfig` type is correct', ({ expectTypeOf }) => {
		expectTypeOf<Types.rawConfig>().toEqualTypeOf<Record<PropertyKey, any>>();
		expectTypeOf<Types.rawConfig>().not.toEqualTypeOf<number>();
	});

	test('`patch` type is correct', ({ expectTypeOf }) => {
		type testConfig = {
			a: number;
			b: Source.EnvSource<Zod.ZodString>;
			c: {
				d: Source.t<boolean>;
				e: number[];
			};
		};

		expectTypeOf<Types.patch<testConfig>>().toEqualTypeOf<{
			a?: Types.configValue<number>;
			b?: Types.configValue<string>;
			c?: {
				d?: Types.configValue<boolean>;
				e?: Types.configValue<number[]>;
			};
		}>();

		expectTypeOf<Types.patch<testConfig>>().not.toEqualTypeOf<testConfig>();

		expectTypeOf<Types.patch<testConfig>>().not.toEqualTypeOf<{
			a?: Types.configValue<number>;
			b?: Types.configValue<number>;
			c?: {
				d?: Types.configValue<boolean>;
				e?: Types.configValue<number[]>;
			};
		}>();
	});

	test('`extension` type is correct', ({ expectTypeOf }) => {
		type baseConfig = {
			a: number;
			b: string;
		};

		type extendedConfig = {
			b: boolean;
			c: number[];
		};

		expectTypeOf<Types.extension<baseConfig, extendedConfig>>().toEqualTypeOf<{
			a: number;
			b: boolean;
			c: number[];
		}>();
		expectTypeOf<
			Types.extension<baseConfig, extendedConfig>
		>().not.toEqualTypeOf<baseConfig>();
	});

	test('`config` type is correct', ({ expectTypeOf }) => {
		type testConfig = {
			a: Source.t<number>;
			b: string;
			c: {
				d: Source.t<boolean>;
				e: number[];
			};
		};

		expectTypeOf<Types.config<testConfig>>().toEqualTypeOf<{
			a: number;
			b: string;
			c: {
				d: boolean;
				e: number[];
			};
		}>();
		expectTypeOf<Types.config<testConfig>>().not.toEqualTypeOf<testConfig>();
	});
});
