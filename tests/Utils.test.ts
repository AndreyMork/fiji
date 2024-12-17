import * as Japa from '@japa/runner';

import * as Fiji from '#Src/Main.ts';

const test = Japa.test;

test.group('Utils', (group) => {
	const originalEnv = process.env;

	group.setup(() => {
		process.env = {
			API_KEY: '1234567890',
			HOST: 'localhost',
			ENABLE_LOGGING: 'true',
		};
	});

	group.teardown(() => {
		process.env = originalEnv;
	});

	test('`parseEnv` should parse environment variables correctly', ({
		expect,
		expectTypeOf,
	}) => {
		const env = Fiji.parseEnv({
			API_KEY: Fiji.Zod.string(),
			HOST: Fiji.Zod.string(),
			ENABLE_LOGGING: Fiji.Zod.boolean(),
		});

		expect(env).toStrictEqual({
			API_KEY: '1234567890',
			HOST: 'localhost',
			ENABLE_LOGGING: true,
		});

		expectTypeOf(env).toEqualTypeOf<{
			API_KEY: string;
			HOST: string;
			ENABLE_LOGGING: boolean;
		}>();
	});

	test('`parseEnv` should parse environment variables correctly with custom env source', ({
		expect,
		expectTypeOf,
	}) => {
		const customEnv = {
			API_KEY: '0987654321',
			HOST: 'example.com',
			ENABLE_LOGGING: 'false',
		};

		const env = Fiji.parseEnv(
			{
				API_KEY: Fiji.Zod.string(),
				HOST: Fiji.Zod.string(),
				ENABLE_LOGGING: Fiji.Zod.boolean(),
			},
			customEnv,
		);

		expect(env).toStrictEqual({
			API_KEY: '0987654321',
			HOST: 'example.com',
			ENABLE_LOGGING: false,
		});

		expectTypeOf(env).toEqualTypeOf<{
			API_KEY: string;
			HOST: string;
			ENABLE_LOGGING: boolean;
		}>();
	});

	test('`parseEnv` should throw an error for invalid environment variable', ({
		expect,
	}) => {
		expect(() => {
			Fiji.parseEnv({ ENABLE_LOGGING: Fiji.Zod.number() });
		}).toThrowError();
	});

	test('`parseEnv1` should parse a single environment variable correctly', ({
		expect,
		expectTypeOf,
	}) => {
		const enableLogging = Fiji.parseEnv1('ENABLE_LOGGING', Fiji.Zod.boolean());

		expect(enableLogging).toBe(true);
		expectTypeOf(enableLogging).toEqualTypeOf<boolean>();
	});

	test('`parseEnv1` should throw an error for invalid environment variable', ({
		expect,
	}) => {
		expect(() => {
			Fiji.parseEnv1('ENABLE_LOGGING', Fiji.Zod.number());
		}).toThrowError();
	});

	test('`parseEnv1` should parse environment variables correctly with custom env source', ({
		expect,
		expectTypeOf,
	}) => {
		const customEnv = {
			ENABLE_LOGGING: 'false',
		};

		const enableLogging = Fiji.parseEnv1(
			'ENABLE_LOGGING',
			Fiji.Zod.boolean(),
			customEnv,
		);

		expect(enableLogging).toBe(false);
		expectTypeOf(enableLogging).toEqualTypeOf<boolean>();
	});
});
