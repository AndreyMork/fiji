[**@ayka/fiji**](../../../README.md) • **Docs**

***

[@ayka/fiji](../../../globals.md) / [Zod](../README.md) / ZodNullable

# Class: ZodNullable\<T\>

## Extends

- `ZodType`\<`T`\[`"_output"`\] \| `null`, [`ZodNullableDef`](../namespaces/z/interfaces/ZodNullableDef.md)\<`T`\>, `T`\[`"_input"`\] \| `null`\>

## Type Parameters

• **T** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

## Constructors

### new ZodNullable()

> **new ZodNullable**\<`T`\>(`def`): `ZodNullable`\<`T`\>

#### Parameters

• **def**: [`ZodNullableDef`](../namespaces/z/interfaces/ZodNullableDef.md)\<`T`\>

#### Returns

`ZodNullable`\<`T`\>

#### Inherited from

`ZodType`.`constructor`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:76

## Properties

### \_def

> `readonly` **\_def**: [`ZodNullableDef`](../namespaces/z/interfaces/ZodNullableDef.md)\<`T`\>

#### Inherited from

`ZodType`.`_def`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:51

***

### \_input

> `readonly` **\_input**: `null` \| `T`\[`"_input"`\]

#### Inherited from

`ZodType`.`_input`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:50

***

### \_output

> `readonly` **\_output**: `null` \| `T`\[`"_output"`\]

#### Inherited from

`ZodType`.`_output`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:49

***

### \_type

> `readonly` **\_type**: `null` \| `T`\[`"_output"`\]

#### Inherited from

`ZodType`.`_type`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:48

***

### spa()

> **spa**: (`data`, `params`?) => `Promise`\<[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`null` \| `T`\[`"_input"`\], `null` \| `T`\[`"_output"`\]\>\>

Alias of safeParseAsync

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`null` \| `T`\[`"_input"`\], `null` \| `T`\[`"_output"`\]\>\>

#### Inherited from

`ZodType`.`spa`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:67

***

### create()

> `static` **create**: \<`T_1`\>(`type`, `params`?) => `ZodNullable`\<`T_1`\>

#### Type Parameters

• **T_1** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

• **type**: `T_1`

• **params?**: [`RawCreateParams`](../namespaces/z/type-aliases/RawCreateParams.md)

#### Returns

`ZodNullable`\<`T_1`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:856

## Accessors

### description

> `get` **description**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

`ZodType`.`description`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:52

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

> **\_parse**(`input`): [`ParseReturnType`](../namespaces/z/type-aliases/ParseReturnType.md)\<`null` \| `T`\[`"_output"`\]\>

#### Parameters

• **input**: [`ParseInput`](../namespaces/z/type-aliases/ParseInput.md)

#### Returns

[`ParseReturnType`](../namespaces/z/type-aliases/ParseReturnType.md)\<`null` \| `T`\[`"_output"`\]\>

#### Overrides

`ZodType`.`_parse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:854

***

### \_parseAsync()

> **\_parseAsync**(`input`): [`AsyncParseReturnType`](../namespaces/z/type-aliases/AsyncParseReturnType.md)\<`null` \| `T`\[`"_output"`\]\>

#### Parameters

• **input**: [`ParseInput`](../namespaces/z/type-aliases/ParseInput.md)

#### Returns

[`AsyncParseReturnType`](../namespaces/z/type-aliases/AsyncParseReturnType.md)\<`null` \| `T`\[`"_output"`\]\>

#### Inherited from

`ZodType`.`_parseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:61

***

### \_parseSync()

> **\_parseSync**(`input`): [`SyncParseReturnType`](../namespaces/z/type-aliases/SyncParseReturnType.md)\<`null` \| `T`\[`"_output"`\]\>

#### Parameters

• **input**: [`ParseInput`](../namespaces/z/type-aliases/ParseInput.md)

#### Returns

[`SyncParseReturnType`](../namespaces/z/type-aliases/SyncParseReturnType.md)\<`null` \| `T`\[`"_output"`\]\>

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

> **\_refinement**(`refinement`): `ZodEffects`\<`ZodNullable`\<`T`\>, `null` \| `T`\[`"_output"`\], `null` \| `T`\[`"_input"`\]\>

#### Parameters

• **refinement**

#### Returns

`ZodEffects`\<`ZodNullable`\<`T`\>, `null` \| `T`\[`"_output"`\], `null` \| `T`\[`"_input"`\]\>

#### Inherited from

`ZodType`.`_refinement`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:72

***

### and()

> **and**\<`T`\>(`incoming`): `ZodIntersection`\<`ZodNullable`\<`T`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

• **incoming**: `T`

#### Returns

`ZodIntersection`\<`ZodNullable`\<`T`\>, `T`\>

#### Inherited from

`ZodType`.`and`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:83

***

### array()

> **array**(): `ZodArray`\<`ZodNullable`\<`T`\>, `"many"`\>

#### Returns

`ZodArray`\<`ZodNullable`\<`T`\>, `"many"`\>

#### Inherited from

`ZodType`.`array`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:80

***

### brand()

> **brand**\<`B`\>(`brand`?): `ZodBranded`\<`ZodNullable`\<`T`\>, `B`\>

#### Type Parameters

• **B** *extends* `string` \| `number` \| `symbol`

#### Parameters

• **brand?**: `B`

#### Returns

`ZodBranded`\<`ZodNullable`\<`T`\>, `B`\>

#### Inherited from

`ZodType`.`brand`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:87

***

### catch()

#### catch(def)

> **catch**(`def`): `ZodCatch`\<`ZodNullable`\<`T`\>\>

##### Parameters

• **def**: `null` \| `T`\[`"_output"`\]

##### Returns

`ZodCatch`\<`ZodNullable`\<`T`\>\>

##### Inherited from

`ZodType`.`catch`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:88

#### catch(def)

> **catch**(`def`): `ZodCatch`\<`ZodNullable`\<`T`\>\>

##### Parameters

• **def**

##### Returns

`ZodCatch`\<`ZodNullable`\<`T`\>\>

##### Inherited from

`ZodType`.`catch`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:89

***

### default()

#### default(def)

> **default**(`def`): `ZodDefault`\<`ZodNullable`\<`T`\>\>

##### Parameters

• **def**: `null` \| `noUndefined`\<`T`\[`"_input"`\]\>

##### Returns

`ZodDefault`\<`ZodNullable`\<`T`\>\>

##### Inherited from

`ZodType`.`default`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:85

#### default(def)

> **default**(`def`): `ZodDefault`\<`ZodNullable`\<`T`\>\>

##### Parameters

• **def**

##### Returns

`ZodDefault`\<`ZodNullable`\<`T`\>\>

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

> **nullable**(): `ZodNullable`\<`ZodNullable`\<`T`\>\>

#### Returns

`ZodNullable`\<`ZodNullable`\<`T`\>\>

#### Inherited from

`ZodType`.`nullable`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:78

***

### nullish()

> **nullish**(): `ZodOptional`\<`ZodNullable`\<`ZodNullable`\<`T`\>\>\>

#### Returns

`ZodOptional`\<`ZodNullable`\<`ZodNullable`\<`T`\>\>\>

#### Inherited from

`ZodType`.`nullish`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:79

***

### optional()

> **optional**(): `ZodOptional`\<`ZodNullable`\<`T`\>\>

#### Returns

`ZodOptional`\<`ZodNullable`\<`T`\>\>

#### Inherited from

`ZodType`.`optional`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:77

***

### or()

> **or**\<`T`\>(`option`): `ZodUnion`\<[`ZodNullable`\<`T`\>, `T`]\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

• **option**: `T`

#### Returns

`ZodUnion`\<[`ZodNullable`\<`T`\>, `T`]\>

#### Inherited from

`ZodType`.`or`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:82

***

### parse()

> **parse**(`data`, `params`?): `null` \| `T`\[`"_output"`\]

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

`null` \| `T`\[`"_output"`\]

#### Inherited from

`ZodType`.`parse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:62

***

### parseAsync()

> **parseAsync**(`data`, `params`?): `Promise`\<`null` \| `T`\[`"_output"`\]\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<`null` \| `T`\[`"_output"`\]\>

#### Inherited from

`ZodType`.`parseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:64

***

### pipe()

> **pipe**\<`T`\>(`target`): `ZodPipeline`\<`ZodNullable`\<`T`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

• **target**: `T`

#### Returns

`ZodPipeline`\<`ZodNullable`\<`T`\>, `T`\>

#### Inherited from

`ZodType`.`pipe`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:94

***

### promise()

> **promise**(): `ZodPromise`\<`ZodNullable`\<`T`\>\>

#### Returns

`ZodPromise`\<`ZodNullable`\<`T`\>\>

#### Inherited from

`ZodType`.`promise`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:81

***

### readonly()

> **readonly**(): `ZodReadonly`\<`ZodNullable`\<`T`\>\>

#### Returns

`ZodReadonly`\<`ZodNullable`\<`T`\>\>

#### Inherited from

`ZodType`.`readonly`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:95

***

### refine()

#### refine(check, message)

> **refine**\<`RefinedOutput`\>(`check`, `message`?): `ZodEffects`\<`ZodNullable`\<`T`\>, `RefinedOutput`, `null` \| `T`\[`"_input"`\]\>

##### Type Parameters

• **RefinedOutput** *extends* `any`

##### Parameters

• **check**

• **message?**: `string` \| `Partial`\<`Omit`\<[`ZodCustomIssue`](../namespaces/z/interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`) => `Partial`\<`Omit`\<[`ZodCustomIssue`](../namespaces/z/interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

`ZodEffects`\<`ZodNullable`\<`T`\>, `RefinedOutput`, `null` \| `T`\[`"_input"`\]\>

##### Inherited from

`ZodType`.`refine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:68

#### refine(check, message)

> **refine**(`check`, `message`?): `ZodEffects`\<`ZodNullable`\<`T`\>, `null` \| `T`\[`"_output"`\], `null` \| `T`\[`"_input"`\]\>

##### Parameters

• **check**

• **message?**: `string` \| `Partial`\<`Omit`\<[`ZodCustomIssue`](../namespaces/z/interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`) => `Partial`\<`Omit`\<[`ZodCustomIssue`](../namespaces/z/interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

`ZodEffects`\<`ZodNullable`\<`T`\>, `null` \| `T`\[`"_output"`\], `null` \| `T`\[`"_input"`\]\>

##### Inherited from

`ZodType`.`refine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:69

***

### refinement()

#### refinement(check, refinementData)

> **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): `ZodEffects`\<`ZodNullable`\<`T`\>, `RefinedOutput`, `null` \| `T`\[`"_input"`\]\>

##### Type Parameters

• **RefinedOutput** *extends* `any`

##### Parameters

• **check**

• **refinementData**: [`IssueData`](../namespaces/z/type-aliases/IssueData.md) \| (`arg`, `ctx`) => [`IssueData`](../namespaces/z/type-aliases/IssueData.md)

##### Returns

`ZodEffects`\<`ZodNullable`\<`T`\>, `RefinedOutput`, `null` \| `T`\[`"_input"`\]\>

##### Inherited from

`ZodType`.`refinement`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:70

#### refinement(check, refinementData)

> **refinement**(`check`, `refinementData`): `ZodEffects`\<`ZodNullable`\<`T`\>, `null` \| `T`\[`"_output"`\], `null` \| `T`\[`"_input"`\]\>

##### Parameters

• **check**

• **refinementData**: [`IssueData`](../namespaces/z/type-aliases/IssueData.md) \| (`arg`, `ctx`) => [`IssueData`](../namespaces/z/type-aliases/IssueData.md)

##### Returns

`ZodEffects`\<`ZodNullable`\<`T`\>, `null` \| `T`\[`"_output"`\], `null` \| `T`\[`"_input"`\]\>

##### Inherited from

`ZodType`.`refinement`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:71

***

### safeParse()

> **safeParse**(`data`, `params`?): [`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`null` \| `T`\[`"_input"`\], `null` \| `T`\[`"_output"`\]\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`null` \| `T`\[`"_input"`\], `null` \| `T`\[`"_output"`\]\>

#### Inherited from

`ZodType`.`safeParse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:63

***

### safeParseAsync()

> **safeParseAsync**(`data`, `params`?): `Promise`\<[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`null` \| `T`\[`"_input"`\], `null` \| `T`\[`"_output"`\]\>\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`null` \| `T`\[`"_input"`\], `null` \| `T`\[`"_output"`\]\>\>

#### Inherited from

`ZodType`.`safeParseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:65

***

### superRefine()

#### superRefine(refinement)

> **superRefine**\<`RefinedOutput`\>(`refinement`): `ZodEffects`\<`ZodNullable`\<`T`\>, `RefinedOutput`, `null` \| `T`\[`"_input"`\]\>

##### Type Parameters

• **RefinedOutput** *extends* `any`

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodNullable`\<`T`\>, `RefinedOutput`, `null` \| `T`\[`"_input"`\]\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:73

#### superRefine(refinement)

> **superRefine**(`refinement`): `ZodEffects`\<`ZodNullable`\<`T`\>, `null` \| `T`\[`"_output"`\], `null` \| `T`\[`"_input"`\]\>

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodNullable`\<`T`\>, `null` \| `T`\[`"_output"`\], `null` \| `T`\[`"_input"`\]\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:74

#### superRefine(refinement)

> **superRefine**(`refinement`): `ZodEffects`\<`ZodNullable`\<`T`\>, `null` \| `T`\[`"_output"`\], `null` \| `T`\[`"_input"`\]\>

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodNullable`\<`T`\>, `null` \| `T`\[`"_output"`\], `null` \| `T`\[`"_input"`\]\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:75

***

### transform()

> **transform**\<`NewOut`\>(`transform`): `ZodEffects`\<`ZodNullable`\<`T`\>, `NewOut`, `null` \| `T`\[`"_input"`\]\>

#### Type Parameters

• **NewOut**

#### Parameters

• **transform**

#### Returns

`ZodEffects`\<`ZodNullable`\<`T`\>, `NewOut`, `null` \| `T`\[`"_input"`\]\>

#### Inherited from

`ZodType`.`transform`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:84

***

### unwrap()

> **unwrap**(): `T`

#### Returns

`T`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:855
