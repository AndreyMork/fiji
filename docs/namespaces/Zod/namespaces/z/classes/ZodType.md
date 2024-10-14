[**@ayka/fiji**](../../../../../README.md) • **Docs**

***

[@ayka/fiji](../../../../../globals.md) / [Zod](../../../README.md) / [z](../README.md) / ZodType

# Class: `abstract` ZodType\<Output, Def, Input\>

## Type Parameters

• **Output** = `any`

• **Def** *extends* [`ZodTypeDef`](../interfaces/ZodTypeDef.md) = [`ZodTypeDef`](../interfaces/ZodTypeDef.md)

• **Input** = `Output`

## Constructors

### new ZodType()

> **new ZodType**\<`Output`, `Def`, `Input`\>(`def`): `ZodType`\<`Output`, `Def`, `Input`\>

#### Parameters

• **def**: `Def`

#### Returns

`ZodType`\<`Output`, `Def`, `Input`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:76

## Properties

### \_def

> `readonly` **\_def**: `Def`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:51

***

### \_input

> `readonly` **\_input**: `Input`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:50

***

### \_output

> `readonly` **\_output**: `Output`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:49

***

### \_type

> `readonly` **\_type**: `Output`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:48

***

### spa()

> **spa**: (`data`, `params`?) => `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Input`, `Output`\>\>

Alias of safeParseAsync

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Input`, `Output`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:67

## Accessors

### description

> `get` **description**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:52

## Methods

### \_getOrReturnCtx()

> **\_getOrReturnCtx**(`input`, `ctx`?): [`ParseContext`](../interfaces/ParseContext.md)

#### Parameters

• **input**: [`ParseInput`](../type-aliases/ParseInput.md)

• **ctx?**: [`ParseContext`](../interfaces/ParseContext.md)

#### Returns

[`ParseContext`](../interfaces/ParseContext.md)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:55

***

### \_getType()

> **\_getType**(`input`): `string`

#### Parameters

• **input**: [`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

`string`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:54

***

### \_parse()

> `abstract` **\_parse**(`input`): [`ParseReturnType`](../type-aliases/ParseReturnType.md)\<`Output`\>

#### Parameters

• **input**: [`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`ParseReturnType`](../type-aliases/ParseReturnType.md)\<`Output`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:53

***

### \_parseAsync()

> **\_parseAsync**(`input`): [`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<`Output`\>

#### Parameters

• **input**: [`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<`Output`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:61

***

### \_parseSync()

> **\_parseSync**(`input`): [`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`Output`\>

#### Parameters

• **input**: [`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`Output`\>

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

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:56

***

### \_refinement()

> **\_refinement**(`refinement`): `ZodEffects`\<`ZodType`\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

#### Parameters

• **refinement**

#### Returns

`ZodEffects`\<`ZodType`\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:72

***

### and()

> **and**\<`T`\>(`incoming`): `ZodIntersection`\<`ZodType`\<`Output`, `Def`, `Input`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

• **incoming**: `T`

#### Returns

`ZodIntersection`\<`ZodType`\<`Output`, `Def`, `Input`\>, `T`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:83

***

### array()

> **array**(): `ZodArray`\<`ZodType`\<`Output`, `Def`, `Input`\>, `"many"`\>

#### Returns

`ZodArray`\<`ZodType`\<`Output`, `Def`, `Input`\>, `"many"`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:80

***

### brand()

> **brand**\<`B`\>(`brand`?): `ZodBranded`\<`ZodType`\<`Output`, `Def`, `Input`\>, `B`\>

#### Type Parameters

• **B** *extends* `string` \| `number` \| `symbol`

#### Parameters

• **brand?**: `B`

#### Returns

`ZodBranded`\<`ZodType`\<`Output`, `Def`, `Input`\>, `B`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:87

***

### catch()

#### catch(def)

> **catch**(`def`): `ZodCatch`\<`ZodType`\<`Output`, `Def`, `Input`\>\>

##### Parameters

• **def**: `Output`

##### Returns

`ZodCatch`\<`ZodType`\<`Output`, `Def`, `Input`\>\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:88

#### catch(def)

> **catch**(`def`): `ZodCatch`\<`ZodType`\<`Output`, `Def`, `Input`\>\>

##### Parameters

• **def**

##### Returns

`ZodCatch`\<`ZodType`\<`Output`, `Def`, `Input`\>\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:89

***

### default()

#### default(def)

> **default**(`def`): `ZodDefault`\<`ZodType`\<`Output`, `Def`, `Input`\>\>

##### Parameters

• **def**: `noUndefined`\<`Input`\>

##### Returns

`ZodDefault`\<`ZodType`\<`Output`, `Def`, `Input`\>\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:85

#### default(def)

> **default**(`def`): `ZodDefault`\<`ZodType`\<`Output`, `Def`, `Input`\>\>

##### Parameters

• **def**

##### Returns

`ZodDefault`\<`ZodType`\<`Output`, `Def`, `Input`\>\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:86

***

### describe()

> **describe**(`description`): `this`

#### Parameters

• **description**: `string`

#### Returns

`this`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:93

***

### isNullable()

> **isNullable**(): `boolean`

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:97

***

### isOptional()

> **isOptional**(): `boolean`

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:96

***

### nullable()

> **nullable**(): `ZodNullable`\<`ZodType`\<`Output`, `Def`, `Input`\>\>

#### Returns

`ZodNullable`\<`ZodType`\<`Output`, `Def`, `Input`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:78

***

### nullish()

> **nullish**(): `ZodOptional`\<`ZodNullable`\<`ZodType`\<`Output`, `Def`, `Input`\>\>\>

#### Returns

`ZodOptional`\<`ZodNullable`\<`ZodType`\<`Output`, `Def`, `Input`\>\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:79

***

### optional()

> **optional**(): `ZodOptional`\<`ZodType`\<`Output`, `Def`, `Input`\>\>

#### Returns

`ZodOptional`\<`ZodType`\<`Output`, `Def`, `Input`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:77

***

### or()

> **or**\<`T`\>(`option`): `ZodUnion`\<[`ZodType`\<`Output`, `Def`, `Input`\>, `T`]\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

• **option**: `T`

#### Returns

`ZodUnion`\<[`ZodType`\<`Output`, `Def`, `Input`\>, `T`]\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:82

***

### parse()

> **parse**(`data`, `params`?): `Output`

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Output`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:62

***

### parseAsync()

> **parseAsync**(`data`, `params`?): `Promise`\<`Output`\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<`Output`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:64

***

### pipe()

> **pipe**\<`T`\>(`target`): `ZodPipeline`\<`ZodType`\<`Output`, `Def`, `Input`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

• **target**: `T`

#### Returns

`ZodPipeline`\<`ZodType`\<`Output`, `Def`, `Input`\>, `T`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:94

***

### promise()

> **promise**(): `ZodPromise`\<`ZodType`\<`Output`, `Def`, `Input`\>\>

#### Returns

`ZodPromise`\<`ZodType`\<`Output`, `Def`, `Input`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:81

***

### readonly()

> **readonly**(): `ZodReadonly`\<`ZodType`\<`Output`, `Def`, `Input`\>\>

#### Returns

`ZodReadonly`\<`ZodType`\<`Output`, `Def`, `Input`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:95

***

### refine()

#### refine(check, message)

> **refine**\<`RefinedOutput`\>(`check`, `message`?): `ZodEffects`\<`ZodType`\<`Output`, `Def`, `Input`\>, `RefinedOutput`, `Input`\>

##### Type Parameters

• **RefinedOutput**

##### Parameters

• **check**

• **message?**: `string` \| `Partial`\<`Omit`\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`) => `Partial`\<`Omit`\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

`ZodEffects`\<`ZodType`\<`Output`, `Def`, `Input`\>, `RefinedOutput`, `Input`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:68

#### refine(check, message)

> **refine**(`check`, `message`?): `ZodEffects`\<`ZodType`\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

##### Parameters

• **check**

• **message?**: `string` \| `Partial`\<`Omit`\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`) => `Partial`\<`Omit`\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

`ZodEffects`\<`ZodType`\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:69

***

### refinement()

#### refinement(check, refinementData)

> **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): `ZodEffects`\<`ZodType`\<`Output`, `Def`, `Input`\>, `RefinedOutput`, `Input`\>

##### Type Parameters

• **RefinedOutput**

##### Parameters

• **check**

• **refinementData**: [`IssueData`](../type-aliases/IssueData.md) \| (`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md)

##### Returns

`ZodEffects`\<`ZodType`\<`Output`, `Def`, `Input`\>, `RefinedOutput`, `Input`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:70

#### refinement(check, refinementData)

> **refinement**(`check`, `refinementData`): `ZodEffects`\<`ZodType`\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

##### Parameters

• **check**

• **refinementData**: [`IssueData`](../type-aliases/IssueData.md) \| (`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md)

##### Returns

`ZodEffects`\<`ZodType`\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:71

***

### safeParse()

> **safeParse**(`data`, `params`?): [`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Input`, `Output`\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Input`, `Output`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:63

***

### safeParseAsync()

> **safeParseAsync**(`data`, `params`?): `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Input`, `Output`\>\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Input`, `Output`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:65

***

### superRefine()

#### superRefine(refinement)

> **superRefine**\<`RefinedOutput`\>(`refinement`): `ZodEffects`\<`ZodType`\<`Output`, `Def`, `Input`\>, `RefinedOutput`, `Input`\>

##### Type Parameters

• **RefinedOutput**

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodType`\<`Output`, `Def`, `Input`\>, `RefinedOutput`, `Input`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:73

#### superRefine(refinement)

> **superRefine**(`refinement`): `ZodEffects`\<`ZodType`\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodType`\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:74

#### superRefine(refinement)

> **superRefine**(`refinement`): `ZodEffects`\<`ZodType`\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodType`\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:75

***

### transform()

> **transform**\<`NewOut`\>(`transform`): `ZodEffects`\<`ZodType`\<`Output`, `Def`, `Input`\>, `NewOut`, `Input`\>

#### Type Parameters

• **NewOut**

#### Parameters

• **transform**

#### Returns

`ZodEffects`\<`ZodType`\<`Output`, `Def`, `Input`\>, `NewOut`, `Input`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:84
