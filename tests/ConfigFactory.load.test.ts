import * as Japa from '@japa/runner';

import * as Fiji from '#Src/Main.ts';

const test = Japa.test;

test.group('ConfigFactory - `load`', (group) => {
	const originalEnv = process.env;
	group.setup(() => {
		process.env = {};
	});

	const resetEnv = () => {
		process.env = {};
	};

	group.teardown(() => {
		process.env = originalEnv;
	});

	test('`opts.processEnv` overrides `process.env`', ({ expect, cleanup }) => {
		cleanup(resetEnv);

		const factory = Fiji.init((ctx) => ({
			testVar: ctx.env('TEST_VAR', ctx.z.string()),
			optionalVar: ctx.env('OPTIONAL_VAR', ctx.z.string().optional()),
		}));

		process.env = {
			TEST_VAR: 'process-value',
			OPTIONAL_VAR: 'process-optional',
		};

		expect(() =>
			factory.load({
				processEnv: {
					TEST_VAR: 'opts-value',
				},
			}),
		).not.toThrow();

		expect(factory.toJS()).toEqual({
			testVar: 'opts-value',
			optionalVar: undefined,
		});
	});

	test('`opts.envSources` extends and overrides `process.env`', ({
		expect,
		cleanup,
	}) => {
		cleanup(resetEnv);

		const factory = Fiji.init((ctx) => ({
			var1: ctx.env('VAR1', ctx.z.string()),
			var2: ctx.env('VAR2', ctx.z.number()),
			var3: ctx.env('VAR3', ctx.z.boolean()),
		}));

		process.env = {
			VAR1: 'test-value',
			VAR2: '123',
		};

		const envSources = [
			{ VAR1: 'new-value' },
			{ VAR2: '456' },
			{ VAR3: 'true' },
		] as const;

		expect(() =>
			factory.load({
				envSources,
			}),
		).not.toThrow();

		expect(factory.toJS()).toEqual({
			var1: 'new-value',
			var2: 456,
			var3: true,
		});
	});

	test('`opts.envSources` next sources override previous sources', ({
		expect,
		cleanup,
	}) => {
		cleanup(resetEnv);

		const factory = Fiji.init((ctx) => ({
			var1: ctx.env('VAR1', ctx.z.string()),
			var2: ctx.env('VAR2', ctx.z.number()),
			var3: ctx.env('VAR3', ctx.z.boolean()),
		}));

		const envSources = [
			{
				VAR1: 'new-value',
				VAR2: '456',
				VAR3: 'true',
			},
			{ VAR1: 'new-value-2' },
			{ VAR2: '789' },
			{ VAR3: 'false' },
		] as const;

		expect(() =>
			factory.load({
				envSources,
			}),
		).not.toThrow();

		expect(factory.toJS()).toEqual({
			var1: 'new-value-2',
			var2: 789,
			var3: false,
		});
	});

	// TODO: Implement this test
	test('`opts.envFiles` overrides `process.env`', () => {}).skip(
		true,
		'fs plugin does not work',
	);

	// TODO: Implement this test
	test('`opts.envFiles` next sources override previous sources', () => {}).skip(
		true,
		'fs plugin does not work',
	);
});
