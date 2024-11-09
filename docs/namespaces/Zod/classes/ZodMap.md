[**@ayka/fiji**](../../../README.md) • **Docs**

***

[@ayka/fiji](../../../globals.md) / [Zod](../README.md) / ZodMap

# Class: ZodMap\<Key, Value\>

## Extends

- `ZodType`\<`Map`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, [`ZodMapDef`](../namespaces/z/interfaces/ZodMapDef.md)\<`Key`, `Value`\>, `Map`\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

## Type Parameters

• **Key** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

• **Value** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

## Constructors

### new ZodMap()

> **new ZodMap**\<`Key`, `Value`\>(`def`): `ZodMap`\<`Key`, `Value`\>

#### Parameters

• **def**: [`ZodMapDef`](../namespaces/z/interfaces/ZodMapDef.md)\<`Key`, `Value`\>

#### Returns

`ZodMap`\<`Key`, `Value`\>

#### Inherited from

`ZodType`.`constructor`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:76

## Properties

### \_def

> `readonly` **\_def**: [`ZodMapDef`](../namespaces/z/interfaces/ZodMapDef.md)\<`Key`, `Value`\>

#### Inherited from

`ZodType`.`_def`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:51

***

### \_input

> `readonly` **\_input**: `Map`\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>

#### Inherited from

`ZodType`.`_input`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:50

***

### \_output

> `readonly` **\_output**: `Map`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>

#### Inherited from

`ZodType`.`_output`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:49

***

### \_type

> `readonly` **\_type**: `Map`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>

#### Inherited from

`ZodType`.`_type`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:48

***

### spa()

> **spa**: (`data`, `params`?) => `Promise`\<[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`Map`\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>, `Map`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>\>

Alias of safeParseAsync

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`Map`\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>, `Map`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>\>

#### Inherited from

`ZodType`.`spa`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:67

***

### create()

> `static` **create**: \<`Key_1`, `Value_1`\>(`keyType`, `valueType`, `params`?) => `ZodMap`\<`Key_1`, `Value_1`\>

#### Type Parameters

• **Key_1** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

• **Value_1** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

• **keyType**: `Key_1`

• **valueType**: `Value_1`

• **params?**: [`RawCreateParams`](../namespaces/z/type-aliases/RawCreateParams.md)

#### Returns

`ZodMap`\<`Key_1`, `Value_1`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:698

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

### keySchema

#### Get Signature

> **get** **keySchema**(): `Key`

##### Returns

`Key`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:695

***

### valueSchema

#### Get Signature

> **get** **valueSchema**(): `Value`

##### Returns

`Value`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:696

## Methods

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

> **\_parse**(`input`): [`ParseReturnType`](../namespaces/z/type-aliases/ParseReturnType.md)\<`Map`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>

#### Parameters

• **input**: [`ParseInput`](../namespaces/z/type-aliases/ParseInput.md)

#### Returns

[`ParseReturnType`](../namespaces/z/type-aliases/ParseReturnType.md)\<`Map`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>

#### Overrides

`ZodType`.`_parse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:697

***

### \_parseAsync()

> **\_parseAsync**(`input`): [`AsyncParseReturnType`](../namespaces/z/type-aliases/AsyncParseReturnType.md)\<`Map`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>

#### Parameters

• **input**: [`ParseInput`](../namespaces/z/type-aliases/ParseInput.md)

#### Returns

[`AsyncParseReturnType`](../namespaces/z/type-aliases/AsyncParseReturnType.md)\<`Map`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>

#### Inherited from

`ZodType`.`_parseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:61

***

### \_parseSync()

> **\_parseSync**(`input`): [`SyncParseReturnType`](../namespaces/z/type-aliases/SyncParseReturnType.md)\<`Map`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>

#### Parameters

• **input**: [`ParseInput`](../namespaces/z/type-aliases/ParseInput.md)

#### Returns

[`SyncParseReturnType`](../namespaces/z/type-aliases/SyncParseReturnType.md)\<`Map`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>

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

> **\_refinement**(`refinement`): `ZodEffects`\<`ZodMap`\<`Key`, `Value`\>, `Map`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, `Map`\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

#### Parameters

• **refinement**

#### Returns

`ZodEffects`\<`ZodMap`\<`Key`, `Value`\>, `Map`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, `Map`\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

#### Inherited from

`ZodType`.`_refinement`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:72

***

### and()

> **and**\<`T`\>(`incoming`): `ZodIntersection`\<`ZodMap`\<`Key`, `Value`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

• **incoming**: `T`

#### Returns

`ZodIntersection`\<`ZodMap`\<`Key`, `Value`\>, `T`\>

#### Inherited from

`ZodType`.`and`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:83

***

### array()

> **array**(): `ZodArray`\<`ZodMap`\<`Key`, `Value`\>, `"many"`\>

#### Returns

`ZodArray`\<`ZodMap`\<`Key`, `Value`\>, `"many"`\>

#### Inherited from

`ZodType`.`array`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:80

***

### brand()

> **brand**\<`B`\>(`brand`?): `ZodBranded`\<`ZodMap`\<`Key`, `Value`\>, `B`\>

#### Type Parameters

• **B** *extends* `string` \| `number` \| `symbol`

#### Parameters

• **brand?**: `B`

#### Returns

`ZodBranded`\<`ZodMap`\<`Key`, `Value`\>, `B`\>

#### Inherited from

`ZodType`.`brand`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:87

***

### catch()

#### catch(def)

> **catch**(`def`): `ZodCatch`\<`ZodMap`\<`Key`, `Value`\>\>

##### Parameters

• **def**: `Map`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>

##### Returns

`ZodCatch`\<`ZodMap`\<`Key`, `Value`\>\>

##### Inherited from

`ZodType`.`catch`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:88

#### catch(def)

> **catch**(`def`): `ZodCatch`\<`ZodMap`\<`Key`, `Value`\>\>

##### Parameters

• **def**

##### Returns

`ZodCatch`\<`ZodMap`\<`Key`, `Value`\>\>

##### Inherited from

`ZodType`.`catch`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:89

***

### default()

#### default(def)

> **default**(`def`): `ZodDefault`\<`ZodMap`\<`Key`, `Value`\>\>

##### Parameters

• **def**: `Map`\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>

##### Returns

`ZodDefault`\<`ZodMap`\<`Key`, `Value`\>\>

##### Inherited from

`ZodType`.`default`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:85

#### default(def)

> **default**(`def`): `ZodDefault`\<`ZodMap`\<`Key`, `Value`\>\>

##### Parameters

• **def**

##### Returns

`ZodDefault`\<`ZodMap`\<`Key`, `Value`\>\>

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

### nullable()

> **nullable**(): `ZodNullable`\<`ZodMap`\<`Key`, `Value`\>\>

#### Returns

`ZodNullable`\<`ZodMap`\<`Key`, `Value`\>\>

#### Inherited from

`ZodType`.`nullable`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:78

***

### nullish()

> **nullish**(): `ZodOptional`\<`ZodNullable`\<`ZodMap`\<`Key`, `Value`\>\>\>

#### Returns

`ZodOptional`\<`ZodNullable`\<`ZodMap`\<`Key`, `Value`\>\>\>

#### Inherited from

`ZodType`.`nullish`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:79

***

### optional()

> **optional**(): `ZodOptional`\<`ZodMap`\<`Key`, `Value`\>\>

#### Returns

`ZodOptional`\<`ZodMap`\<`Key`, `Value`\>\>

#### Inherited from

`ZodType`.`optional`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:77

***

### or()

> **or**\<`T`\>(`option`): `ZodUnion`\<[`ZodMap`\<`Key`, `Value`\>, `T`]\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

• **option**: `T`

#### Returns

`ZodUnion`\<[`ZodMap`\<`Key`, `Value`\>, `T`]\>

#### Inherited from

`ZodType`.`or`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:82

***

### parse()

> **parse**(`data`, `params`?): `Map`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

`Map`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>

#### Inherited from

`ZodType`.`parse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:62

***

### parseAsync()

> **parseAsync**(`data`, `params`?): `Promise`\<`Map`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<`Map`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>

#### Inherited from

`ZodType`.`parseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:64

***

### pipe()

> **pipe**\<`T`\>(`target`): `ZodPipeline`\<`ZodMap`\<`Key`, `Value`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

• **target**: `T`

#### Returns

`ZodPipeline`\<`ZodMap`\<`Key`, `Value`\>, `T`\>

#### Inherited from

`ZodType`.`pipe`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:94

***

### promise()

> **promise**(): `ZodPromise`\<`ZodMap`\<`Key`, `Value`\>\>

#### Returns

`ZodPromise`\<`ZodMap`\<`Key`, `Value`\>\>

#### Inherited from

`ZodType`.`promise`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:81

***

### readonly()

> **readonly**(): `ZodReadonly`\<`ZodMap`\<`Key`, `Value`\>\>

#### Returns

`ZodReadonly`\<`ZodMap`\<`Key`, `Value`\>\>

#### Inherited from

`ZodType`.`readonly`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:95

***

### refine()

#### refine(check, message)

> **refine**\<`RefinedOutput`\>(`check`, `message`?): `ZodEffects`\<`ZodMap`\<`Key`, `Value`\>, `RefinedOutput`, `Map`\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Type Parameters

• **RefinedOutput** *extends* `Map`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>

##### Parameters

• **check**

• **message?**: `string` \| `Partial`\<`Omit`\<[`ZodCustomIssue`](../namespaces/z/interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`) => `Partial`\<`Omit`\<[`ZodCustomIssue`](../namespaces/z/interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

`ZodEffects`\<`ZodMap`\<`Key`, `Value`\>, `RefinedOutput`, `Map`\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Inherited from

`ZodType`.`refine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:68

#### refine(check, message)

> **refine**(`check`, `message`?): `ZodEffects`\<`ZodMap`\<`Key`, `Value`\>, `Map`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, `Map`\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Parameters

• **check**

• **message?**: `string` \| `Partial`\<`Omit`\<[`ZodCustomIssue`](../namespaces/z/interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`) => `Partial`\<`Omit`\<[`ZodCustomIssue`](../namespaces/z/interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

`ZodEffects`\<`ZodMap`\<`Key`, `Value`\>, `Map`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, `Map`\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Inherited from

`ZodType`.`refine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:69

***

### refinement()

#### refinement(check, refinementData)

> **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): `ZodEffects`\<`ZodMap`\<`Key`, `Value`\>, `RefinedOutput`, `Map`\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Type Parameters

• **RefinedOutput** *extends* `Map`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>

##### Parameters

• **check**

• **refinementData**: [`IssueData`](../namespaces/z/type-aliases/IssueData.md) \| (`arg`, `ctx`) => [`IssueData`](../namespaces/z/type-aliases/IssueData.md)

##### Returns

`ZodEffects`\<`ZodMap`\<`Key`, `Value`\>, `RefinedOutput`, `Map`\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Inherited from

`ZodType`.`refinement`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:70

#### refinement(check, refinementData)

> **refinement**(`check`, `refinementData`): `ZodEffects`\<`ZodMap`\<`Key`, `Value`\>, `Map`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, `Map`\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Parameters

• **check**

• **refinementData**: [`IssueData`](../namespaces/z/type-aliases/IssueData.md) \| (`arg`, `ctx`) => [`IssueData`](../namespaces/z/type-aliases/IssueData.md)

##### Returns

`ZodEffects`\<`ZodMap`\<`Key`, `Value`\>, `Map`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, `Map`\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Inherited from

`ZodType`.`refinement`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:71

***

### safeParse()

> **safeParse**(`data`, `params`?): [`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`Map`\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>, `Map`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`Map`\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>, `Map`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>

#### Inherited from

`ZodType`.`safeParse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:63

***

### safeParseAsync()

> **safeParseAsync**(`data`, `params`?): `Promise`\<[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`Map`\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>, `Map`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`Map`\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>, `Map`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>\>

#### Inherited from

`ZodType`.`safeParseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:65

***

### superRefine()

#### superRefine(refinement)

> **superRefine**\<`RefinedOutput`\>(`refinement`): `ZodEffects`\<`ZodMap`\<`Key`, `Value`\>, `RefinedOutput`, `Map`\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Type Parameters

• **RefinedOutput** *extends* `Map`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodMap`\<`Key`, `Value`\>, `RefinedOutput`, `Map`\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:73

#### superRefine(refinement)

> **superRefine**(`refinement`): `ZodEffects`\<`ZodMap`\<`Key`, `Value`\>, `Map`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, `Map`\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodMap`\<`Key`, `Value`\>, `Map`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, `Map`\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:74

#### superRefine(refinement)

> **superRefine**(`refinement`): `ZodEffects`\<`ZodMap`\<`Key`, `Value`\>, `Map`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, `Map`\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodMap`\<`Key`, `Value`\>, `Map`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, `Map`\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:75

***

### transform()

> **transform**\<`NewOut`\>(`transform`): `ZodEffects`\<`ZodMap`\<`Key`, `Value`\>, `NewOut`, `Map`\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

#### Type Parameters

• **NewOut**

#### Parameters

• **transform**

#### Returns

`ZodEffects`\<`ZodMap`\<`Key`, `Value`\>, `NewOut`, `Map`\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

#### Inherited from

`ZodType`.`transform`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:84
