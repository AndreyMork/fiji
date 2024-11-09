[**@ayka/fiji**](../../../README.md) • **Docs**

***

[@ayka/fiji](../../../globals.md) / [Zod](../README.md) / ZodBigInt

# Class: ZodBigInt

## Extends

- `ZodType`\<`bigint`, [`ZodBigIntDef`](../namespaces/z/interfaces/ZodBigIntDef.md), `bigint`\>

## Constructors

### new ZodBigInt()

> **new ZodBigInt**(`def`): `ZodBigInt`

#### Parameters

• **def**: [`ZodBigIntDef`](../namespaces/z/interfaces/ZodBigIntDef.md)

#### Returns

`ZodBigInt`

#### Inherited from

`ZodType`.`constructor`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:76

## Properties

### \_def

> `readonly` **\_def**: [`ZodBigIntDef`](../namespaces/z/interfaces/ZodBigIntDef.md)

#### Inherited from

`ZodType`.`_def`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:51

***

### \_input

> `readonly` **\_input**: `bigint`

#### Inherited from

`ZodType`.`_input`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:50

***

### \_output

> `readonly` **\_output**: `bigint`

#### Inherited from

`ZodType`.`_output`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:49

***

### \_type

> `readonly` **\_type**: `bigint`

#### Inherited from

`ZodType`.`_type`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:48

***

### max()

> **max**: (`value`, `message`?) => `ZodBigInt`

#### Parameters

• **value**: `bigint`

• **message?**: `ErrMessage`

#### Returns

`ZodBigInt`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:363

***

### min()

> **min**: (`value`, `message`?) => `ZodBigInt`

#### Parameters

• **value**: `bigint`

• **message?**: `ErrMessage`

#### Returns

`ZodBigInt`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:360

***

### spa()

> **spa**: (`data`, `params`?) => `Promise`\<[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`bigint`, `bigint`\>\>

Alias of safeParseAsync

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`bigint`, `bigint`\>\>

#### Inherited from

`ZodType`.`spa`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:67

***

### create()

> `static` **create**: (`params`?) => `ZodBigInt`

#### Parameters

• **params?**: `object` & `object`

#### Returns

`ZodBigInt`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:350

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

### maxValue

#### Get Signature

> **get** **maxValue**(): `null` \| `bigint`

##### Returns

`null` \| `bigint`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:373

***

### minValue

#### Get Signature

> **get** **minValue**(): `null` \| `bigint`

##### Returns

`null` \| `bigint`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:372

## Methods

### \_addCheck()

> **\_addCheck**(`check`): `ZodBigInt`

#### Parameters

• **check**: [`ZodBigIntCheck`](../namespaces/z/type-aliases/ZodBigIntCheck.md)

#### Returns

`ZodBigInt`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:366

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

> **\_parse**(`input`): [`ParseReturnType`](../namespaces/z/type-aliases/ParseReturnType.md)\<`bigint`\>

#### Parameters

• **input**: [`ParseInput`](../namespaces/z/type-aliases/ParseInput.md)

#### Returns

[`ParseReturnType`](../namespaces/z/type-aliases/ParseReturnType.md)\<`bigint`\>

#### Overrides

`ZodType`.`_parse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:349

***

### \_parseAsync()

> **\_parseAsync**(`input`): [`AsyncParseReturnType`](../namespaces/z/type-aliases/AsyncParseReturnType.md)\<`bigint`\>

#### Parameters

• **input**: [`ParseInput`](../namespaces/z/type-aliases/ParseInput.md)

#### Returns

[`AsyncParseReturnType`](../namespaces/z/type-aliases/AsyncParseReturnType.md)\<`bigint`\>

#### Inherited from

`ZodType`.`_parseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:61

***

### \_parseSync()

> **\_parseSync**(`input`): [`SyncParseReturnType`](../namespaces/z/type-aliases/SyncParseReturnType.md)\<`bigint`\>

#### Parameters

• **input**: [`ParseInput`](../namespaces/z/type-aliases/ParseInput.md)

#### Returns

[`SyncParseReturnType`](../namespaces/z/type-aliases/SyncParseReturnType.md)\<`bigint`\>

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

> **\_refinement**(`refinement`): `ZodEffects`\<`ZodBigInt`, `bigint`, `bigint`\>

#### Parameters

• **refinement**

#### Returns

`ZodEffects`\<`ZodBigInt`, `bigint`, `bigint`\>

#### Inherited from

`ZodType`.`_refinement`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:72

***

### and()

> **and**\<`T`\>(`incoming`): `ZodIntersection`\<`ZodBigInt`, `T`\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

• **incoming**: `T`

#### Returns

`ZodIntersection`\<`ZodBigInt`, `T`\>

#### Inherited from

`ZodType`.`and`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:83

***

### array()

> **array**(): `ZodArray`\<`ZodBigInt`, `"many"`\>

#### Returns

`ZodArray`\<`ZodBigInt`, `"many"`\>

#### Inherited from

`ZodType`.`array`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:80

***

### brand()

> **brand**\<`B`\>(`brand`?): `ZodBranded`\<`ZodBigInt`, `B`\>

#### Type Parameters

• **B** *extends* `string` \| `number` \| `symbol`

#### Parameters

• **brand?**: `B`

#### Returns

`ZodBranded`\<`ZodBigInt`, `B`\>

#### Inherited from

`ZodType`.`brand`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:87

***

### catch()

#### catch(def)

> **catch**(`def`): `ZodCatch`\<`ZodBigInt`\>

##### Parameters

• **def**: `bigint`

##### Returns

`ZodCatch`\<`ZodBigInt`\>

##### Inherited from

`ZodType`.`catch`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:88

#### catch(def)

> **catch**(`def`): `ZodCatch`\<`ZodBigInt`\>

##### Parameters

• **def**

##### Returns

`ZodCatch`\<`ZodBigInt`\>

##### Inherited from

`ZodType`.`catch`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:89

***

### default()

#### default(def)

> **default**(`def`): `ZodDefault`\<`ZodBigInt`\>

##### Parameters

• **def**: `bigint`

##### Returns

`ZodDefault`\<`ZodBigInt`\>

##### Inherited from

`ZodType`.`default`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:85

#### default(def)

> **default**(`def`): `ZodDefault`\<`ZodBigInt`\>

##### Parameters

• **def**

##### Returns

`ZodDefault`\<`ZodBigInt`\>

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

### gt()

> **gt**(`value`, `message`?): `ZodBigInt`

#### Parameters

• **value**: `bigint`

• **message?**: `ErrMessage`

#### Returns

`ZodBigInt`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:361

***

### gte()

> **gte**(`value`, `message`?): `ZodBigInt`

#### Parameters

• **value**: `bigint`

• **message?**: `ErrMessage`

#### Returns

`ZodBigInt`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:359

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

### lt()

> **lt**(`value`, `message`?): `ZodBigInt`

#### Parameters

• **value**: `bigint`

• **message?**: `ErrMessage`

#### Returns

`ZodBigInt`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:364

***

### lte()

> **lte**(`value`, `message`?): `ZodBigInt`

#### Parameters

• **value**: `bigint`

• **message?**: `ErrMessage`

#### Returns

`ZodBigInt`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:362

***

### multipleOf()

> **multipleOf**(`value`, `message`?): `ZodBigInt`

#### Parameters

• **value**: `bigint`

• **message?**: `ErrMessage`

#### Returns

`ZodBigInt`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:371

***

### negative()

> **negative**(`message`?): `ZodBigInt`

#### Parameters

• **message?**: `ErrMessage`

#### Returns

`ZodBigInt`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:368

***

### nonnegative()

> **nonnegative**(`message`?): `ZodBigInt`

#### Parameters

• **message?**: `ErrMessage`

#### Returns

`ZodBigInt`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:370

***

### nonpositive()

> **nonpositive**(`message`?): `ZodBigInt`

#### Parameters

• **message?**: `ErrMessage`

#### Returns

`ZodBigInt`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:369

***

### nullable()

> **nullable**(): `ZodNullable`\<`ZodBigInt`\>

#### Returns

`ZodNullable`\<`ZodBigInt`\>

#### Inherited from

`ZodType`.`nullable`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:78

***

### nullish()

> **nullish**(): `ZodOptional`\<`ZodNullable`\<`ZodBigInt`\>\>

#### Returns

`ZodOptional`\<`ZodNullable`\<`ZodBigInt`\>\>

#### Inherited from

`ZodType`.`nullish`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:79

***

### optional()

> **optional**(): `ZodOptional`\<`ZodBigInt`\>

#### Returns

`ZodOptional`\<`ZodBigInt`\>

#### Inherited from

`ZodType`.`optional`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:77

***

### or()

> **or**\<`T`\>(`option`): `ZodUnion`\<[`ZodBigInt`, `T`]\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

• **option**: `T`

#### Returns

`ZodUnion`\<[`ZodBigInt`, `T`]\>

#### Inherited from

`ZodType`.`or`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:82

***

### parse()

> **parse**(`data`, `params`?): `bigint`

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

`bigint`

#### Inherited from

`ZodType`.`parse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:62

***

### parseAsync()

> **parseAsync**(`data`, `params`?): `Promise`\<`bigint`\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<`bigint`\>

#### Inherited from

`ZodType`.`parseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:64

***

### pipe()

> **pipe**\<`T`\>(`target`): `ZodPipeline`\<`ZodBigInt`, `T`\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

• **target**: `T`

#### Returns

`ZodPipeline`\<`ZodBigInt`, `T`\>

#### Inherited from

`ZodType`.`pipe`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:94

***

### positive()

> **positive**(`message`?): `ZodBigInt`

#### Parameters

• **message?**: `ErrMessage`

#### Returns

`ZodBigInt`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:367

***

### promise()

> **promise**(): `ZodPromise`\<`ZodBigInt`\>

#### Returns

`ZodPromise`\<`ZodBigInt`\>

#### Inherited from

`ZodType`.`promise`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:81

***

### readonly()

> **readonly**(): `ZodReadonly`\<`ZodBigInt`\>

#### Returns

`ZodReadonly`\<`ZodBigInt`\>

#### Inherited from

`ZodType`.`readonly`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:95

***

### refine()

#### refine(check, message)

> **refine**\<`RefinedOutput`\>(`check`, `message`?): `ZodEffects`\<`ZodBigInt`, `RefinedOutput`, `bigint`\>

##### Type Parameters

• **RefinedOutput** *extends* `bigint`

##### Parameters

• **check**

• **message?**: `string` \| `Partial`\<`Omit`\<[`ZodCustomIssue`](../namespaces/z/interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`) => `Partial`\<`Omit`\<[`ZodCustomIssue`](../namespaces/z/interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

`ZodEffects`\<`ZodBigInt`, `RefinedOutput`, `bigint`\>

##### Inherited from

`ZodType`.`refine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:68

#### refine(check, message)

> **refine**(`check`, `message`?): `ZodEffects`\<`ZodBigInt`, `bigint`, `bigint`\>

##### Parameters

• **check**

• **message?**: `string` \| `Partial`\<`Omit`\<[`ZodCustomIssue`](../namespaces/z/interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`) => `Partial`\<`Omit`\<[`ZodCustomIssue`](../namespaces/z/interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

`ZodEffects`\<`ZodBigInt`, `bigint`, `bigint`\>

##### Inherited from

`ZodType`.`refine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:69

***

### refinement()

#### refinement(check, refinementData)

> **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): `ZodEffects`\<`ZodBigInt`, `RefinedOutput`, `bigint`\>

##### Type Parameters

• **RefinedOutput** *extends* `bigint`

##### Parameters

• **check**

• **refinementData**: [`IssueData`](../namespaces/z/type-aliases/IssueData.md) \| (`arg`, `ctx`) => [`IssueData`](../namespaces/z/type-aliases/IssueData.md)

##### Returns

`ZodEffects`\<`ZodBigInt`, `RefinedOutput`, `bigint`\>

##### Inherited from

`ZodType`.`refinement`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:70

#### refinement(check, refinementData)

> **refinement**(`check`, `refinementData`): `ZodEffects`\<`ZodBigInt`, `bigint`, `bigint`\>

##### Parameters

• **check**

• **refinementData**: [`IssueData`](../namespaces/z/type-aliases/IssueData.md) \| (`arg`, `ctx`) => [`IssueData`](../namespaces/z/type-aliases/IssueData.md)

##### Returns

`ZodEffects`\<`ZodBigInt`, `bigint`, `bigint`\>

##### Inherited from

`ZodType`.`refinement`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:71

***

### safeParse()

> **safeParse**(`data`, `params`?): [`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`bigint`, `bigint`\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`bigint`, `bigint`\>

#### Inherited from

`ZodType`.`safeParse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:63

***

### safeParseAsync()

> **safeParseAsync**(`data`, `params`?): `Promise`\<[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`bigint`, `bigint`\>\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`bigint`, `bigint`\>\>

#### Inherited from

`ZodType`.`safeParseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:65

***

### setLimit()

> `protected` **setLimit**(`kind`, `value`, `inclusive`, `message`?): `ZodBigInt`

#### Parameters

• **kind**: `"min"` \| `"max"`

• **value**: `bigint`

• **inclusive**: `boolean`

• **message?**: `string`

#### Returns

`ZodBigInt`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:365

***

### superRefine()

#### superRefine(refinement)

> **superRefine**\<`RefinedOutput`\>(`refinement`): `ZodEffects`\<`ZodBigInt`, `RefinedOutput`, `bigint`\>

##### Type Parameters

• **RefinedOutput** *extends* `bigint`

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodBigInt`, `RefinedOutput`, `bigint`\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:73

#### superRefine(refinement)

> **superRefine**(`refinement`): `ZodEffects`\<`ZodBigInt`, `bigint`, `bigint`\>

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodBigInt`, `bigint`, `bigint`\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:74

#### superRefine(refinement)

> **superRefine**(`refinement`): `ZodEffects`\<`ZodBigInt`, `bigint`, `bigint`\>

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodBigInt`, `bigint`, `bigint`\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:75

***

### transform()

> **transform**\<`NewOut`\>(`transform`): `ZodEffects`\<`ZodBigInt`, `NewOut`, `bigint`\>

#### Type Parameters

• **NewOut**

#### Parameters

• **transform**

#### Returns

`ZodEffects`\<`ZodBigInt`, `NewOut`, `bigint`\>

#### Inherited from

`ZodType`.`transform`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:84
