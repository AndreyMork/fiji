[**@ayka/fiji**](../../../README.md) • **Docs**

***

[@ayka/fiji](../../../globals.md) / [Zod](../README.md) / ZodObject

# Class: ZodObject\<T, UnknownKeys, Catchall, Output, Input\>

## Extends

- `ZodType`\<`Output`, [`ZodObjectDef`](../namespaces/z/interfaces/ZodObjectDef.md)\<`T`, `UnknownKeys`, `Catchall`\>, `Input`\>

## Type Parameters

• **T** *extends* [`ZodRawShape`](../namespaces/z/type-aliases/ZodRawShape.md)

• **UnknownKeys** *extends* [`UnknownKeysParam`](../namespaces/z/type-aliases/UnknownKeysParam.md) = [`UnknownKeysParam`](../namespaces/z/type-aliases/UnknownKeysParam.md)

• **Catchall** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

• **Output** = [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<`T`, `Catchall`, `UnknownKeys`\>

• **Input** = [`objectInputType`](../namespaces/z/type-aliases/objectInputType.md)\<`T`, `Catchall`, `UnknownKeys`\>

## Constructors

### new ZodObject()

> **new ZodObject**\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>(`def`): `ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>

#### Parameters

• **def**: [`ZodObjectDef`](../namespaces/z/interfaces/ZodObjectDef.md)\<`T`, `UnknownKeys`, `Catchall`\>

#### Returns

`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>

#### Inherited from

`ZodType`.`constructor`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:76

## Properties

### \_def

> `readonly` **\_def**: [`ZodObjectDef`](../namespaces/z/interfaces/ZodObjectDef.md)\<`T`, `UnknownKeys`, `Catchall`\>

#### Inherited from

`ZodType`.`_def`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:51

***

### \_input

> `readonly` **\_input**: `Input`

#### Inherited from

`ZodType`.`_input`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:50

***

### \_output

> `readonly` **\_output**: `Output`

#### Inherited from

`ZodType`.`_output`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:49

***

### \_type

> `readonly` **\_type**: `Output`

#### Inherited from

`ZodType`.`_type`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:48

***

### ~~augment()~~

> **augment**: \<`Augmentation`\>(`augmentation`) => `ZodObject`\<`extendShape`\<`T`, `Augmentation`\>, `UnknownKeys`, `Catchall`, [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<`extendShape`\<`T`, `Augmentation`\>, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../namespaces/z/type-aliases/objectInputType.md)\<`extendShape`\<`T`, `Augmentation`\>, `Catchall`, `UnknownKeys`\>\>

#### Type Parameters

• **Augmentation** *extends* [`ZodRawShape`](../namespaces/z/type-aliases/ZodRawShape.md)

#### Parameters

• **augmentation**: `Augmentation`

#### Returns

`ZodObject`\<`extendShape`\<`T`, `Augmentation`\>, `UnknownKeys`, `Catchall`, [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<`extendShape`\<`T`, `Augmentation`\>, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../namespaces/z/type-aliases/objectInputType.md)\<`extendShape`\<`T`, `Augmentation`\>, `Catchall`, `UnknownKeys`\>\>

#### Deprecated

Use `.extend` instead

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:554

***

### ~~nonstrict()~~

> **nonstrict**: () => `ZodObject`\<`T`, `"passthrough"`, `Catchall`, [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<`T`, `Catchall`, `"passthrough"`\>, [`objectInputType`](../namespaces/z/type-aliases/objectInputType.md)\<`T`, `Catchall`, `"passthrough"`\>\>

#### Returns

`ZodObject`\<`T`, `"passthrough"`, `Catchall`, [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<`T`, `Catchall`, `"passthrough"`\>, [`objectInputType`](../namespaces/z/type-aliases/objectInputType.md)\<`T`, `Catchall`, `"passthrough"`\>\>

#### Deprecated

In most cases, this is no longer needed - unknown properties are now silently stripped.
If you want to pass through unknown properties, use `.passthrough()` instead.

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:549

***

### spa()

> **spa**: (`data`, `params`?) => `Promise`\<[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`Input`, `Output`\>\>

Alias of safeParseAsync

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`Input`, `Output`\>\>

#### Inherited from

`ZodType`.`spa`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:67

***

### create()

> `static` **create**: \<`T_1`\>(`shape`, `params`?) => `ZodObject`\<`T_1`, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ \[k in string \| number \| symbol\]: addQuestionMarks\<baseObjectOutputType\<T\_1\>, any\>\[k\] \}, \{ \[k\_1 in string \| number \| symbol\]: baseObjectInputType\<T\_1\>\[k\_1\] \}\>

#### Type Parameters

• **T_1** *extends* [`ZodRawShape`](../namespaces/z/type-aliases/ZodRawShape.md)

#### Parameters

• **shape**: `T_1`

• **params?**: [`RawCreateParams`](../namespaces/z/type-aliases/RawCreateParams.md)

#### Returns

`ZodObject`\<`T_1`, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ \[k in string \| number \| symbol\]: addQuestionMarks\<baseObjectOutputType\<T\_1\>, any\>\[k\] \}, \{ \[k\_1 in string \| number \| symbol\]: baseObjectInputType\<T\_1\>\[k\_1\] \}\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:592

***

### lazycreate()

> `static` **lazycreate**: \<`T_1`\>(`shape`, `params`?) => `ZodObject`\<`T_1`, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ \[k in string \| number \| symbol\]: addQuestionMarks\<baseObjectOutputType\<T\_1\>, any\>\[k\] \}, \{ \[k\_1 in string \| number \| symbol\]: baseObjectInputType\<T\_1\>\[k\_1\] \}\>

#### Type Parameters

• **T_1** *extends* [`ZodRawShape`](../namespaces/z/type-aliases/ZodRawShape.md)

#### Parameters

• **shape**

• **params?**: [`RawCreateParams`](../namespaces/z/type-aliases/RawCreateParams.md)

#### Returns

`ZodObject`\<`T_1`, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ \[k in string \| number \| symbol\]: addQuestionMarks\<baseObjectOutputType\<T\_1\>, any\>\[k\] \}, \{ \[k\_1 in string \| number \| symbol\]: baseObjectInputType\<T\_1\>\[k\_1\] \}\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:594

***

### strictCreate()

> `static` **strictCreate**: \<`T_1`\>(`shape`, `params`?) => `ZodObject`\<`T_1`, `"strict"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ \[k in string \| number \| symbol\]: addQuestionMarks\<baseObjectOutputType\<T\_1\>, any\>\[k\] \}, \{ \[k\_1 in string \| number \| symbol\]: baseObjectInputType\<T\_1\>\[k\_1\] \}\>

#### Type Parameters

• **T_1** *extends* [`ZodRawShape`](../namespaces/z/type-aliases/ZodRawShape.md)

#### Parameters

• **shape**: `T_1`

• **params?**: [`RawCreateParams`](../namespaces/z/type-aliases/RawCreateParams.md)

#### Returns

`ZodObject`\<`T_1`, `"strict"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ \[k in string \| number \| symbol\]: addQuestionMarks\<baseObjectOutputType\<T\_1\>, any\>\[k\] \}, \{ \[k\_1 in string \| number \| symbol\]: baseObjectInputType\<T\_1\>\[k\_1\] \}\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:593

## Accessors

### description

> `get` **description**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

`ZodType`.`description`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:52

***

### shape

> `get` **shape**(): `T`

#### Returns

`T`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:541

## Methods

### \_getCached()

> **\_getCached**(): `object`

#### Returns

`object`

##### keys

> **keys**: `string`[]

##### shape

> **shape**: `T`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:536

***

### \_getOrReturnCtx()

> **\_getOrReturnCtx**(`input`, `ctx`?): [`ParseContext`](../namespaces/z/interfaces/ParseContext.md)

#### Parameters

• **input**: [`ParseInput`](../namespaces/z/type-aliases/ParseInput.md)

• **ctx?**: [`ParseContext`](../namespaces/z/interfaces/ParseContext.md)

#### Returns

[`ParseContext`](../namespaces/z/interfaces/ParseContext.md)

#### Inherited from

`ZodType`.`_getOrReturnCtx`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:55

***

### \_getType()

> **\_getType**(`input`): `string`

#### Parameters

• **input**: [`ParseInput`](../namespaces/z/type-aliases/ParseInput.md)

#### Returns

`string`

#### Inherited from

`ZodType`.`_getType`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:54

***

### \_parse()

> **\_parse**(`input`): [`ParseReturnType`](../namespaces/z/type-aliases/ParseReturnType.md)\<`Output`\>

#### Parameters

• **input**: [`ParseInput`](../namespaces/z/type-aliases/ParseInput.md)

#### Returns

[`ParseReturnType`](../namespaces/z/type-aliases/ParseReturnType.md)\<`Output`\>

#### Overrides

`ZodType`.`_parse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:540

***

### \_parseAsync()

> **\_parseAsync**(`input`): [`AsyncParseReturnType`](../namespaces/z/type-aliases/AsyncParseReturnType.md)\<`Output`\>

#### Parameters

• **input**: [`ParseInput`](../namespaces/z/type-aliases/ParseInput.md)

#### Returns

[`AsyncParseReturnType`](../namespaces/z/type-aliases/AsyncParseReturnType.md)\<`Output`\>

#### Inherited from

`ZodType`.`_parseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:61

***

### \_parseSync()

> **\_parseSync**(`input`): [`SyncParseReturnType`](../namespaces/z/type-aliases/SyncParseReturnType.md)\<`Output`\>

#### Parameters

• **input**: [`ParseInput`](../namespaces/z/type-aliases/ParseInput.md)

#### Returns

[`SyncParseReturnType`](../namespaces/z/type-aliases/SyncParseReturnType.md)\<`Output`\>

#### Inherited from

`ZodType`.`_parseSync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:60

***

### \_processInputParams()

> **\_processInputParams**(`input`): `object`

#### Parameters

• **input**: [`ParseInput`](../namespaces/z/type-aliases/ParseInput.md)

#### Returns

`object`

##### ctx

> **ctx**: [`ParseContext`](../namespaces/z/interfaces/ParseContext.md)

##### status

> **status**: `ParseStatus`

#### Inherited from

`ZodType`.`_processInputParams`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:56

***

### \_refinement()

> **\_refinement**(`refinement`): `ZodEffects`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

#### Parameters

• **refinement**

#### Returns

`ZodEffects`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

#### Inherited from

`ZodType`.`_refinement`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:72

***

### and()

> **and**\<`T`\>(`incoming`): `ZodIntersection`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

• **incoming**: `T`

#### Returns

`ZodIntersection`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `T`\>

#### Inherited from

`ZodType`.`and`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:83

***

### array()

> **array**(): `ZodArray`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `"many"`\>

#### Returns

`ZodArray`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `"many"`\>

#### Inherited from

`ZodType`.`array`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:80

***

### brand()

> **brand**\<`B`\>(`brand`?): `ZodBranded`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `B`\>

#### Type Parameters

• **B** *extends* `string` \| `number` \| `symbol`

#### Parameters

• **brand?**: `B`

#### Returns

`ZodBranded`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `B`\>

#### Inherited from

`ZodType`.`brand`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:87

***

### catch()

#### catch(def)

> **catch**(`def`): `ZodCatch`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

##### Parameters

• **def**: `Output`

##### Returns

`ZodCatch`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

##### Inherited from

`ZodType`.`catch`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:88

#### catch(def)

> **catch**(`def`): `ZodCatch`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

##### Parameters

• **def**

##### Returns

`ZodCatch`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

##### Inherited from

`ZodType`.`catch`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:89

***

### catchall()

> **catchall**\<`Index`\>(`index`): `ZodObject`\<`T`, `UnknownKeys`, `Index`, [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<`T`, `Index`, `UnknownKeys`\>, [`objectInputType`](../namespaces/z/type-aliases/objectInputType.md)\<`T`, `Index`, `UnknownKeys`\>\>

#### Type Parameters

• **Index** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

• **index**: `Index`

#### Returns

`ZodObject`\<`T`, `UnknownKeys`, `Index`, [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<`T`, `Index`, `UnknownKeys`\>, [`objectInputType`](../namespaces/z/type-aliases/objectInputType.md)\<`T`, `Index`, `UnknownKeys`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:564

***

### ~~deepPartial()~~

> **deepPartial**(): `DeepPartial`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Returns

`DeepPartial`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Deprecated

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:574

***

### default()

#### default(def)

> **default**(`def`): `ZodDefault`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

##### Parameters

• **def**: `noUndefined`\<`Input`\>

##### Returns

`ZodDefault`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

##### Inherited from

`ZodType`.`default`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:85

#### default(def)

> **default**(`def`): `ZodDefault`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

##### Parameters

• **def**

##### Returns

`ZodDefault`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

##### Inherited from

`ZodType`.`default`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:86

***

### describe()

> **describe**(`description`): `this`

#### Parameters

• **description**: `string`

#### Returns

`this`

#### Inherited from

`ZodType`.`describe`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:93

***

### extend()

> **extend**\<`Augmentation`\>(`augmentation`): `ZodObject`\<`extendShape`\<`T`, `Augmentation`\>, `UnknownKeys`, `Catchall`, [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<`extendShape`\<`T`, `Augmentation`\>, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../namespaces/z/type-aliases/objectInputType.md)\<`extendShape`\<`T`, `Augmentation`\>, `Catchall`, `UnknownKeys`\>\>

#### Type Parameters

• **Augmentation** *extends* [`ZodRawShape`](../namespaces/z/type-aliases/ZodRawShape.md)

#### Parameters

• **augmentation**: `Augmentation`

#### Returns

`ZodObject`\<`extendShape`\<`T`, `Augmentation`\>, `UnknownKeys`, `Catchall`, [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<`extendShape`\<`T`, `Augmentation`\>, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../namespaces/z/type-aliases/objectInputType.md)\<`extendShape`\<`T`, `Augmentation`\>, `Catchall`, `UnknownKeys`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:550

***

### isNullable()

> **isNullable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

`ZodType`.`isNullable`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:97

***

### isOptional()

> **isOptional**(): `boolean`

#### Returns

`boolean`

#### Inherited from

`ZodType`.`isOptional`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:96

***

### keyof()

> **keyof**(): `ZodEnum`\<`CastToStringTuple`\<`UnionToTuple`\<keyof `T`, []\>\>\>

#### Returns

`ZodEnum`\<`CastToStringTuple`\<`UnionToTuple`\<keyof `T`, []\>\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:591

***

### merge()

> **merge**\<`Incoming`, `Augmentation`\>(`merging`): `ZodObject`\<`extendShape`\<`T`, `Augmentation`\>, `Incoming`\[`"_def"`\]\[`"unknownKeys"`\], `Incoming`\[`"_def"`\]\[`"catchall"`\], [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<`extendShape`\<`T`, `Augmentation`\>, `Incoming`\[`"_def"`\]\[`"catchall"`\], `Incoming`\[`"_def"`\]\[`"unknownKeys"`\]\>, [`objectInputType`](../namespaces/z/type-aliases/objectInputType.md)\<`extendShape`\<`T`, `Augmentation`\>, `Incoming`\[`"_def"`\]\[`"catchall"`\], `Incoming`\[`"_def"`\]\[`"unknownKeys"`\]\>\>

Prior to zod@1.0.12 there was a bug in the
inferred type of merged objects. Please
upgrade if you are experiencing issues.

#### Type Parameters

• **Incoming** *extends* [`AnyZodObject`](../namespaces/z/type-aliases/AnyZodObject.md)

• **Augmentation** *extends* `any`

#### Parameters

• **merging**: `Incoming`

#### Returns

`ZodObject`\<`extendShape`\<`T`, `Augmentation`\>, `Incoming`\[`"_def"`\]\[`"unknownKeys"`\], `Incoming`\[`"_def"`\]\[`"catchall"`\], [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<`extendShape`\<`T`, `Augmentation`\>, `Incoming`\[`"_def"`\]\[`"catchall"`\], `Incoming`\[`"_def"`\]\[`"unknownKeys"`\]\>, [`objectInputType`](../namespaces/z/type-aliases/objectInputType.md)\<`extendShape`\<`T`, `Augmentation`\>, `Incoming`\[`"_def"`\]\[`"catchall"`\], `Incoming`\[`"_def"`\]\[`"unknownKeys"`\]\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:560

***

### nullable()

> **nullable**(): `ZodNullable`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Returns

`ZodNullable`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Inherited from

`ZodType`.`nullable`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:78

***

### nullish()

> **nullish**(): `ZodOptional`\<`ZodNullable`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>\>

#### Returns

`ZodOptional`\<`ZodNullable`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>\>

#### Inherited from

`ZodType`.`nullish`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:79

***

### omit()

> **omit**\<`Mask`\>(`mask`): `ZodObject`\<`Omit`\<`T`, keyof `Mask`\>, `UnknownKeys`, `Catchall`, [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<`Omit`\<`T`, keyof `Mask`\>, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../namespaces/z/type-aliases/objectInputType.md)\<`Omit`\<`T`, keyof `Mask`\>, `Catchall`, `UnknownKeys`\>\>

#### Type Parameters

• **Mask** *extends* `Exactly`\<\{ \[k in string \| number \| symbol\]?: true \}, `Mask`\>

#### Parameters

• **mask**: `Mask`

#### Returns

`ZodObject`\<`Omit`\<`T`, keyof `Mask`\>, `UnknownKeys`, `Catchall`, [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<`Omit`\<`T`, keyof `Mask`\>, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../namespaces/z/type-aliases/objectInputType.md)\<`Omit`\<`T`, keyof `Mask`\>, `Catchall`, `UnknownKeys`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:568

***

### optional()

> **optional**(): `ZodOptional`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Returns

`ZodOptional`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Inherited from

`ZodType`.`optional`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:77

***

### or()

> **or**\<`T`\>(`option`): `ZodUnion`\<[`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `T`]\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

• **option**: `T`

#### Returns

`ZodUnion`\<[`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `T`]\>

#### Inherited from

`ZodType`.`or`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:82

***

### parse()

> **parse**(`data`, `params`?): `Output`

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

`Output`

#### Inherited from

`ZodType`.`parse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:62

***

### parseAsync()

> **parseAsync**(`data`, `params`?): `Promise`\<`Output`\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<`Output`\>

#### Inherited from

`ZodType`.`parseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:64

***

### partial()

#### partial()

> **partial**(): `ZodObject`\<\{ \[k in string \| number \| symbol\]: ZodOptional\<T\[k\]\> \}, `UnknownKeys`, `Catchall`, [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<\{ \[k in string \| number \| symbol\]: ZodOptional\<T\[k\]\> \}, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../namespaces/z/type-aliases/objectInputType.md)\<\{ \[k in string \| number \| symbol\]: ZodOptional\<T\[k\]\> \}, `Catchall`, `UnknownKeys`\>\>

##### Returns

`ZodObject`\<\{ \[k in string \| number \| symbol\]: ZodOptional\<T\[k\]\> \}, `UnknownKeys`, `Catchall`, [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<\{ \[k in string \| number \| symbol\]: ZodOptional\<T\[k\]\> \}, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../namespaces/z/type-aliases/objectInputType.md)\<\{ \[k in string \| number \| symbol\]: ZodOptional\<T\[k\]\> \}, `Catchall`, `UnknownKeys`\>\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:575

#### partial(mask)

> **partial**\<`Mask`\>(`mask`): `ZodObject`\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? ZodOptional\<T\[k\<k\>\]\> : T\[k\] \}\[k\<k\>\] : never \}, `UnknownKeys`, `Catchall`, [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? ZodOptional\<T\[k\<k\>\]\> : T\[k\] \}\[k\<k\>\] : never \}, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../namespaces/z/type-aliases/objectInputType.md)\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? ZodOptional\<T\[k\<k\>\]\> : T\[k\] \}\[k\<k\>\] : never \}, `Catchall`, `UnknownKeys`\>\>

##### Type Parameters

• **Mask** *extends* `Exactly`\<\{ \[k in string \| number \| symbol\]?: true \}, `Mask`\>

##### Parameters

• **mask**: `Mask`

##### Returns

`ZodObject`\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? ZodOptional\<T\[k\<k\>\]\> : T\[k\] \}\[k\<k\>\] : never \}, `UnknownKeys`, `Catchall`, [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? ZodOptional\<T\[k\<k\>\]\> : T\[k\] \}\[k\<k\>\] : never \}, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../namespaces/z/type-aliases/objectInputType.md)\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? ZodOptional\<T\[k\<k\>\]\> : T\[k\] \}\[k\<k\>\] : never \}, `Catchall`, `UnknownKeys`\>\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:578

***

### passthrough()

> **passthrough**(): `ZodObject`\<`T`, `"passthrough"`, `Catchall`, [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<`T`, `Catchall`, `"passthrough"`\>, [`objectInputType`](../namespaces/z/type-aliases/objectInputType.md)\<`T`, `Catchall`, `"passthrough"`\>\>

#### Returns

`ZodObject`\<`T`, `"passthrough"`, `Catchall`, [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<`T`, `Catchall`, `"passthrough"`\>, [`objectInputType`](../namespaces/z/type-aliases/objectInputType.md)\<`T`, `Catchall`, `"passthrough"`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:544

***

### pick()

> **pick**\<`Mask`\>(`mask`): `ZodObject`\<`Pick`\<`T`, `Extract`\<keyof `T`, keyof `Mask`\>\>, `UnknownKeys`, `Catchall`, [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<`Pick`\<`T`, `Extract`\<keyof `T`, keyof `Mask`\>\>, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../namespaces/z/type-aliases/objectInputType.md)\<`Pick`\<`T`, `Extract`\<keyof `T`, keyof `Mask`\>\>, `Catchall`, `UnknownKeys`\>\>

#### Type Parameters

• **Mask** *extends* `Exactly`\<\{ \[k in string \| number \| symbol\]?: true \}, `Mask`\>

#### Parameters

• **mask**: `Mask`

#### Returns

`ZodObject`\<`Pick`\<`T`, `Extract`\<keyof `T`, keyof `Mask`\>\>, `UnknownKeys`, `Catchall`, [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<`Pick`\<`T`, `Extract`\<keyof `T`, keyof `Mask`\>\>, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../namespaces/z/type-aliases/objectInputType.md)\<`Pick`\<`T`, `Extract`\<keyof `T`, keyof `Mask`\>\>, `Catchall`, `UnknownKeys`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:565

***

### pipe()

> **pipe**\<`T`\>(`target`): `ZodPipeline`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

• **target**: `T`

#### Returns

`ZodPipeline`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `T`\>

#### Inherited from

`ZodType`.`pipe`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:94

***

### promise()

> **promise**(): `ZodPromise`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Returns

`ZodPromise`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Inherited from

`ZodType`.`promise`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:81

***

### readonly()

> **readonly**(): `ZodReadonly`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Returns

`ZodReadonly`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Inherited from

`ZodType`.`readonly`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:95

***

### refine()

#### refine(check, message)

> **refine**\<`RefinedOutput`\>(`check`, `message`?): `ZodEffects`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `RefinedOutput`, `Input`\>

##### Type Parameters

• **RefinedOutput**

##### Parameters

• **check**

• **message?**: `string` \| `Partial`\<`Omit`\<[`ZodCustomIssue`](../namespaces/z/interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`) => `Partial`\<`Omit`\<[`ZodCustomIssue`](../namespaces/z/interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

`ZodEffects`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `RefinedOutput`, `Input`\>

##### Inherited from

`ZodType`.`refine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:68

#### refine(check, message)

> **refine**(`check`, `message`?): `ZodEffects`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

##### Parameters

• **check**

• **message?**: `string` \| `Partial`\<`Omit`\<[`ZodCustomIssue`](../namespaces/z/interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`) => `Partial`\<`Omit`\<[`ZodCustomIssue`](../namespaces/z/interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

`ZodEffects`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

##### Inherited from

`ZodType`.`refine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:69

***

### refinement()

#### refinement(check, refinementData)

> **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): `ZodEffects`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `RefinedOutput`, `Input`\>

##### Type Parameters

• **RefinedOutput**

##### Parameters

• **check**

• **refinementData**: [`IssueData`](../namespaces/z/type-aliases/IssueData.md) \| (`arg`, `ctx`) => [`IssueData`](../namespaces/z/type-aliases/IssueData.md)

##### Returns

`ZodEffects`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `RefinedOutput`, `Input`\>

##### Inherited from

`ZodType`.`refinement`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:70

#### refinement(check, refinementData)

> **refinement**(`check`, `refinementData`): `ZodEffects`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

##### Parameters

• **check**

• **refinementData**: [`IssueData`](../namespaces/z/type-aliases/IssueData.md) \| (`arg`, `ctx`) => [`IssueData`](../namespaces/z/type-aliases/IssueData.md)

##### Returns

`ZodEffects`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

##### Inherited from

`ZodType`.`refinement`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:71

***

### required()

#### required()

> **required**(): `ZodObject`\<\{ \[k in string \| number \| symbol\]: deoptional\<T\[k\]\> \}, `UnknownKeys`, `Catchall`, [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<\{ \[k in string \| number \| symbol\]: deoptional\<T\[k\]\> \}, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../namespaces/z/type-aliases/objectInputType.md)\<\{ \[k in string \| number \| symbol\]: deoptional\<T\[k\]\> \}, `Catchall`, `UnknownKeys`\>\>

##### Returns

`ZodObject`\<\{ \[k in string \| number \| symbol\]: deoptional\<T\[k\]\> \}, `UnknownKeys`, `Catchall`, [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<\{ \[k in string \| number \| symbol\]: deoptional\<T\[k\]\> \}, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../namespaces/z/type-aliases/objectInputType.md)\<\{ \[k in string \| number \| symbol\]: deoptional\<T\[k\]\> \}, `Catchall`, `UnknownKeys`\>\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:583

#### required(mask)

> **required**\<`Mask`\>(`mask`): `ZodObject`\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? deoptional\<T\[k\<k\>\]\> : T\[k\] \}\[k\<k\>\] : never \}, `UnknownKeys`, `Catchall`, [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? deoptional\<T\[k\<k\>\]\> : T\[k\] \}\[k\<k\>\] : never \}, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../namespaces/z/type-aliases/objectInputType.md)\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? deoptional\<T\[k\<k\>\]\> : T\[k\] \}\[k\<k\>\] : never \}, `Catchall`, `UnknownKeys`\>\>

##### Type Parameters

• **Mask** *extends* `Exactly`\<\{ \[k in string \| number \| symbol\]?: true \}, `Mask`\>

##### Parameters

• **mask**: `Mask`

##### Returns

`ZodObject`\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? deoptional\<T\[k\<k\>\]\> : T\[k\] \}\[k\<k\>\] : never \}, `UnknownKeys`, `Catchall`, [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? deoptional\<T\[k\<k\>\]\> : T\[k\] \}\[k\<k\>\] : never \}, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../namespaces/z/type-aliases/objectInputType.md)\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? deoptional\<T\[k\<k\>\]\> : T\[k\] \}\[k\<k\>\] : never \}, `Catchall`, `UnknownKeys`\>\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:586

***

### safeParse()

> **safeParse**(`data`, `params`?): [`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`Input`, `Output`\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`Input`, `Output`\>

#### Inherited from

`ZodType`.`safeParse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:63

***

### safeParseAsync()

> **safeParseAsync**(`data`, `params`?): `Promise`\<[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`Input`, `Output`\>\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`Input`, `Output`\>\>

#### Inherited from

`ZodType`.`safeParseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:65

***

### setKey()

> **setKey**\<`Key`, `Schema`\>(`key`, `schema`): `ZodObject`\<`T` & `{ [k in string]: Schema }`, `UnknownKeys`, `Catchall`, [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<`T` & `{ [k in string]: Schema }`, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../namespaces/z/type-aliases/objectInputType.md)\<`T` & `{ [k in string]: Schema }`, `Catchall`, `UnknownKeys`\>\>

#### Type Parameters

• **Key** *extends* `string`

• **Schema** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

• **key**: `Key`

• **schema**: `Schema`

#### Returns

`ZodObject`\<`T` & `{ [k in string]: Schema }`, `UnknownKeys`, `Catchall`, [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<`T` & `{ [k in string]: Schema }`, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../namespaces/z/type-aliases/objectInputType.md)\<`T` & `{ [k in string]: Schema }`, `Catchall`, `UnknownKeys`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:561

***

### strict()

> **strict**(`message`?): `ZodObject`\<`T`, `"strict"`, `Catchall`, [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<`T`, `Catchall`, `"strict"`\>, [`objectInputType`](../namespaces/z/type-aliases/objectInputType.md)\<`T`, `Catchall`, `"strict"`\>\>

#### Parameters

• **message?**: `ErrMessage`

#### Returns

`ZodObject`\<`T`, `"strict"`, `Catchall`, [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<`T`, `Catchall`, `"strict"`\>, [`objectInputType`](../namespaces/z/type-aliases/objectInputType.md)\<`T`, `Catchall`, `"strict"`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:542

***

### strip()

> **strip**(): `ZodObject`\<`T`, `"strip"`, `Catchall`, [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<`T`, `Catchall`, `"strip"`\>, [`objectInputType`](../namespaces/z/type-aliases/objectInputType.md)\<`T`, `Catchall`, `"strip"`\>\>

#### Returns

`ZodObject`\<`T`, `"strip"`, `Catchall`, [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<`T`, `Catchall`, `"strip"`\>, [`objectInputType`](../namespaces/z/type-aliases/objectInputType.md)\<`T`, `Catchall`, `"strip"`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:543

***

### superRefine()

#### superRefine(refinement)

> **superRefine**\<`RefinedOutput`\>(`refinement`): `ZodEffects`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `RefinedOutput`, `Input`\>

##### Type Parameters

• **RefinedOutput**

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `RefinedOutput`, `Input`\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:73

#### superRefine(refinement)

> **superRefine**(`refinement`): `ZodEffects`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:74

#### superRefine(refinement)

> **superRefine**(`refinement`): `ZodEffects`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:75

***

### transform()

> **transform**\<`NewOut`\>(`transform`): `ZodEffects`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `NewOut`, `Input`\>

#### Type Parameters

• **NewOut**

#### Parameters

• **transform**

#### Returns

`ZodEffects`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `NewOut`, `Input`\>

#### Inherited from

`ZodType`.`transform`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:84
