[**@ayka/fiji**](../../../README.md) • **Docs**

***

[@ayka/fiji](../../../globals.md) / [Zod](../README.md) / ZodNumber

# Class: ZodNumber

## Extends

- `ZodType`\<`number`, [`ZodNumberDef`](../namespaces/z/interfaces/ZodNumberDef.md), `number`\>

## Constructors

### new ZodNumber()

> **new ZodNumber**(`def`): `ZodNumber`

#### Parameters

• **def**: [`ZodNumberDef`](../namespaces/z/interfaces/ZodNumberDef.md)

#### Returns

`ZodNumber`

#### Inherited from

`ZodType`.`constructor`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:76

## Properties

### \_def

> `readonly` **\_def**: [`ZodNumberDef`](../namespaces/z/interfaces/ZodNumberDef.md)

#### Inherited from

`ZodType`.`_def`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:51

***

### \_input

> `readonly` **\_input**: `number`

#### Inherited from

`ZodType`.`_input`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:50

***

### \_output

> `readonly` **\_output**: `number`

#### Inherited from

`ZodType`.`_output`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:49

***

### \_type

> `readonly` **\_type**: `number`

#### Inherited from

`ZodType`.`_type`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:48

***

### max()

> **max**: (`value`, `message`?) => `ZodNumber`

#### Parameters

• **value**: `number`

• **message?**: `ErrMessage`

#### Returns

`ZodNumber`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:310

***

### min()

> **min**: (`value`, `message`?) => `ZodNumber`

#### Parameters

• **value**: `number`

• **message?**: `ErrMessage`

#### Returns

`ZodNumber`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:307

***

### spa()

> **spa**: (`data`, `params`?) => `Promise`\<[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`number`, `number`\>\>

Alias of safeParseAsync

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`number`, `number`\>\>

#### Inherited from

`ZodType`.`spa`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:67

***

### step()

> **step**: (`value`, `message`?) => `ZodNumber`

#### Parameters

• **value**: `number`

• **message?**: `ErrMessage`

#### Returns

`ZodNumber`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:320

***

### create()

> `static` **create**: (`params`?) => `ZodNumber`

#### Parameters

• **params?**: `object` & `object`

#### Returns

`ZodNumber`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:297

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

### isFinite

#### Get Signature

> **get** **isFinite**(): `boolean`

##### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:326

***

### isInt

#### Get Signature

> **get** **isInt**(): `boolean`

##### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:325

***

### maxValue

#### Get Signature

> **get** **maxValue**(): `null` \| `number`

##### Returns

`null` \| `number`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:324

***

### minValue

#### Get Signature

> **get** **minValue**(): `null` \| `number`

##### Returns

`null` \| `number`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:323

## Methods

### \_addCheck()

> **\_addCheck**(`check`): `ZodNumber`

#### Parameters

• **check**: [`ZodNumberCheck`](../namespaces/z/type-aliases/ZodNumberCheck.md)

#### Returns

`ZodNumber`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:313

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

> **\_parse**(`input`): [`ParseReturnType`](../namespaces/z/type-aliases/ParseReturnType.md)\<`number`\>

#### Parameters

• **input**: [`ParseInput`](../namespaces/z/type-aliases/ParseInput.md)

#### Returns

[`ParseReturnType`](../namespaces/z/type-aliases/ParseReturnType.md)\<`number`\>

#### Overrides

`ZodType`.`_parse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:296

***

### \_parseAsync()

> **\_parseAsync**(`input`): [`AsyncParseReturnType`](../namespaces/z/type-aliases/AsyncParseReturnType.md)\<`number`\>

#### Parameters

• **input**: [`ParseInput`](../namespaces/z/type-aliases/ParseInput.md)

#### Returns

[`AsyncParseReturnType`](../namespaces/z/type-aliases/AsyncParseReturnType.md)\<`number`\>

#### Inherited from

`ZodType`.`_parseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:61

***

### \_parseSync()

> **\_parseSync**(`input`): [`SyncParseReturnType`](../namespaces/z/type-aliases/SyncParseReturnType.md)\<`number`\>

#### Parameters

• **input**: [`ParseInput`](../namespaces/z/type-aliases/ParseInput.md)

#### Returns

[`SyncParseReturnType`](../namespaces/z/type-aliases/SyncParseReturnType.md)\<`number`\>

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

> **\_refinement**(`refinement`): `ZodEffects`\<`ZodNumber`, `number`, `number`\>

#### Parameters

• **refinement**

#### Returns

`ZodEffects`\<`ZodNumber`, `number`, `number`\>

#### Inherited from

`ZodType`.`_refinement`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:72

***

### and()

> **and**\<`T`\>(`incoming`): `ZodIntersection`\<`ZodNumber`, `T`\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

• **incoming**: `T`

#### Returns

`ZodIntersection`\<`ZodNumber`, `T`\>

#### Inherited from

`ZodType`.`and`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:83

***

### array()

> **array**(): `ZodArray`\<`ZodNumber`, `"many"`\>

#### Returns

`ZodArray`\<`ZodNumber`, `"many"`\>

#### Inherited from

`ZodType`.`array`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:80

***

### brand()

> **brand**\<`B`\>(`brand`?): `ZodBranded`\<`ZodNumber`, `B`\>

#### Type Parameters

• **B** *extends* `string` \| `number` \| `symbol`

#### Parameters

• **brand?**: `B`

#### Returns

`ZodBranded`\<`ZodNumber`, `B`\>

#### Inherited from

`ZodType`.`brand`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:87

***

### catch()

#### catch(def)

> **catch**(`def`): `ZodCatch`\<`ZodNumber`\>

##### Parameters

• **def**: `number`

##### Returns

`ZodCatch`\<`ZodNumber`\>

##### Inherited from

`ZodType`.`catch`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:88

#### catch(def)

> **catch**(`def`): `ZodCatch`\<`ZodNumber`\>

##### Parameters

• **def**

##### Returns

`ZodCatch`\<`ZodNumber`\>

##### Inherited from

`ZodType`.`catch`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:89

***

### default()

#### default(def)

> **default**(`def`): `ZodDefault`\<`ZodNumber`\>

##### Parameters

• **def**: `number`

##### Returns

`ZodDefault`\<`ZodNumber`\>

##### Inherited from

`ZodType`.`default`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:85

#### default(def)

> **default**(`def`): `ZodDefault`\<`ZodNumber`\>

##### Parameters

• **def**

##### Returns

`ZodDefault`\<`ZodNumber`\>

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

### finite()

> **finite**(`message`?): `ZodNumber`

#### Parameters

• **message?**: `ErrMessage`

#### Returns

`ZodNumber`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:321

***

### gt()

> **gt**(`value`, `message`?): `ZodNumber`

#### Parameters

• **value**: `number`

• **message?**: `ErrMessage`

#### Returns

`ZodNumber`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:308

***

### gte()

> **gte**(`value`, `message`?): `ZodNumber`

#### Parameters

• **value**: `number`

• **message?**: `ErrMessage`

#### Returns

`ZodNumber`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:306

***

### int()

> **int**(`message`?): `ZodNumber`

#### Parameters

• **message?**: `ErrMessage`

#### Returns

`ZodNumber`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:314

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

> **lt**(`value`, `message`?): `ZodNumber`

#### Parameters

• **value**: `number`

• **message?**: `ErrMessage`

#### Returns

`ZodNumber`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:311

***

### lte()

> **lte**(`value`, `message`?): `ZodNumber`

#### Parameters

• **value**: `number`

• **message?**: `ErrMessage`

#### Returns

`ZodNumber`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:309

***

### multipleOf()

> **multipleOf**(`value`, `message`?): `ZodNumber`

#### Parameters

• **value**: `number`

• **message?**: `ErrMessage`

#### Returns

`ZodNumber`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:319

***

### negative()

> **negative**(`message`?): `ZodNumber`

#### Parameters

• **message?**: `ErrMessage`

#### Returns

`ZodNumber`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:316

***

### nonnegative()

> **nonnegative**(`message`?): `ZodNumber`

#### Parameters

• **message?**: `ErrMessage`

#### Returns

`ZodNumber`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:318

***

### nonpositive()

> **nonpositive**(`message`?): `ZodNumber`

#### Parameters

• **message?**: `ErrMessage`

#### Returns

`ZodNumber`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:317

***

### nullable()

> **nullable**(): `ZodNullable`\<`ZodNumber`\>

#### Returns

`ZodNullable`\<`ZodNumber`\>

#### Inherited from

`ZodType`.`nullable`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:78

***

### nullish()

> **nullish**(): `ZodOptional`\<`ZodNullable`\<`ZodNumber`\>\>

#### Returns

`ZodOptional`\<`ZodNullable`\<`ZodNumber`\>\>

#### Inherited from

`ZodType`.`nullish`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:79

***

### optional()

> **optional**(): `ZodOptional`\<`ZodNumber`\>

#### Returns

`ZodOptional`\<`ZodNumber`\>

#### Inherited from

`ZodType`.`optional`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:77

***

### or()

> **or**\<`T`\>(`option`): `ZodUnion`\<[`ZodNumber`, `T`]\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

• **option**: `T`

#### Returns

`ZodUnion`\<[`ZodNumber`, `T`]\>

#### Inherited from

`ZodType`.`or`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:82

***

### parse()

> **parse**(`data`, `params`?): `number`

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

`number`

#### Inherited from

`ZodType`.`parse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:62

***

### parseAsync()

> **parseAsync**(`data`, `params`?): `Promise`\<`number`\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`ZodType`.`parseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:64

***

### pipe()

> **pipe**\<`T`\>(`target`): `ZodPipeline`\<`ZodNumber`, `T`\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

• **target**: `T`

#### Returns

`ZodPipeline`\<`ZodNumber`, `T`\>

#### Inherited from

`ZodType`.`pipe`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:94

***

### positive()

> **positive**(`message`?): `ZodNumber`

#### Parameters

• **message?**: `ErrMessage`

#### Returns

`ZodNumber`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:315

***

### promise()

> **promise**(): `ZodPromise`\<`ZodNumber`\>

#### Returns

`ZodPromise`\<`ZodNumber`\>

#### Inherited from

`ZodType`.`promise`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:81

***

### readonly()

> **readonly**(): `ZodReadonly`\<`ZodNumber`\>

#### Returns

`ZodReadonly`\<`ZodNumber`\>

#### Inherited from

`ZodType`.`readonly`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:95

***

### refine()

#### refine(check, message)

> **refine**\<`RefinedOutput`\>(`check`, `message`?): `ZodEffects`\<`ZodNumber`, `RefinedOutput`, `number`\>

##### Type Parameters

• **RefinedOutput** *extends* `number`

##### Parameters

• **check**

• **message?**: `string` \| `Partial`\<`Omit`\<[`ZodCustomIssue`](../namespaces/z/interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`) => `Partial`\<`Omit`\<[`ZodCustomIssue`](../namespaces/z/interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

`ZodEffects`\<`ZodNumber`, `RefinedOutput`, `number`\>

##### Inherited from

`ZodType`.`refine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:68

#### refine(check, message)

> **refine**(`check`, `message`?): `ZodEffects`\<`ZodNumber`, `number`, `number`\>

##### Parameters

• **check**

• **message?**: `string` \| `Partial`\<`Omit`\<[`ZodCustomIssue`](../namespaces/z/interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`) => `Partial`\<`Omit`\<[`ZodCustomIssue`](../namespaces/z/interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

`ZodEffects`\<`ZodNumber`, `number`, `number`\>

##### Inherited from

`ZodType`.`refine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:69

***

### refinement()

#### refinement(check, refinementData)

> **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): `ZodEffects`\<`ZodNumber`, `RefinedOutput`, `number`\>

##### Type Parameters

• **RefinedOutput** *extends* `number`

##### Parameters

• **check**

• **refinementData**: [`IssueData`](../namespaces/z/type-aliases/IssueData.md) \| (`arg`, `ctx`) => [`IssueData`](../namespaces/z/type-aliases/IssueData.md)

##### Returns

`ZodEffects`\<`ZodNumber`, `RefinedOutput`, `number`\>

##### Inherited from

`ZodType`.`refinement`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:70

#### refinement(check, refinementData)

> **refinement**(`check`, `refinementData`): `ZodEffects`\<`ZodNumber`, `number`, `number`\>

##### Parameters

• **check**

• **refinementData**: [`IssueData`](../namespaces/z/type-aliases/IssueData.md) \| (`arg`, `ctx`) => [`IssueData`](../namespaces/z/type-aliases/IssueData.md)

##### Returns

`ZodEffects`\<`ZodNumber`, `number`, `number`\>

##### Inherited from

`ZodType`.`refinement`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:71

***

### safe()

> **safe**(`message`?): `ZodNumber`

#### Parameters

• **message?**: `ErrMessage`

#### Returns

`ZodNumber`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:322

***

### safeParse()

> **safeParse**(`data`, `params`?): [`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`number`, `number`\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`number`, `number`\>

#### Inherited from

`ZodType`.`safeParse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:63

***

### safeParseAsync()

> **safeParseAsync**(`data`, `params`?): `Promise`\<[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`number`, `number`\>\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`number`, `number`\>\>

#### Inherited from

`ZodType`.`safeParseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:65

***

### setLimit()

> `protected` **setLimit**(`kind`, `value`, `inclusive`, `message`?): `ZodNumber`

#### Parameters

• **kind**: `"min"` \| `"max"`

• **value**: `number`

• **inclusive**: `boolean`

• **message?**: `string`

#### Returns

`ZodNumber`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:312

***

### superRefine()

#### superRefine(refinement)

> **superRefine**\<`RefinedOutput`\>(`refinement`): `ZodEffects`\<`ZodNumber`, `RefinedOutput`, `number`\>

##### Type Parameters

• **RefinedOutput** *extends* `number`

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodNumber`, `RefinedOutput`, `number`\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:73

#### superRefine(refinement)

> **superRefine**(`refinement`): `ZodEffects`\<`ZodNumber`, `number`, `number`\>

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodNumber`, `number`, `number`\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:74

#### superRefine(refinement)

> **superRefine**(`refinement`): `ZodEffects`\<`ZodNumber`, `number`, `number`\>

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodNumber`, `number`, `number`\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:75

***

### transform()

> **transform**\<`NewOut`\>(`transform`): `ZodEffects`\<`ZodNumber`, `NewOut`, `number`\>

#### Type Parameters

• **NewOut**

#### Parameters

• **transform**

#### Returns

`ZodEffects`\<`ZodNumber`, `NewOut`, `number`\>

#### Inherited from

`ZodType`.`transform`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:84
