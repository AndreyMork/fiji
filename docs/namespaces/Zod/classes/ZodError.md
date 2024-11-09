[**@ayka/fiji**](../../../README.md) • **Docs**

***

[@ayka/fiji](../../../globals.md) / [Zod](../README.md) / ZodError

# Class: ZodError\<T\>

## Extends

- `Error`

## Type Parameters

• **T** = `any`

## Constructors

### new ZodError()

> **new ZodError**\<`T`\>(`issues`): `ZodError`\<`T`\>

#### Parameters

• **issues**: [`ZodIssue`](../namespaces/z/type-aliases/ZodIssue.md)[]

#### Returns

`ZodError`\<`T`\>

#### Overrides

`Error.constructor`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:138

## Properties

### addIssue()

> **addIssue**: (`sub`) => `void`

#### Parameters

• **sub**: [`ZodIssue`](../namespaces/z/type-aliases/ZodIssue.md)

#### Returns

`void`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:146

***

### addIssues()

> **addIssues**: (`subs`?) => `void`

#### Parameters

• **subs?**: [`ZodIssue`](../namespaces/z/type-aliases/ZodIssue.md)[]

#### Returns

`void`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:147

***

### cause?

> `optional` **cause**: `unknown`

#### Inherited from

`Error.cause`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:24

***

### issues

> **issues**: [`ZodIssue`](../namespaces/z/type-aliases/ZodIssue.md)[]

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:136

***

### name

> **name**: `string`

#### Inherited from

`Error.name`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

`Error.stack`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### create()

> `static` **create**: (`issues`) => `ZodError`\<`any`\>

#### Parameters

• **issues**: [`ZodIssue`](../namespaces/z/type-aliases/ZodIssue.md)[]

#### Returns

`ZodError`\<`any`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:141

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### Parameters

• **err**: `Error`

• **stackTraces**: `CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

`Error.prepareStackTrace`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/globals.d.ts:143

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

`Error.stackTraceLimit`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/globals.d.ts:145

## Accessors

### errors

#### Get Signature

> **get** **errors**(): [`ZodIssue`](../namespaces/z/type-aliases/ZodIssue.md)[]

##### Returns

[`ZodIssue`](../namespaces/z/type-aliases/ZodIssue.md)[]

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:137

***

### formErrors

#### Get Signature

> **get** **formErrors**(): [`typeToFlattenedError`](../namespaces/z/type-aliases/typeToFlattenedError.md)\<`T`, `string`\>

##### Returns

[`typeToFlattenedError`](../namespaces/z/type-aliases/typeToFlattenedError.md)\<`T`, `string`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:150

***

### isEmpty

#### Get Signature

> **get** **isEmpty**(): `boolean`

##### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:145

***

### message

#### Get Signature

> **get** **message**(): `string`

##### Returns

`string`

#### Overrides

`Error.message`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:144

## Methods

### flatten()

#### flatten()

> **flatten**(): [`typeToFlattenedError`](../namespaces/z/type-aliases/typeToFlattenedError.md)\<`T`, `string`\>

##### Returns

[`typeToFlattenedError`](../namespaces/z/type-aliases/typeToFlattenedError.md)\<`T`, `string`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:148

#### flatten(mapper)

> **flatten**\<`U`\>(`mapper`?): [`typeToFlattenedError`](../namespaces/z/type-aliases/typeToFlattenedError.md)\<`T`, `U`\>

##### Type Parameters

• **U**

##### Parameters

• **mapper?**

##### Returns

[`typeToFlattenedError`](../namespaces/z/type-aliases/typeToFlattenedError.md)\<`T`, `U`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:149

***

### format()

#### format()

> **format**(): [`ZodFormattedError`](../namespaces/z/type-aliases/ZodFormattedError.md)\<`T`, `string`\>

##### Returns

[`ZodFormattedError`](../namespaces/z/type-aliases/ZodFormattedError.md)\<`T`, `string`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:139

#### format(mapper)

> **format**\<`U`\>(`mapper`): [`ZodFormattedError`](../namespaces/z/type-aliases/ZodFormattedError.md)\<`T`, `U`\>

##### Type Parameters

• **U**

##### Parameters

• **mapper**

##### Returns

[`ZodFormattedError`](../namespaces/z/type-aliases/ZodFormattedError.md)\<`T`, `U`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:140

***

### toString()

> **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:143

***

### assert()

> `static` **assert**(`value`): `asserts value is ZodError<any>`

#### Parameters

• **value**: `unknown`

#### Returns

`asserts value is ZodError<any>`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:142

***

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/globals.d.ts:136
