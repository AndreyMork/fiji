import * as Im from 'immutable';

export type keys = Im.List<string>;
export type index<t> = Im.Map<keys, t>;
export type properties<t> = Im.List<Property<t>>;

export const init = <t>(obj?: Record<string, any>): FlatObject<t> => {
	let index: index<t> = Im.Map();
	let objectKeys = Im.Stack(Object.keys(obj ?? {}).map((key) => keys([key])));

	while (!objectKeys.isEmpty()) {
		const keys = objectKeys.peek()!;
		objectKeys = objectKeys.pop();

		const value = keys.reduce((target: any, key) => target[key], obj);

		if (!isTrueObject(value)) {
			index = index.set(keys, value);
			continue;
		}

		const newKeys = Object.keys(value).map((key) => keys.push(key));

		if (newKeys.length === 0) {
			index = index.set(keys, value as t);
			continue;
		}

		objectKeys = objectKeys.pushAll(newKeys);
	}

	return flatObject(index);
};

export const copy = <t extends Record<string, any>>(obj: t): t =>
	init(obj).toJS<t>();
export const prop = <t>(keys: keys, value: t): Property<t> =>
	new Property(keys, value);
export const flatObject = <t>(index?: index<t>): FlatObject<t> =>
	new FlatObject(index ?? Im.Map());
export const keys = (keys: Iterable<string>): keys =>
	typeof keys === 'string' ? Im.List.of(keys) : Im.List(keys);

export const isTrueObject = (x: unknown): x is object =>
	x != null && (x as any).__proto__ === Object.prototype;

export { FlatObject as t };
export class FlatObject<t> {
	index: index<t>;
	readonly properties: Im.List<Property<t>>;

	constructor(index: index<t>) {
		this.index = index;
		this.properties = this.index
			.entrySeq()
			.map(([keys, value]) => prop(keys, value))
			.toList();
	}

	get<k>(keys: keys): k {
		return this.index.get(keys) as k;
	}

	set(keys: keys, value: t) {
		this.index = this.index.set(keys, value);
		return this;
	}

	has(keys: keys): boolean {
		return this.index.has(keys);
	}

	toJS<t>(): t {
		const result = {};
		this.properties.forEach((property) => {
			let target: any = result;

			property.keys.butLast().forEach((key) => {
				if (!(key in target)) {
					target[key] = {};
				}

				target = target[key];
			});

			const lastKey = property.keys.last();
			if (lastKey != null) {
				target[lastKey] = property.value;
			}
		});

		return result as t;
	}

	transform<r>(fn: (index: index<t>) => index<r>): FlatObject<r> {
		const newIndex = fn(this.index);
		return flatObject(newIndex);
	}

	map<r>(fn: (value: t, keys: keys) => r): FlatObject<r> {
		return this.transform((index) => index.map(fn));
	}

	filter(fn: (value: t, keys: keys) => boolean): FlatObject<t> {
		return this.transform((index) => index.filter(fn));
	}

	merge<r>(other: FlatObject<r>): FlatObject<t | r> {
		return this.transform((index) => index.merge(other.index));
	}
}

export class Property<t> {
	constructor(
		readonly keys: keys,
		readonly value: t,
	) {}

	setValue<k>(value: k): Property<k> {
		return new Property(this.keys, value);
	}
}
