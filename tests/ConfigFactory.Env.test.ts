import * as Path from 'node:path';
import * as Japa from '@japa/runner';

import * as Fiji from '#Src/Main.ts';
// import type * as T from '#Src/Types/Types.d.ts';

const test = Japa.test;

test.group('ConfigFactory - env handling', (group) => {
	const originalEnv = process.env;
	group.setup(() => {
		process.env = {};
	});

	group.teardown(() => {
		process.env = originalEnv;
	});

	test('`process.env` is used as a default environment source', ({
		expect,
	}) => {
		const originalEnv = process.env;
		process.env = {
			...process.env,
			TEST_VAR: 'test-value',
		};

		const factory = Fiji.init((ctx) => ({
			testVar: ctx.env('TEST_VAR', ctx.z.string()),
		}));

		expect(() => factory.load().toJS()).not.toThrow();
		expect(factory.toJS()).toEqual({
			testVar: 'test-value',
		});

		// Restore original process.env
		process.env = originalEnv;
	});

	test('`addEnvSource` adds new environment variables', ({ expect }) => {
		const factory = Fiji.init((ctx) => ({
			dbUrl: ctx.env('DATABASE_URL', ctx.z.string().url()),
			apiKey: ctx.env('API_KEY', ctx.z.string()),
		}));

		const initialEnv = {
			DATABASE_URL: 'postgres://localhost:5432',
		};
		factory.addEnvSource(initialEnv);

		expect(() => factory.load().toJS()).toThrow(); // Missing API_KEY

		factory
			.addEnvSource({
				API_KEY: 'secret-key-123',
			})
			.load();

		expect(() => factory.toJS()).not.toThrow();
		expect(factory.toJS()).toEqual({
			dbUrl: 'postgres://localhost:5432',
			apiKey: 'secret-key-123',
		});
	});

	test('`addEnvSource` overrides existing environment variables', ({
		expect,
	}) => {
		const factory = Fiji.init((ctx) => ({
			port: ctx.env('PORT', ctx.z.port()),
		}));

		factory.addEnvSource({ PORT: '3000' }).load();

		expect(factory.toJS()).toEqual({ port: 3000 });

		factory.addEnvSource({ PORT: '4000' }).load();

		expect(factory.toJS()).toEqual({ port: 4000 });
	});

	test('`addEnvSourceFile` loads environment variables from a file', async ({
		expect,
		// @ts-expect-error
		fs,
	}) => {
		const factory = Fiji.init((ctx) => ({
			dbUrl: ctx.env('DATABASE_URL', ctx.z.string().url()),
			apiKey: ctx.env('API_KEY', ctx.z.string()),
		}));

		const envFileName = '.env';
		await fs.create(
			envFileName,
			'DATABASE_URL=postgres://localhost:5432\nAPI_KEY=secret-key-123',
		);
		const targetPath = Path.join(fs.basePath, envFileName);

		factory.addEnvFile(targetPath).load();

		expect(factory.toJS()).toEqual({
			dbUrl: 'postgres://localhost:5432',
			apiKey: 'secret-key-123',
		});
	}).skip(true, 'fs plugin does not work'); // COMEBACK

	test('`addEnvFile` with override option overrides existing environment variables', async ({
		expect,
		// @ts-expect-error
		fs,
	}) => {
		const factory = Fiji.init((ctx) => ({
			dbUrl: ctx.env('DATABASE_URL', ctx.z.string().url()),
			apiKey: ctx.env('API_KEY', ctx.z.string()),
		}));

		// Set initial environment variables
		factory
			.addEnvSource({
				DATABASE_URL: 'postgres://initial:5432',
				API_KEY: 'initial-key',
			})
			.load();

		const envFileName = '.env.override';
		await fs.create(
			envFileName,
			'DATABASE_URL=postgres://override:5432\nAPI_KEY=override-key',
		);
		const targetPath = Path.join(fs.basePath, envFileName);

		// Add env file with override option
		factory.addEnvFile(targetPath).load();

		expect(factory.toJS()).toEqual({
			dbUrl: 'postgres://override:5432',
			apiKey: 'override-key',
		});
	}).skip(true, 'fs plugin does not work'); // COMEBACK

	test('`envInfo` returns correct environment information', ({ expect }) => {
		const originalEnv = process.env;
		process.env = {
			...process.env,
			ENV_TEST: 'test',
		};

		const factory = Fiji.init((ctx) => ({
			dbUrl: ctx.env('DATABASE_URL', ctx.z.string().url()),
			apiKey: ctx.env('API_KEY', ctx.z.string()),
			port: ctx.env('PORT', ctx.z.port().default(3000)),
			logLevel: ctx.env('LOG_LEVEL', ctx.z.string().default('info')),
			optional: ctx.env('OPTIONAL', ctx.z.string().optional()),
			envTest: ctx.env('ENV_TEST', ctx.z.string()),
		}));

		factory
			.addEnvSource({
				DATABASE_URL: 'postgres://localhost:5432',
				API_KEY: 'secret-key-123',
			})
			.load();

		const envInfo = factory.envInfo();

		expect(envInfo).toEqual({
			loaded: ['API_KEY', 'DATABASE_URL', 'ENV_TEST'].sort(),
			missing: ['OPTIONAL', 'PORT', 'LOG_LEVEL'].sort(),
			defaulted: ['LOG_LEVEL', 'PORT'].sort(),
			sourced: ['API_KEY', 'DATABASE_URL'].sort(),
		});

		process.env = originalEnv;
	});

	test('`env` returns correct environment variable', ({ expect }) => {
		const factory = Fiji.init((ctx) => ({
			dbUrl: ctx.env('DATABASE_URL', ctx.z.string().url()),
			apiKey: ctx.env('API_KEY', ctx.z.string()),
		}));

		factory
			.addEnvSource({
				DATABASE_URL: 'postgres://localhost:5432',
				API_KEY: 'secret-key-123',
			})
			.load();

		expect(factory.env).toEqual({
			DATABASE_URL: 'postgres://localhost:5432',
			API_KEY: 'secret-key-123',
		});
	});

	test('`resetEnvSource` clears previously added env sources', ({ expect }) => {
		const factory = Fiji.init((ctx) => ({
			dbUrl: ctx.env('DATABASE_URL', ctx.z.string().url()),
			apiKey: ctx.env('API_KEY', ctx.z.string().optional()),
		}));

		factory
			.addEnvSource({
				DATABASE_URL: 'postgres://localhost:5432',
				API_KEY: 'secret-key-123',
			})
			.resetEnvSource()
			.addEnvSource({
				DATABASE_URL: 'postgres://localhost:5432',
			})
			.load();

		expect(factory.env).toEqual({
			DATABASE_URL: 'postgres://localhost:5432',
			API_KEY: undefined,
		});

		const envInfo = factory.envInfo();

		expect(envInfo).toEqual({
			loaded: ['DATABASE_URL'],
			missing: ['API_KEY'],
			defaulted: [],
			sourced: ['DATABASE_URL'],
		});
	});
});
