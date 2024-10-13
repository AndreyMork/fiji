import * as Japa from '@japa/runner';

import * as Fiji from '#Main';

// import type * as T from '#Src/Types/Types.d.ts';

const test = Japa.test;

test.group('Config', () => {
	test('creates config with simple definition', ({ expect, expectTypeOf }) => {
		const config = Fiji.init({
			value1: 1,
			value2: 2,
		}).load();

		expect(config).toBeInstanceOf(Fiji.Config.t);
		expect(config.value1).toBe(1);
		expect(config.value2).toBe(2);
		expectTypeOf(config).toMatchTypeOf<{
			value1: number;
			value2: number;
		}>();
	});

	test('initializes config using a function', ({ expect, expectTypeOf }) => {
		const config = Fiji.init(() => ({
			value1: 1,
			value2: 2,
		})).load();

		expect(config).toBeInstanceOf(Fiji.Config.t);
		expect(config.value1).toBe(1);
		expect(config.value2).toBe(2);
		expectTypeOf(config).toMatchTypeOf<{
			value1: number;
			value2: number;
		}>();

		expectTypeOf(config).not.toMatchTypeOf<{ value: string }>();
	});

	test('handles nested definition in config', ({ expect, expectTypeOf }) => {
		const config = Fiji.init(() => ({
			value1: 1,
			value2: 2,
			nested: {
				value3: 3,
			},
		})).load();

		expect(config).toBeInstanceOf(Fiji.Config.t);
		const target = {
			value1: 1,
			value2: 2,
			nested: { value3: 3 },
		};

		expect(config).toEqual(target);

		expectTypeOf(config).toMatchTypeOf<typeof target>();
	});
});

test.group('Config: `toJS`', () => {
	test('converts config to plain object', ({ expect }) => {
		const config = Fiji.init({
			value1: 1,
			value2: 2,
			nested: {
				value3: 3,
			},
		}).load();

		const plainObject = config.$toJS();
		expect(plainObject).toEqual({
			value1: 1,
			value2: 2,
			nested: { value3: 3 },
		});
	});

	test('hides secret values when specified', ({ expect }) => {
		const config = Fiji.init((ctx) => ({
			value: ctx.val(1),
			secret1: ctx.secret('a'),
			secret2: ctx.value('b').secret(),
		})).load();

		const secretTarget = {
			value: 1,
			secret1: Fiji.Config.defaults.secretMarker,
			secret2: Fiji.Config.defaults.secretMarker,
		};

		expect(config.$toJS({ hideSecrets: true })).toEqual(secretTarget);
	});

	test('handles arrays and nested objects', ({ expect }) => {
		const config = Fiji.init({
			arr: [1, 2, 3],
			nested: {
				value: 4,
			},
		}).load();

		const plainObject = config.$toJS();
		expect(plainObject).toEqual({
			arr: [1, 2, 3],
			nested: { value: 4 },
		});
	});
});

test.group('Config/ValueSource', () => {
	test('handles ctx.val and ctx.value correctly', ({
		expect,
		expectTypeOf,
	}) => {
		const config = Fiji.init((ctx) => ({
			value1: ctx.val(1),
			value2: ctx.value('abc'),
		})).load();

		const target = {
			value1: 1,
			value2: 'abc',
		};

		expect(config).toEqual(target);
		expectTypeOf(config).toMatchTypeOf<typeof target>();
	});

	test('manages secret values correctly', ({ expect, expectTypeOf }) => {
		const config = Fiji.init((ctx) => ({
			value: ctx.val(1),
			secret1: ctx.secret('a'),
			secret2: ctx.value('b').secret(),
		})).load();

		const target = {
			value: 1,
			secret1: 'a',
			secret2: 'b',
		};

		const secretTarget = {
			value: 1,
			secret1: Fiji.Config.defaults.secretMarker,
			secret2: Fiji.Config.defaults.secretMarker,
		};

		expect(config).toEqual(target);
		expect(config.$toJS({ hideSecrets: true })).toEqual(secretTarget);
		expectTypeOf(config).toMatchTypeOf<typeof target>();
	});

	test('handles composite values correctly', ({ expect, expectTypeOf }) => {
		const config = Fiji.init((ctx) => ({
			nested1: {
				value1: 1,
			},
			nested2: ctx.val({
				value2: 'abc',
			}),
			arr1: [1, 2, 3],
			arr2: ctx.val([4, 5, 6]),
		})).load();

		expect(config).toBeInstanceOf(Fiji.Config.t);

		const target = {
			nested1: { value1: 1 },
			nested2: { value2: 'abc' },
			arr1: [1, 2, 3],
			arr2: [4, 5, 6],
		};

		expect(config).toEqual(target);
		expectTypeOf(config).toMatchTypeOf<typeof target>();
	});

	test('keeps source values in arrays', ({ expect, expectTypeOf }) => {
		const config = Fiji.init((ctx) => ({
			arr: [ctx.val(7), ctx.val(8), ctx.val(9)],
		})).load();

		expect(config).toBeInstanceOf(Fiji.Config.t);

		const target = {
			arr: [Fiji.Source.val(7), Fiji.Source.val(8), Fiji.Source.val(9)],
		};

		expect(config).toEqual(target);
		expectTypeOf(config).toMatchTypeOf<typeof target>();
		expectTypeOf(config.arr).not.toEqualTypeOf<number[]>();
	});
});
