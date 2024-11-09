[**@ayka/fiji**](../../../README.md) • **Docs**

***

[@ayka/fiji](../../../globals.md) / [Errors](../README.md) / EnvNotLoadedError

# Class: EnvNotLoadedError

## Extends

- `ErrorStruktBase`\<`this`\> & `object`

## Constructors

### new EnvNotLoadedError()

> **new EnvNotLoadedError**(`args`, `meta`?): [`EnvNotLoadedError`](EnvNotLoadedError.md)

#### Parameters

• **args**: `string`

• **meta?**: `errorMeta`

#### Returns

[`EnvNotLoadedError`](EnvNotLoadedError.md)

#### Inherited from

Strukt.error(\{
	constructor(name: string) \{
		const data = \{ name \};
		const message = \`ENV \[$\{name\}\] is not loaded\`;
		return \{ data, message \};
	\},
\}).constructor

#### Defined in

node\_modules/.pnpm/@ayka+domistrukt@2.0.0-rc.24/node\_modules/@ayka/domistrukt/dist/Main.d.ts:379

## Properties

### cause?

> `optional` **cause**: `unknown`

#### Inherited from

Strukt.error(\{
	constructor(name: string) \{
		const data = \{ name \};
		const message = \`ENV \[$\{name\}\] is not loaded\`;
		return \{ data, message \};
	\},
\}).cause

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:24

***

### data

> **data**: `object`

#### name

> **name**: `string`

#### Inherited from

Strukt.error(\{
	constructor(name: string) \{
		const data = \{ name \};
		const message = \`ENV \[$\{name\}\] is not loaded\`;
		return \{ data, message \};
	\},
\}).data

#### Defined in

node\_modules/.pnpm/@ayka+domistrukt@2.0.0-rc.24/node\_modules/@ayka/domistrukt/dist/Main.d.ts:376

***

### message

> **message**: `string`

#### Inherited from

Strukt.error(\{
	constructor(name: string) \{
		const data = \{ name \};
		const message = \`ENV \[$\{name\}\] is not loaded\`;
		return \{ data, message \};
	\},
\}).message

#### Defined in

node\_modules/.pnpm/@ayka+domistrukt@2.0.0-rc.24/node\_modules/@ayka/domistrukt/dist/Main.d.ts:339

***

### meta

> `readonly` **meta**: `errorMeta`

#### Inherited from

Strukt.error(\{
	constructor(name: string) \{
		const data = \{ name \};
		const message = \`ENV \[$\{name\}\] is not loaded\`;
		return \{ data, message \};
	\},
\}).meta

#### Defined in

node\_modules/.pnpm/@ayka+domistrukt@2.0.0-rc.24/node\_modules/@ayka/domistrukt/dist/Main.d.ts:340

***

### name

> **name**: `string`

#### Inherited from

Strukt.error(\{
	constructor(name: string) \{
		const data = \{ name \};
		const message = \`ENV \[$\{name\}\] is not loaded\`;
		return \{ data, message \};
	\},
\}).name

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

Strukt.error(\{
	constructor(name: string) \{
		const data = \{ name \};
		const message = \`ENV \[$\{name\}\] is not loaded\`;
		return \{ data, message \};
	\},
\}).stack

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:1078
