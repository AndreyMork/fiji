import * as Japa from '@japa/runner';

import mockFs from 'mock-fs';
import * as Fiji from '#Main';

// import type * as T from '#Src/Types/Types.d.ts';

const test = Japa.test;

test.group('Config/EnvSource', (group) => {
	const originalEnv = process.env;

	group.setup(() => {
		process.env = {
			PORT: '8080',
			HOST: 'localhost',
			URL: 'https://example.com',
			JSON: '{"a": "a", "b": 1}',
		};
	});

	group.teardown(() => {
		process.env = originalEnv;
	});

	test('should handle environment variables using ctx.env', ({
		expect,
		expectTypeOf,
	}) => {
		const config = Fiji.init((ctx) => ({
			port: ctx.env('PORT', ctx.z.port()),
			host: ctx.env('HOST', ctx.z.string()),
		})).load();

		const target = {
			port: 8080,
			host: 'localhost',
		};

		expect(config).toEqual(target);
		expectTypeOf(config).toMatchTypeOf<typeof target>();
	});

	test('should manage secret environment variables correctly', ({
		expect,
		expectTypeOf,
	}) => {
		const config = Fiji.init((ctx) => ({
			port: ctx.env('PORT', ctx.z.port()),
			host: ctx.env('HOST', ctx.z.string()).secret(),
		})).load();

		const target = {
			port: 8080,
			host: 'localhost',
		};

		const secretTarget = {
			port: 8080,
			host: Fiji.Config.defaults.secretMarker,
		};

		expect(config).toEqual(target);
		expect(config.$toJS({ hideSecrets: true })).toEqual(secretTarget);
		expectTypeOf(config).toMatchTypeOf<typeof target>();
	});

	test('should parse JSON environment variables', ({
		expect,
		expectTypeOf,
	}) => {
		const config = Fiji.init((ctx) => ({
			port: ctx.env('PORT', ctx.z.port()),
			host: ctx.env('HOST', ctx.z.string()),
			json: ctx.env(
				'JSON',
				ctx.z.object({
					a: ctx.z.string(),
					b: ctx.z.number(),
				}),
			),
		})).load();

		const target = {
			port: 8080,
			host: 'localhost',
			json: { a: 'a', b: 1 },
		};

		expect(config).toEqual(target);
		expectTypeOf(config).toMatchTypeOf<typeof target>();
	});

	test('should validate environment variable values', ({ expect }) => {
		const def = Fiji.init((ctx) => ({
			port: ctx.env('PORT', ctx.z.boolean()),
		}));

		expect(() => def.load()).toThrow();
	});

	test('should handle optional environment variables', ({
		expect,
		expectTypeOf,
	}) => {
		const config = Fiji.init((ctx) => ({
			port: ctx.env('PORT', ctx.z.port()),
			host: ctx.env('HOST', ctx.z.string()),
			missing: ctx.env('MISSING', ctx.z.string().optional()),
			defaulted: ctx.env('DEFAULTED', ctx.z.string().default('default')),
		})).load();

		const target = {
			port: 8080,
			host: 'localhost',
			missing: undefined as string | undefined,
			defaulted: 'default',
		};

		expect(config).toEqual(target);
		expectTypeOf(config).toMatchTypeOf<typeof target>();
	});

	test('should use Zod output type for environment variables', ({
		expect,
		expectTypeOf,
	}) => {
		const config = Fiji.init((ctx) => ({
			url: ctx.env(
				'URL',
				ctx.z
					.string()
					.url()
					.transform((str) => new URL(str)),
			),
		})).load();

		const target = {
			url: new URL('https://example.com'),
		};

		expect(config).toEqual(target);
		expectTypeOf(config).toMatchTypeOf<typeof target>();
	});
});

test.group('Config: `load`', () => {
	test('should use supplied source for environment variables', ({ expect }) => {
		const config = Fiji.init((ctx) => ({
			port: ctx.env('PORT', ctx.z.port()),
		})).load({ envSource: { PORT: '8080' } });

		expect(config).toEqual({ port: 8080 });
	});

	test('should allow patch to override source environment variables', ({
		expect,
	}) => {
		const config = Fiji.init((ctx) => ({
			port: ctx.env('PORT', ctx.z.port()),
		})).load({ envSource: { PORT: '8080' }, envPatch: { PORT: '8081' } });

		expect(config).toEqual({ port: 8081 });
	});
});

test.group('Config: `load` from filesystem', (group) => {
	const env1 = {
		path: 'mock/env1',
		content: `
				PORT=8080
				HOST=localhost
			`,
	};

	const env2 = {
		path: 'mock/env2',
		content: `
				API_KEY=secret-key-123
				DATABASE_URL="postgres://localhost:5432"
			`,
	};

	const env3 = {
		path: 'mock/env3',
		content: `
				PORT=8081
			`,
	};

	group.setup(() => {
		mockFs({
			[env1.path]: env1.content,
			[env2.path]: env2.content,
			[env3.path]: env3.content,
		});
	});

	group.teardown(() => {
		mockFs.restore();
	});

	test('should load environment variables from a file', ({ expect }) => {
		const def = Fiji.init((ctx) => ({
			host: ctx.env('HOST', ctx.z.string()),
			port: ctx.env('PORT', ctx.z.port()),
			apiKey: ctx.env('API_KEY', ctx.z.string()).secret(),
			dbUrl: ctx.env('DATABASE_URL', ctx.z.string().url()).secret(),
		}));

		let config: typeof def.$$fijiConfig;

		expect(() => {
			config = def.load({ envFiles: [env1.path, env2.path] });
		}).not.toThrow();

		expect(config!.$toJS()).toEqual({
			host: 'localhost',
			port: 8080,
			apiKey: 'secret-key-123',
			dbUrl: 'postgres://localhost:5432',
		});
	});

	test('should override environment variables from multiple files', ({
		expect,
	}) => {
		const def = Fiji.init((ctx) => ({
			host: ctx.env('HOST', ctx.z.string()),
			port: ctx.env('PORT', ctx.z.port()),
		}));

		let config: typeof def.$$fijiConfig;

		expect(() => {
			config = def.load({ envFiles: [env1.path, env2.path, env3.path] });
		}).not.toThrow();

		expect(config!.$toJS()).toEqual({
			host: 'localhost',
			port: 8081,
		});
	});

	test('should throw error if environment file does not exist', ({
		expect,
	}) => {
		const def = Fiji.init((ctx) => ({
			host: ctx.env('HOST', ctx.z.string()),
			port: ctx.env('PORT', ctx.z.port()),
		}));

		expect(() => def.load({ envFiles: ['mock/not-exist'] })).toThrow();
	});
});

test.group('Config: environment misc', () => {
	test('should show environment information', ({ expect }) => {
		const config = Fiji.init((ctx) => ({
			port: ctx.env('PORT', ctx.z.port()),
			host: ctx.env('HOST', ctx.z.string()),
			logs: ctx.env('LOGS', ctx.z.boolean()),
			optional: ctx.env('OPTIONAL', ctx.z.string().optional()),
			defaulted: ctx.env('DEFAULTED', ctx.z.string().default('default')),
		})).load({
			envSource: {
				PORT: '8080',
				UNUSED: 'unused',
				LOGS: 'true',
			},
			envPatch: {
				HOST: 'localhost',
			},
		});

		const target = {
			defaulted: ['DEFAULTED'],
			missing: ['OPTIONAL'],
			loaded: ['LOGS', 'PORT'],
			patched: ['HOST'],
			unused: [],
		};

		const target2 = {
			...target,
			unused: ['UNUSED'],
		};

		expect(config.$envInfo()).toEqual(target);
		expect(config.$envInfo({ showUnused: true })).toEqual(target2);
	});

	test('should provide access to environment object', ({ expect }) => {
		const config = Fiji.init((ctx) => ({
			port: ctx.env('PORT', ctx.z.port()),
		})).load({
			envSource: {
				PORT: '8080',
				HOST: 'localhost',
			},
		});

		expect(config.$env).toBeInstanceOf(Fiji.Env.t);
		expect(config.$env.toJS()).toEqual({
			PORT: '8080',
			HOST: 'localhost',
		});
		expect(config.$parsedEnv).toEqual({
			PORT: 8080,
		});
	});
});
