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

	test('`patch` should update existing properties in the definition', ({
		expect,
		expectTypeOf,
	}) => {
		const def = Fiji.init({
			a: 1,
			b: 2,
		});

		const patched = def.patch({
			b: 3,
		});

		const config = patched.load();
		const target = {
			a: 1,
			b: 3,
		};

		expect(config.$toJS()).toEqual(target);
		expectTypeOf(def.$$config).toEqualTypeOf(def.$$config);
		expectTypeOf(def.patch).parameter(0).toEqualTypeOf<
			| {
					a?: Fiji.Types.configValue<number>;
					b?: Fiji.Types.configValue<number>;
			  }
			| ((ctx: Fiji.ConfigDefinition.ctx) => {
					a?: Fiji.Types.configValue<number>;
					b?: Fiji.Types.configValue<number>;
			  })
		>();

		expectTypeOf(def.patch).parameter(0).not.toEqualTypeOf<
			| {
					a?: Fiji.Types.configValue<number>;
					b?: Fiji.Types.configValue<number>;
					c?: Fiji.Types.configValue<number>;
			  }
			| ((ctx: Fiji.ConfigDefinition.ctx) => {
					a?: Fiji.Types.configValue<number>;
					b?: Fiji.Types.configValue<number>;
					c?: Fiji.Types.configValue<number>;
			  })
		>();
	});

	test('`patch` should apply function-based updates to the definition', ({
		expect,
	}) => {
		const def = Fiji.init({
			a: 1,
			b: 2,
		});

		const patched = def.patch((ctx) => ({
			b: ctx.val(3),
		}));

		const config = patched.load();
		const target = {
			a: 1,
			b: 3,
		};

		expect(config.$toJS()).toEqual(target);
	});

	test('`patch` should update nested properties in the definition', ({
		expect,
		expectTypeOf,
	}) => {
		const def = Fiji.init({
			value: 1,
			child: {
				value: 2,
				child: {
					value1: 3,
					value2: 4,
				},
			},
		});

		const patched = def.patch({
			child: {
				child: {
					value2: 5,
				},
			},
		});

		const config = patched.load();
		const target = {
			value: 1,
			child: {
				value: 2,
				child: {
					value1: 3,
					value2: 5,
				},
			},
		};

		expect(config.$toJS()).toEqual(target);
		expectTypeOf(def.$$config).toEqualTypeOf<typeof target>();
	});

	test('`patch` does not add new properties', ({ expect }) => {
		const def = Fiji.init({
			a: 1,
			b: 2,
		});

		const patched = def.patch({
			b: 3,
			// @ts-expect-error
			c: 3,
		});

		const config = patched.load();

		expect(config).not.toHaveProperty('c');
	});

	test('`extend` should add new properties to the definition', ({
		expect,
		expectTypeOf,
	}) => {
		const def = Fiji.init({
			a: 1,
			b: 2,
		});

		const extended = def.extend({
			c: 'abc',
		});

		const config = extended.load();
		const target = {
			a: 1,
			b: 2,
			c: 'abc',
		};

		expect(config.$toJS()).toEqual(target);
		expectTypeOf(def.$$config).not.toEqualTypeOf<typeof target>();
		expectTypeOf(extended.$$config).toEqualTypeOf<typeof target>();
	});

	test('`extend` should override existing properties in the definition', ({
		expect,
		expectTypeOf,
	}) => {
		const def = Fiji.init({
			a: 1,
			b: 2,
		});

		const extended = def.extend({
			b: 'a',
		});

		const config = extended.load();
		const target = {
			a: 1,
			b: 'a',
		};

		expect(config.$toJS()).toEqual(target);
		expectTypeOf(config.b).toBeString();
	});

	test('`clone` should create a duplicate of the definition', ({ expect }) => {
		const def = Fiji.init({
			a: 1,
			b: 2,
		});

		const cloned = def.clone();

		expect(cloned).not.toBe(def);
		expect(cloned).toEqual(def);
		expect(cloned.$$config).toEqual(def.$$config);
	});
});
