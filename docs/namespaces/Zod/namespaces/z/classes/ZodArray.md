[**@ayka/fiji**](../../../../../README.md) • **Docs**

***

[@ayka/fiji](../../../../../globals.md) / [Zod](../../../README.md) / [z](../README.md) / ZodArray

# Class: ZodArray\<T, Cardinality\>

## Extends

- `ZodType`\<[`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, [`ZodArrayDef`](../interfaces/ZodArrayDef.md)\<`T`\>, `Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]\>

## Type Parameters

• **T** *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

• **Cardinality** *extends* [`ArrayCardinality`](../type-aliases/ArrayCardinality.md) = `"many"`

## Constructors

### new ZodArray()

> **new ZodArray**\<`T`, `Cardinality`\>(`def`): `ZodArray`\<`T`, `Cardinality`\>

#### Parameters

• **def**: [`ZodArrayDef`](../interfaces/ZodArrayDef.md)\<`T`\>

#### Returns

`ZodArray`\<`T`, `Cardinality`\>

#### Inherited from

`ZodType`.`constructor`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:76

## Properties

### \_def

> `readonly` **\_def**: [`ZodArrayDef`](../interfaces/ZodArrayDef.md)\<`T`\>

#### Inherited from

`ZodType`.`_def`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:51

***

### \_input

> `readonly` **\_input**: `Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]

#### Inherited from

`ZodType`.`_input`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:50

***

### \_output

> `readonly` **\_output**: [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>

#### Inherited from

`ZodType`.`_output`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:49

***

### \_type

> `readonly` **\_type**: [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>

#### Inherited from

`ZodType`.`_type`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:48

***

### spa()

> **spa**: (`data`, `params`?) => `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][], [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>\>

Alias of safeParseAsync

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][], [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>\>

#### Inherited from

`ZodType`.`spa`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:67

***

### create()

> `static` **create**: \<`T_1`\>(`schema`, `params`?) => `ZodArray`\<`T_1`, `"many"`\>

#### Type Parameters

• **T_1** *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

• **schema**: `T_1`

• **params?**: [`RawCreateParams`](../type-aliases/RawCreateParams.md)

#### Returns

`ZodArray`\<`T_1`, `"many"`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:499

## Accessors

### description

#### Get Signature

> **get** **description**(): `undefined` \| `string`

##### Returns

`undefined` \| `string`

#### Inherited from

`ZodType`.`description`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:52

***

### element

#### Get Signature

> **get** **element**(): `T`

##### Returns

`T`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:494

## Methods

### \_getOrReturnCtx()

> **\_getOrReturnCtx**(`input`, `ctx`?): [`ParseContext`](../interfaces/ParseContext.md)

#### Parameters

• **input**: [`ParseInput`](../type-aliases/ParseInput.md)

• **ctx?**: [`ParseContext`](../interfaces/ParseContext.md)

#### Returns

[`ParseContext`](../interfaces/ParseContext.md)

#### Inherited from

`ZodType`.`_getOrReturnCtx`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:55

***

### \_getType()

> **\_getType**(`input`): `string`

#### Parameters

• **input**: [`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

`string`

#### Inherited from

`ZodType`.`_getType`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:54

***

### \_parse()

> **\_parse**(`input`): [`ParseReturnType`](../type-aliases/ParseReturnType.md)\<[`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>

#### Parameters

• **input**: [`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`ParseReturnType`](../type-aliases/ParseReturnType.md)\<[`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>

#### Overrides

`ZodType`.`_parse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:493

***

### \_parseAsync()

> **\_parseAsync**(`input`): [`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<[`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>

#### Parameters

• **input**: [`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<[`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>

#### Inherited from

`ZodType`.`_parseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:61

***

### \_parseSync()

> **\_parseSync**(`input`): [`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<[`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>

#### Parameters

• **input**: [`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<[`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>

#### Inherited from

`ZodType`.`_parseSync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:60

***

### \_processInputParams()

> **\_processInputParams**(`input`): `object`

#### Parameters

• **input**: [`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

`object`

##### ctx

> **ctx**: [`ParseContext`](../interfaces/ParseContext.md)

##### status

> **status**: `ParseStatus`

#### Inherited from

`ZodType`.`_processInputParams`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:56

***

### \_refinement()

> **\_refinement**(`refinement`): `ZodEffects`\<`ZodArray`\<`T`, `Cardinality`\>, [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, `Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]\>

#### Parameters

• **refinement**

#### Returns

`ZodEffects`\<`ZodArray`\<`T`, `Cardinality`\>, [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, `Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]\>

#### Inherited from

`ZodType`.`_refinement`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:72

***

### and()

> **and**\<`T`\>(`incoming`): `ZodIntersection`\<`ZodArray`\<`T`, `Cardinality`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

• **incoming**: `T`

#### Returns

`ZodIntersection`\<`ZodArray`\<`T`, `Cardinality`\>, `T`\>

#### Inherited from

`ZodType`.`and`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:83

***

### array()

> **array**(): `ZodArray`\<`ZodArray`\<`T`, `Cardinality`\>, `"many"`\>

#### Returns

`ZodArray`\<`ZodArray`\<`T`, `Cardinality`\>, `"many"`\>

#### Inherited from

`ZodType`.`array`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:80

***

### brand()

> **brand**\<`B`\>(`brand`?): `ZodBranded`\<`ZodArray`\<`T`, `Cardinality`\>, `B`\>

#### Type Parameters

• **B** *extends* `string` \| `number` \| `symbol`

#### Parameters

• **brand?**: `B`

#### Returns

`ZodBranded`\<`ZodArray`\<`T`, `Cardinality`\>, `B`\>

#### Inherited from

`ZodType`.`brand`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:87

***

### catch()

#### catch(def)

> **catch**(`def`): `ZodCatch`\<`ZodArray`\<`T`, `Cardinality`\>\>

##### Parameters

• **def**: [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>

##### Returns

`ZodCatch`\<`ZodArray`\<`T`, `Cardinality`\>\>

##### Inherited from

`ZodType`.`catch`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:88

#### catch(def)

> **catch**(`def`): `ZodCatch`\<`ZodArray`\<`T`, `Cardinality`\>\>

##### Parameters

• **def**

##### Returns

`ZodCatch`\<`ZodArray`\<`T`, `Cardinality`\>\>

##### Inherited from

`ZodType`.`catch`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:89

***

### default()

#### default(def)

> **default**(`def`): `ZodDefault`\<`ZodArray`\<`T`, `Cardinality`\>\>

##### Parameters

• **def**: `noUndefined`\<`Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]\>

##### Returns

`ZodDefault`\<`ZodArray`\<`T`, `Cardinality`\>\>

##### Inherited from

`ZodType`.`default`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:85

#### default(def)

> **default**(`def`): `ZodDefault`\<`ZodArray`\<`T`, `Cardinality`\>\>

##### Parameters

• **def**

##### Returns

`ZodDefault`\<`ZodArray`\<`T`, `Cardinality`\>\>

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

### length()

> **length**(`len`, `message`?): `this`

#### Parameters

• **len**: `number`

• **message?**: `ErrMessage`

#### Returns

`this`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:497

***

### max()

> **max**(`maxLength`, `message`?): `this`

#### Parameters

• **maxLength**: `number`

• **message?**: `ErrMessage`

#### Returns

`this`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:496

***

### min()

> **min**(`minLength`, `message`?): `this`

#### Parameters

• **minLength**: `number`

• **message?**: `ErrMessage`

#### Returns

`this`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:495

***

### nonempty()

> **nonempty**(`message`?): `ZodArray`\<`T`, `"atleastone"`\>

#### Parameters

• **message?**: `ErrMessage`

#### Returns

`ZodArray`\<`T`, `"atleastone"`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:498

***

### nullable()

> **nullable**(): `ZodNullable`\<`ZodArray`\<`T`, `Cardinality`\>\>

#### Returns

`ZodNullable`\<`ZodArray`\<`T`, `Cardinality`\>\>

#### Inherited from

`ZodType`.`nullable`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:78

***

### nullish()

> **nullish**(): `ZodOptional`\<`ZodNullable`\<`ZodArray`\<`T`, `Cardinality`\>\>\>

#### Returns

`ZodOptional`\<`ZodNullable`\<`ZodArray`\<`T`, `Cardinality`\>\>\>

#### Inherited from

`ZodType`.`nullish`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:79

***

### optional()

> **optional**(): `ZodOptional`\<`ZodArray`\<`T`, `Cardinality`\>\>

#### Returns

`ZodOptional`\<`ZodArray`\<`T`, `Cardinality`\>\>

#### Inherited from

`ZodType`.`optional`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:77

***

### or()

> **or**\<`T`\>(`option`): `ZodUnion`\<[`ZodArray`\<`T`, `Cardinality`\>, `T`]\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

• **option**: `T`

#### Returns

`ZodUnion`\<[`ZodArray`\<`T`, `Cardinality`\>, `T`]\>

#### Inherited from

`ZodType`.`or`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:82

***

### parse()

> **parse**(`data`, `params`?): [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

[`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>

#### Inherited from

`ZodType`.`parse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:62

***

### parseAsync()

> **parseAsync**(`data`, `params`?): `Promise`\<[`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>

#### Inherited from

`ZodType`.`parseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:64

***

### pipe()

> **pipe**\<`T`\>(`target`): `ZodPipeline`\<`ZodArray`\<`T`, `Cardinality`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

• **target**: `T`

#### Returns

`ZodPipeline`\<`ZodArray`\<`T`, `Cardinality`\>, `T`\>

#### Inherited from

`ZodType`.`pipe`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:94

***

### promise()

> **promise**(): `ZodPromise`\<`ZodArray`\<`T`, `Cardinality`\>\>

#### Returns

`ZodPromise`\<`ZodArray`\<`T`, `Cardinality`\>\>

#### Inherited from

`ZodType`.`promise`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:81

***

### readonly()

> **readonly**(): `ZodReadonly`\<`ZodArray`\<`T`, `Cardinality`\>\>

#### Returns

`ZodReadonly`\<`ZodArray`\<`T`, `Cardinality`\>\>

#### Inherited from

`ZodType`.`readonly`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:95

***

### refine()

#### refine(check, message)

> **refine**\<`RefinedOutput`\>(`check`, `message`?): `ZodEffects`\<`ZodArray`\<`T`, `Cardinality`\>, `RefinedOutput`, `Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]\>

##### Type Parameters

• **RefinedOutput** *extends* [`T`\[`"_output"`\], `...T["_output"][]`] \| `T`\[`"_output"`\][]

##### Parameters

• **check**

• **message?**: `string` \| `Partial`\<`Omit`\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`) => `Partial`\<`Omit`\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

`ZodEffects`\<`ZodArray`\<`T`, `Cardinality`\>, `RefinedOutput`, `Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]\>

##### Inherited from

`ZodType`.`refine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:68

#### refine(check, message)

> **refine**(`check`, `message`?): `ZodEffects`\<`ZodArray`\<`T`, `Cardinality`\>, [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, `Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]\>

##### Parameters

• **check**

• **message?**: `string` \| `Partial`\<`Omit`\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`) => `Partial`\<`Omit`\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

`ZodEffects`\<`ZodArray`\<`T`, `Cardinality`\>, [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, `Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]\>

##### Inherited from

`ZodType`.`refine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:69

***

### refinement()

#### refinement(check, refinementData)

> **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): `ZodEffects`\<`ZodArray`\<`T`, `Cardinality`\>, `RefinedOutput`, `Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]\>

##### Type Parameters

• **RefinedOutput** *extends* [`T`\[`"_output"`\], `...T["_output"][]`] \| `T`\[`"_output"`\][]

##### Parameters

• **check**

• **refinementData**: [`IssueData`](../type-aliases/IssueData.md) \| (`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md)

##### Returns

`ZodEffects`\<`ZodArray`\<`T`, `Cardinality`\>, `RefinedOutput`, `Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]\>

##### Inherited from

`ZodType`.`refinement`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:70

#### refinement(check, refinementData)

> **refinement**(`check`, `refinementData`): `ZodEffects`\<`ZodArray`\<`T`, `Cardinality`\>, [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, `Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]\>

##### Parameters

• **check**

• **refinementData**: [`IssueData`](../type-aliases/IssueData.md) \| (`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md)

##### Returns

`ZodEffects`\<`ZodArray`\<`T`, `Cardinality`\>, [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, `Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]\>

##### Inherited from

`ZodType`.`refinement`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:71

***

### safeParse()

> **safeParse**(`data`, `params`?): [`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][], [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][], [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>

#### Inherited from

`ZodType`.`safeParse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:63

***

### safeParseAsync()

> **safeParseAsync**(`data`, `params`?): `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][], [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][], [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>\>

#### Inherited from

`ZodType`.`safeParseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:65

***

### superRefine()

#### superRefine(refinement)

> **superRefine**\<`RefinedOutput`\>(`refinement`): `ZodEffects`\<`ZodArray`\<`T`, `Cardinality`\>, `RefinedOutput`, `Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]\>

##### Type Parameters

• **RefinedOutput** *extends* [`T`\[`"_output"`\], `...T["_output"][]`] \| `T`\[`"_output"`\][]

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodArray`\<`T`, `Cardinality`\>, `RefinedOutput`, `Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:73

#### superRefine(refinement)

> **superRefine**(`refinement`): `ZodEffects`\<`ZodArray`\<`T`, `Cardinality`\>, [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, `Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]\>

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodArray`\<`T`, `Cardinality`\>, [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, `Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:74

#### superRefine(refinement)

> **superRefine**(`refinement`): `ZodEffects`\<`ZodArray`\<`T`, `Cardinality`\>, [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, `Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]\>

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodArray`\<`T`, `Cardinality`\>, [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, `Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:75

***

### transform()

> **transform**\<`NewOut`\>(`transform`): `ZodEffects`\<`ZodArray`\<`T`, `Cardinality`\>, `NewOut`, `Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]\>

#### Type Parameters

• **NewOut**

#### Parameters

• **transform**

#### Returns

`ZodEffects`\<`ZodArray`\<`T`, `Cardinality`\>, `NewOut`, `Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]\>

#### Inherited from

`ZodType`.`transform`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:84
