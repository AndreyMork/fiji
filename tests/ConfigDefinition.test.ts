import * as Japa from '@japa/runner';

import * as Fiji from '#Src/Main.ts';
// import type * as T from '#Src/Types/Types.d.ts';

const test = Japa.test;

test.group('ConfigDefinition', () => {
	test('`init` should initialize with a simple definition', ({
		expect,
		expectTypeOf,
	}) => {
		const data = {
			a: 1,
			b: 2,
		};

		const def = Fiji.init(data);

		expect(def).toBeInstanceOf(Fiji.ConfigDefinition.t);
		expect(def.$$config).toBeUndefined();
		expectTypeOf(def.$$config).toEqualTypeOf<typeof data>();
	});

	test('`init` should initialize with a nested definition', ({
		expect,
		expectTypeOf,
	}) => {
		const data = {
			a: 1,
			b: 2,
			c: {
				d: 3,
				e: {
					f: 4,
				},
			},
		};

		const def = Fiji.init(data);

		expect(def).toBeInstanceOf(Fiji.ConfigDefinition.t);
		expect(def.$$config).toBeUndefined();
		expectTypeOf(def.$$config).toEqualTypeOf<typeof data>();
	});

	test('`init` should initialize with a function returning a definition', ({
		expect,
		expectTypeOf,
	}) => {
		const def = Fiji.init((ctx) => ({
			a: ctx.val(1),
			b: 2,
		}));

		expect(def).toBeInstanceOf(Fiji.ConfigDefinition.t);
		expectTypeOf(def.$$config).toEqualTypeOf<{ a: number; b: number }>();
	});

	test('`load` should load configuration correctly', ({
		expect,
		expectTypeOf,
	}) => {
		const data = {
			a: 1,
			b: 2,
			c: {
				d: 3,
				e: {
					f: 4,
				},
			},
		};

		const def = Fiji.init(data);

		const config = def.load();

		expect(config).toBeInstanceOf(Fiji.Config.t);
		expect(config.$def).toBe(def);
		expectTypeOf(config).toMatchTypeOf<typeof data>();
	});

	test('`asClass` should convert definition to class', ({
		expect,
		expectTypeOf,
	}) => {
		const def = Fiji.init({
			a: 1,
		});

		class Config extends def.asClass() {}

		const config = new Config();
		expect(config).toBeInstanceOf(Fiji.Config.t);
		expect(config.$def).toBe(def);
		expectTypeOf(config).toMatchTypeOf<{ a: number }>();
	});
});
