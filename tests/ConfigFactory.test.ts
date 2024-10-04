import * as Japa from '@japa/runner';
import * as FC from 'fast-check';

import * as Fiji from '#Src/Main.ts';

const test = Japa.test;

test.group('ConfigFactory - `init`', (group) => {
	const originalEnv = process.env;
	group.setup(() => {
		process.env = {};
	});

	group.teardown(() => {
		process.env = originalEnv;
	});

	test('`init` with config object', ({ expect }) => {
		const factory = Fiji.init({
			appName: 'TestApp',
			port: 3000,
			debug: true,
		});

		expect(factory).toBeInstanceOf(Fiji.ConfigFactory.t);
		expect(factory.toJS()).toEqual({
			appName: 'TestApp',
			port: 3000,
			debug: true,
		});
	});

	test('`init` with function', ({ expect }) => {
		const factory = Fiji.init((ctx) => ({
			appName: ctx.value('TestApp'),
			host: 'localhost',
			port: ctx.env('PORT', ctx.z.port().default(3000)),
			debug: ctx.env('DEBUG', ctx.z.boolean().default(false)),
		}));

		expect(factory).toBeInstanceOf(Fiji.ConfigFactory.t);

		factory.load({ envSource: { PORT: '4000', DEBUG: 'true' } });
		const config = factory.toJS();

		expect(config).toEqual({
			appName: 'TestApp',
			host: 'localhost',
			port: 4000,
			debug: true,
		});
	});

	test('type properties are not accessible', ({ expect }) => {
		const factory = Fiji.init({});

		expect(() => factory.$$config).toThrow(
			Fiji.ConfigFactory.TypePropertyError,
		);
		expect(() => factory.$$patch).toThrow(Fiji.ConfigFactory.TypePropertyError);
	});
});

test.group('ConfigFactory - `toJS`', () => {
	test('`toJS` returns correct object', ({ expect }) => {
		const factory = Fiji.init({
			name: 'Test',
			port: 3000,
			nested: {
				value: true,
			},
		});

		const result = factory.toJS();

		expect(result).toEqual({
			name: 'Test',
			port: 3000,
			nested: {
				value: true,
			},
		});
	});

	test('`toJS` handles nested values correctly', ({ expect }) => {
		const factory = Fiji.init(() => ({
			topLevel: 'Top',
			nested: {
				stringValue: 'Nested Hello',
				numberValue: 123,
				booleanValue: false,
				deeplyNested: {
					arrayValue: [1, 2, 3],
					objectValue: { key: 'value' },
				},
			},
		}));

		const result = factory.toJS();

		expect(result).toEqual({
			topLevel: 'Top',
			nested: {
				stringValue: 'Nested Hello',
				numberValue: 123,
				booleanValue: false,
				deeplyNested: {
					arrayValue: [1, 2, 3],
					objectValue: { key: 'value' },
				},
			},
		});
	});

	test('`toJS` hides secrets when specified', ({ expect }) => {
		const factory = Fiji.init((ctx) => ({
			name: 'Test',
			password: ctx.value('secret').secret(),
			nested: {
				apiKey: ctx.value('12345').secret(),
			},
		}));

		const result = factory.toJS({ hideSecrets: true });

		expect(result).toEqual({
			name: 'Test',
			password: factory.secretMarker,
			nested: {
				apiKey: factory.secretMarker,
			},
		});

		const result2 = factory.toJS();

		expect(result2).toEqual({
			name: 'Test',
			password: 'secret',
			nested: {
				apiKey: '12345',
			},
		});
	});

	test('`toJS` throws on missing envs', ({ expect }) => {
		const factory = Fiji.init((ctx) => ({
			port: ctx.env('TEST_PORT', ctx.z.port()),
			apiKey: ctx.env('API_KEY', ctx.z.string()),
		}));

		expect(() => factory.toJS()).toThrow();
	});

	test('`toJS` returns correct types', ({ expectTypeOf }) => {
		const factory = Fiji.init(() => ({
			stringValue: 'Hello',
			numberValue: 42,
			booleanValue: true,
			nested: {
				nestedString: 'Nested',
				nestedNumber: 100,
			},
		}));
		const result = factory.toJS();

		expectTypeOf(result).toEqualTypeOf<{
			stringValue: string;
			numberValue: number;
			booleanValue: boolean;
			nested: {
				nestedString: string;
				nestedNumber: number;
			};
		}>();

		expectTypeOf(result).not.toEqualTypeOf<{
			stringValue: number;
			numberValue: string;
			booleanValue: string;
			nested: {
				nestedString: number;
				nestedNumber: string;
			};
		}>();
	});

	test('`toJS` property test', ({ expect }) => {
		const forbiddenKeys = new Set(['__proto__', 'toString', 'valueOf']);
		FC.assert(
			FC.property(
				FC.object({
					key: FC.string().filter((item) => !forbiddenKeys.has(item)),
				}),
				(target) => {
					const factory = Fiji.init(target);
					const result = factory.toJS();
					expect(result).toEqual(target);
				},
			),
		);
	});
});

test.group('ConfigFactory - `asClass`', () => {
	test('`asClass` returns correct class', ({ expect }) => {
		const factory = Fiji.init({
			appName: 'TestApp',
			port: 3000,
			debug: true,
		});

		class Config extends factory.asClass() {}
		const config = new Config();

		expect(config).toEqual(factory.toJS());
		expect(config.$factory).toBe(factory);
		expect(config.$toJS()).toEqual(factory.toJS());
	});

	test('`asClass` env handling', ({ expect }) => {
		const factory = Fiji.init((ctx) => ({
			appName: 'TestApp',
			port: ctx.env('PORT', ctx.z.number().default(3000)),
			debug: ctx.env('DEBUG', ctx.z.boolean().default(true)),
			apiKey: ctx.env('API_KEY', ctx.z.string()),
		}));

		const envSource = {
			PORT: '8080',
			DEBUG: 'false',
			API_KEY: 'secret-key-123',
		};

		factory.addEnvSource(envSource);

		class Config extends factory.asClass() {}

		expect(() => new Config()).toThrow();

		factory.load();
		const config = new Config();

		expect(config).toEqual({
			appName: 'TestApp',
			port: 8080,
			debug: false,
			apiKey: 'secret-key-123',
		});
		expect(config.$envInfo()).toEqual(factory.envInfo());
	});

	test('`asClass` infers correct types', ({ expectTypeOf }) => {
		const factory = Fiji.init((ctx) => ({
			appName: ctx.value('TestApp'),
			port: ctx.env('PORT', ctx.z.number().default(3000)),
			debug: ctx.env('DEBUG', ctx.z.boolean().default(true)),
			apiKey: ctx.env('API_KEY', ctx.z.string()),
			settings: {
				timeout: ctx.value(5000),
				retries: ctx.env('RETRIES', ctx.z.number().default(3)),
			},
		}));

		class Config extends factory.asClass() {}

		expectTypeOf<Config>().toMatchTypeOf<{
			appName: string;
			port: number;
			debug: boolean;
			apiKey: string;
			settings: {
				timeout: number;
				retries: number;
			};
		}>();

		expectTypeOf<Config>().not.toMatchTypeOf<{
			appName: number; // Changed from string
			port: string; // Changed from number
			debug: string; // Changed from boolean
			apiKey: boolean; // Changed from string
			settings: {
				timeout: string; // Changed from number
				retries: string; // Changed from number
			};
		}>();
	});
});

test.group('ConfigFactory - modification', () => {
	test('`clone` works and does not mutate', ({ expect }) => {
		const factory = Fiji.init((ctx) => ({
			appName: 'TestApp',
			port: ctx.env('PORT', ctx.z.number().default(3000)),
			debug: ctx.env('DEBUG', ctx.z.boolean().default(false)),
			apiKey: ctx.env('API_KEY', ctx.z.string().default('secret-key-123')),
		})).load();

		const clonedFactory = factory.clone().load();
		expect(clonedFactory).not.toBe(factory);
		expect(clonedFactory.toJS()).toEqual(factory.toJS());

		clonedFactory.addEnvSource({ API_KEY: 'secret-key-456' });
		clonedFactory.load();

		expect(clonedFactory.toJS()).not.toEqual(factory.toJS());
	});

	test('`patch` modifies config correctly', ({ expect }) => {
		const factory = Fiji.init((ctx) => ({
			appName: 'TestApp',
			port: ctx.env('PORT', ctx.z.number().default(3000)),
			debug: ctx.env('DEBUG', ctx.z.boolean().default(false)),
			apiKey: ctx.env('API_KEY', ctx.z.string().default('secret-key-123')),
		})).load();

		const patchedFactory = factory
			.patch({
				port: 4000,
				debug: false,
			})
			.load();

		expect(patchedFactory.toJS()).toEqual({
			appName: 'TestApp',
			port: 4000,
			debug: false,
			apiKey: 'secret-key-123',
		});

		// Original factory should remain unchanged
		expect(factory.toJS()).toEqual({
			appName: 'TestApp',
			port: 3000,
			debug: false,
			apiKey: 'secret-key-123',
		});
	});

	test('`patch` ignores unknown values', ({ expect }) => {
		const factory = Fiji.init((ctx) => ({
			appName: 'TestApp',
			port: ctx.env('PORT', ctx.z.number().default(3000)),
			debug: ctx.env('DEBUG', ctx.z.boolean().default(false)),
		})).load();

		const patchedFactory = factory
			.patch({
				port: 4000,
				unknownKey: 'This should be ignored',
			} as any)
			.load();

		expect(patchedFactory.toJS()).toEqual({
			appName: 'TestApp',
			port: 4000,
			debug: false,
		});

		// Ensure the unknown key is not present in the patched config
		expect(patchedFactory.toJS()).not.toHaveProperty('unknownKey');
	});

	test('`patch` parameters type inference', ({ expectTypeOf }) => {
		const factory = Fiji.init((ctx) => ({
			appName: 'TestApp',
			port: ctx.env('PORT', ctx.z.number().default(3000)),
			debug: ctx.env('DEBUG', ctx.z.boolean().default(false)),
			nested: {
				value: 'nested value',
				count: ctx.env('COUNT', ctx.z.number().default(0)),
			},
		}));

		// Correct patch type
		expectTypeOf<typeof factory.$$patch>().toEqualTypeOf<{
			appName?: Fiji.Types.configValue<string>;
			port?: Fiji.Types.configValue<number>;
			debug?: Fiji.Types.configValue<boolean>;
			nested?: {
				value?: Fiji.Types.configValue<string>;
				count?: Fiji.Types.configValue<number>;
			};
		}>();

		// Incorrect patch type
		expectTypeOf<typeof factory.$$patch>().not.toEqualTypeOf<{
			extra?: Fiji.Types.configValue<string>;
			appName?: Fiji.Types.configValue<string>;
			port?: Fiji.Types.configValue<number>;
			debug?: Fiji.Types.configValue<boolean>;
			nested?: {
				value?: Fiji.Types.configValue<string>;
				count?: Fiji.Types.configValue<number>;
			};
		}>();
	});

	test('`extend` adds new properties to the config', ({ expect }) => {
		const baseFactory = Fiji.init((ctx) => ({
			appName: 'BaseApp',
			port: ctx.env('PORT', ctx.z.number().default(3000)),
		}));

		const extendedFactory = baseFactory.extend((ctx) => ({
			debug: ctx.env('DEBUG', ctx.z.boolean().default(false)),
			apiKey: ctx.env('API_KEY', ctx.z.string()),
		}));

		const loadedConfig = extendedFactory.load({
			envSource: {
				PORT: '4000',
				DEBUG: 'true',
				API_KEY: 'secret-key',
			},
		});

		expect(loadedConfig.toJS()).toEqual({
			appName: 'BaseApp',
			port: 4000,
			debug: true,
			apiKey: 'secret-key',
		});
	});

	test('`extend` parameters type inference', ({ expectTypeOf }) => {
		const baseFactory = Fiji.init((ctx) => ({
			appName: 'BaseApp',
			port: ctx.env('PORT', ctx.z.number().default(3000)),
		}));

		const extendedFactory = baseFactory.extend((ctx) => ({
			debug: ctx.env('DEBUG', ctx.z.boolean().default(false)),
		}));

		// Correct extended type
		expectTypeOf<typeof extendedFactory.$$config>().toEqualTypeOf<{
			appName: string;
			port: number;
			debug: boolean;
		}>();

		// Incorrect extended type
		expectTypeOf<typeof extendedFactory.$$config>().not.toEqualTypeOf<{
			appName: string;
			port: number;
		}>();
	});
});
