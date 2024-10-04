import * as Japa from '@japa/runner';

import * as Fiji from '#Src/Main.ts';

const test = Japa.test;

test.group('Source - ValueSource', (group) => {
	const originalEnv = process.env;
	group.setup(() => {
		process.env = {};
	});

	group.teardown(() => {
		process.env = originalEnv;
	});

	test('`ValueSource` works', ({ expect }) => {
		const factory = Fiji.init((ctx) => ({
			// Primitive values
			stringPrimitive: 'Hello',
			numberPrimitive: 42,
			booleanPrimitive: true,

			// ctx.value
			stringValue: ctx.value('World'),
			numberValue: ctx.value(84),
			booleanValue: ctx.value(false),

			// Objects and arrays
			objectValue: ctx.value({ key: 'value' }),
			arrayValue: ctx.value([1, 2, 3]),
			nestedValue: ctx.value({
				array: [4, 5],
				object: { nestedKey: 'value' },
			}),

			// Nested object without ctx.value
			nestedObject: {
				prop1: 'value1',
				prop2: 42,
				deeplyNested: {
					prop3: true,
					prop4: [7, 8, 9],
				},
			},
		}));

		expect(factory.toJS()).toEqual({
			stringPrimitive: 'Hello',
			numberPrimitive: 42,
			booleanPrimitive: true,
			stringValue: 'World',
			numberValue: 84,
			booleanValue: false,
			objectValue: { key: 'value' },
			arrayValue: [1, 2, 3],
			nestedValue: {
				array: [4, 5],
				object: { nestedKey: 'value' },
			},
			nestedObject: {
				prop1: 'value1',
				prop2: 42,
				deeplyNested: {
					prop3: true,
					prop4: [7, 8, 9],
				},
			},
		});
	});

	test('infers types correctly with and without `ctx.value`', ({
		expectTypeOf,
	}) => {
		const factory = Fiji.init((ctx) => ({
			withoutCtx: {
				string: 'hello',
				number: 42,
				boolean: true,
				array: [1, 2, 3],
				object: { key: 'value' },
			},
			withCtx: {
				string: ctx.value('hello'),
				number: ctx.value(42),
				boolean: ctx.value(true),
				array: ctx.value([1, 2, 3]),
				object: ctx.value({ key: 'value' }),
			},
		}));

		const config = factory.toJS();

		expectTypeOf(config).toMatchTypeOf<{
			withoutCtx: {
				string: string;
				number: number;
				boolean: boolean;
				array: number[];
				object: { key: string };
			};
			withCtx: {
				string: string;
				number: number;
				boolean: boolean;
				array: number[];
				object: { key: string };
			};
		}>();

		expectTypeOf(config).not.toMatchTypeOf<{
			withoutCtx: {
				string: number;
				number: string;
				boolean: string;
				array: string[];
				object: { key: number };
			};
			withCtx: {
				string: number;
				number: string;
				boolean: string;
				array: string[];
				object: { key: number };
			};
		}>();
	});
	test('`toJS` ignores ctx.value in arrays', ({ expect }) => {
		const factory = Fiji.init((ctx) => ({
			simpleArray: [1, 2, 3],
			arrayWithCtxValue: [ctx.value(1), 2, ctx.value(3)],
			nestedArray: [
				[ctx.value(4), 5],
				[6, ctx.value(7)],
			],
			objectWithArray: {
				arr: [ctx.value(8), 9, ctx.value(10)],
			},
		}));

		const result = factory.toJS();

		expect(result).toStrictEqual({
			simpleArray: [1, 2, 3],
			arrayWithCtxValue: [Fiji.Source.value(1), 2, Fiji.Source.value(3)],
			nestedArray: [
				[Fiji.Source.value(4), 5],
				[6, Fiji.Source.value(7)],
			],
			objectWithArray: {
				arr: [Fiji.Source.value(8), 9, Fiji.Source.value(10)],
			},
		});

		expect(result).not.toEqual({
			simpleArray: [1, 2, 3],
			arrayWithCtxValue: [1, 2, 3],
			nestedArray: [
				[4, 5],
				[6, 7],
			],
			objectWithArray: {
				arr: [8, 9, 10],
			},
		});

		expect(result.arrayWithCtxValue).toBeInstanceOf(Array);
		expect(result.nestedArray[0]).toBeInstanceOf(Array);
		expect(result.nestedArray[1]).toBeInstanceOf(Array);
		expect(result.objectWithArray.arr).toBeInstanceOf(Array);
	});
});

test.group('Source - EnvSource', () => {
	test('`toJS` handles EnvSource correctly', ({ expect }) => {
		const factory = Fiji.init((ctx) => ({
			dbUrl: ctx.env('DATABASE_URL', ctx.z.string().url()),
			apiKey: ctx.env('API_KEY', ctx.z.string()),
			port: ctx.env('PORT', ctx.z.port()),
		}));

		const mockEnv = {
			DATABASE_URL: 'postgres://localhost:5432',
			API_KEY: 'secret-key-123',
			PORT: '8080',
		};

		factory.load({ envSource: mockEnv });
		const result = factory.toJS();

		expect(result).toEqual({
			dbUrl: 'postgres://localhost:5432',
			apiKey: 'secret-key-123',
			port: 8080,
		});
	});

	test('`toJS` handles secret env values correctly', ({ expect }) => {
		const factory = Fiji.init((ctx) => ({
			normalEnv: ctx.env('NORMAL_ENV', ctx.z.string()),
			secretEnv: ctx.env('SECRET_ENV', ctx.z.string()).secret(),
		}));

		const mockEnv = {
			NORMAL_ENV: 'visible',
			SECRET_ENV: 'hidden',
		};

		factory.load({ envSource: mockEnv });

		const resultWithSecrets = factory.toJS({ hideSecrets: false });
		expect(resultWithSecrets).toEqual({
			normalEnv: 'visible',
			secretEnv: 'hidden',
		});

		const resultHiddenSecrets = factory.toJS({ hideSecrets: true });
		expect(resultHiddenSecrets).toEqual({
			normalEnv: 'visible',
			secretEnv: factory.secretMarker,
		});
	});
	test('`toJS` throws error for missing env variables', ({ expect }) => {
		const factory = Fiji.init((ctx) => ({
			requiredEnv: ctx.env('REQUIRED_ENV', ctx.z.string()),
		}));

		expect(() => factory.toJS()).toThrow();
	});

	test('`toJS` uses default value for missing env variables', ({ expect }) => {
		const factory = Fiji.init((ctx) => ({
			optionalEnv: ctx.env(
				'OPTIONAL_ENV',
				ctx.z.string().default('default-value'),
			),
		}));
		factory.load();

		const result = factory.toJS();

		expect(result).toEqual({
			optionalEnv: 'default-value',
		});
	});

	test('`toJS` validates env variables correctly', ({ expect }) => {
		const factory = Fiji.init((ctx) => ({
			port: ctx.env('PORT', ctx.z.port()),
			url: ctx.env('URL', ctx.z.string().url()),
		}));

		const validEnv = {
			PORT: '8080',
			URL: 'https://example.com',
		};

		expect(() => factory.load({ envSource: validEnv }).toJS()).not.toThrow();

		const invalidEnv = {
			PORT: 'not-a-number',
			URL: 'not-a-url',
		};

		expect(() => factory.load({ envSource: invalidEnv }).toJS()).toThrow();
	});

	test('`toJS` validates json schemas', ({ expect }) => {
		const factory = Fiji.init((ctx) => ({
			jsonEnv: ctx.env(
				'JSON_ENV',
				ctx.z.object({
					id: ctx.z.number(),
					name: ctx.z.string(),
					tags: ctx.z.array(ctx.z.string()),
				}),
			),
		}));

		const validEnv = {
			JSON_ENV: JSON.stringify({ id: 1, name: 'test', tags: ['a', 'b'] }),
		};

		expect(() => factory.load({ envSource: validEnv }).toJS()).not.toThrow();

		const invalidEnv = {
			JSON_ENV: JSON.stringify({
				id: 'not-a-number',
				name: 123,
				tags: 'not-an-array',
			}),
		};

		expect(() => factory.load({ envSource: invalidEnv }).toJS()).toThrow();
	});

	test('`envSource` infers correct types', ({ expectTypeOf }) => {
		const factory = Fiji.init((ctx) => ({
			port: ctx.env('PORT', ctx.z.port().default(3000)),
			url: ctx.env('URL', ctx.z.string().url().optional()),
			debug: ctx.env('DEBUG', ctx.z.boolean()),
			count: ctx.env('COUNT', ctx.z.number()),
			jsonData: ctx.env(
				'JSON_DATA',
				ctx.z.object({
					id: ctx.z.number(),
					name: ctx.z.string(),
				}),
			),
		}));

		type config = typeof factory.$$config;

		expectTypeOf<config>().toMatchTypeOf<{
			port: number;
			url?: string;
			debug: boolean;
			count: number;
			jsonData: {
				id: number;
				name: string;
			};
		}>();

		expectTypeOf<config>().not.toMatchTypeOf<{
			port: string;
			url: number;
			debug: string;
			count: boolean;
			jsonData: {
				id: string;
				name: number;
			};
		}>();
	});
});
