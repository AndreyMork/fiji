[**@ayka/fiji**](../../../README.md) • **Docs**

***

[@ayka/fiji](../../../globals.md) / [Zod](../README.md) / ZodSet

# Class: ZodSet\<Value\>

## Extends

- `ZodType`\<`Set`\<`Value`\[`"_output"`\]\>, [`ZodSetDef`](../namespaces/z/interfaces/ZodSetDef.md)\<`Value`\>, `Set`\<`Value`\[`"_input"`\]\>\>

## Type Parameters

• **Value** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

## Constructors

### new ZodSet()

> **new ZodSet**\<`Value`\>(`def`): `ZodSet`\<`Value`\>

#### Parameters

• **def**: [`ZodSetDef`](../namespaces/z/interfaces/ZodSetDef.md)\<`Value`\>

#### Returns

`ZodSet`\<`Value`\>

#### Inherited from

`ZodType`.`constructor`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:76

## Properties

### \_def

> `readonly` **\_def**: [`ZodSetDef`](../namespaces/z/interfaces/ZodSetDef.md)\<`Value`\>

#### Inherited from

`ZodType`.`_def`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:51

***

### \_input

> `readonly` **\_input**: `Set`\<`Value`\[`"_input"`\]\>

#### Inherited from

`ZodType`.`_input`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:50

***

### \_output

> `readonly` **\_output**: `Set`\<`Value`\[`"_output"`\]\>

#### Inherited from

`ZodType`.`_output`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:49

***

### \_type

> `readonly` **\_type**: `Set`\<`Value`\[`"_output"`\]\>

#### Inherited from

`ZodType`.`_type`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:48

***

### spa()

> **spa**: (`data`, `params`?) => `Promise`\<[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`Set`\<`Value`\[`"_input"`\]\>, `Set`\<`Value`\[`"_output"`\]\>\>\>

Alias of safeParseAsync

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`Set`\<`Value`\[`"_input"`\]\>, `Set`\<`Value`\[`"_output"`\]\>\>\>

#### Inherited from

`ZodType`.`spa`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:67

***

### create()

> `static` **create**: \<`Value_1`\>(`valueType`, `params`?) => `ZodSet`\<`Value_1`\>

#### Type Parameters

• **Value_1** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

• **valueType**: `Value_1`

• **params?**: [`RawCreateParams`](../namespaces/z/type-aliases/RawCreateParams.md)

#### Returns

`ZodSet`\<`Value_1`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:718

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

> **\_parse**(`input`): [`ParseReturnType`](../namespaces/z/type-aliases/ParseReturnType.md)\<`Set`\<`Value`\[`"_output"`\]\>\>

#### Parameters

• **input**: [`ParseInput`](../namespaces/z/type-aliases/ParseInput.md)

#### Returns

[`ParseReturnType`](../namespaces/z/type-aliases/ParseReturnType.md)\<`Set`\<`Value`\[`"_output"`\]\>\>

#### Overrides

`ZodType`.`_parse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:713

***

### \_parseAsync()

> **\_parseAsync**(`input`): [`AsyncParseReturnType`](../namespaces/z/type-aliases/AsyncParseReturnType.md)\<`Set`\<`Value`\[`"_output"`\]\>\>

#### Parameters

• **input**: [`ParseInput`](../namespaces/z/type-aliases/ParseInput.md)

#### Returns

[`AsyncParseReturnType`](../namespaces/z/type-aliases/AsyncParseReturnType.md)\<`Set`\<`Value`\[`"_output"`\]\>\>

#### Inherited from

`ZodType`.`_parseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:61

***

### \_parseSync()

> **\_parseSync**(`input`): [`SyncParseReturnType`](../namespaces/z/type-aliases/SyncParseReturnType.md)\<`Set`\<`Value`\[`"_output"`\]\>\>

#### Parameters

• **input**: [`ParseInput`](../namespaces/z/type-aliases/ParseInput.md)

#### Returns

[`SyncParseReturnType`](../namespaces/z/type-aliases/SyncParseReturnType.md)\<`Set`\<`Value`\[`"_output"`\]\>\>

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

> **\_refinement**(`refinement`): `ZodEffects`\<`ZodSet`\<`Value`\>, `Set`\<`Value`\[`"_output"`\]\>, `Set`\<`Value`\[`"_input"`\]\>\>

#### Parameters

• **refinement**

#### Returns

`ZodEffects`\<`ZodSet`\<`Value`\>, `Set`\<`Value`\[`"_output"`\]\>, `Set`\<`Value`\[`"_input"`\]\>\>

#### Inherited from

`ZodType`.`_refinement`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:72

***

### and()

> **and**\<`T`\>(`incoming`): `ZodIntersection`\<`ZodSet`\<`Value`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

• **incoming**: `T`

#### Returns

`ZodIntersection`\<`ZodSet`\<`Value`\>, `T`\>

#### Inherited from

`ZodType`.`and`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:83

***

### array()

> **array**(): `ZodArray`\<`ZodSet`\<`Value`\>, `"many"`\>

#### Returns

`ZodArray`\<`ZodSet`\<`Value`\>, `"many"`\>

#### Inherited from

`ZodType`.`array`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:80

***

### brand()

> **brand**\<`B`\>(`brand`?): `ZodBranded`\<`ZodSet`\<`Value`\>, `B`\>

#### Type Parameters

• **B** *extends* `string` \| `number` \| `symbol`

#### Parameters

• **brand?**: `B`

#### Returns

`ZodBranded`\<`ZodSet`\<`Value`\>, `B`\>

#### Inherited from

`ZodType`.`brand`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:87

***

### catch()

#### catch(def)

> **catch**(`def`): `ZodCatch`\<`ZodSet`\<`Value`\>\>

##### Parameters

• **def**: `Set`\<`Value`\[`"_output"`\]\>

##### Returns

`ZodCatch`\<`ZodSet`\<`Value`\>\>

##### Inherited from

`ZodType`.`catch`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:88

#### catch(def)

> **catch**(`def`): `ZodCatch`\<`ZodSet`\<`Value`\>\>

##### Parameters

• **def**

##### Returns

`ZodCatch`\<`ZodSet`\<`Value`\>\>

##### Inherited from

`ZodType`.`catch`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:89

***

### default()

#### default(def)

> **default**(`def`): `ZodDefault`\<`ZodSet`\<`Value`\>\>

##### Parameters

• **def**: `Set`\<`Value`\[`"_input"`\]\>

##### Returns

`ZodDefault`\<`ZodSet`\<`Value`\>\>

##### Inherited from

`ZodType`.`default`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:85

#### default(def)

> **default**(`def`): `ZodDefault`\<`ZodSet`\<`Value`\>\>

##### Parameters

• **def**

##### Returns

`ZodDefault`\<`ZodSet`\<`Value`\>\>

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

### max()

> **max**(`maxSize`, `message`?): `this`

#### Parameters

• **maxSize**: `number`

• **message?**: `ErrMessage`

#### Returns

`this`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:715

***

### min()

> **min**(`minSize`, `message`?): `this`

#### Parameters

• **minSize**: `number`

• **message?**: `ErrMessage`

#### Returns

`this`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:714

***

### nonempty()

> **nonempty**(`message`?): `ZodSet`\<`Value`\>

#### Parameters

• **message?**: `ErrMessage`

#### Returns

`ZodSet`\<`Value`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:717

***

### nullable()

> **nullable**(): `ZodNullable`\<`ZodSet`\<`Value`\>\>

#### Returns

`ZodNullable`\<`ZodSet`\<`Value`\>\>

#### Inherited from

`ZodType`.`nullable`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:78

***

### nullish()

> **nullish**(): `ZodOptional`\<`ZodNullable`\<`ZodSet`\<`Value`\>\>\>

#### Returns

`ZodOptional`\<`ZodNullable`\<`ZodSet`\<`Value`\>\>\>

#### Inherited from

`ZodType`.`nullish`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:79

***

### optional()

> **optional**(): `ZodOptional`\<`ZodSet`\<`Value`\>\>

#### Returns

`ZodOptional`\<`ZodSet`\<`Value`\>\>

#### Inherited from

`ZodType`.`optional`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:77

***

### or()

> **or**\<`T`\>(`option`): `ZodUnion`\<[`ZodSet`\<`Value`\>, `T`]\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

• **option**: `T`

#### Returns

`ZodUnion`\<[`ZodSet`\<`Value`\>, `T`]\>

#### Inherited from

`ZodType`.`or`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:82

***

### parse()

> **parse**(`data`, `params`?): `Set`\<`Value`\[`"_output"`\]\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

`Set`\<`Value`\[`"_output"`\]\>

#### Inherited from

`ZodType`.`parse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:62

***

### parseAsync()

> **parseAsync**(`data`, `params`?): `Promise`\<`Set`\<`Value`\[`"_output"`\]\>\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<`Set`\<`Value`\[`"_output"`\]\>\>

#### Inherited from

`ZodType`.`parseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:64

***

### pipe()

> **pipe**\<`T`\>(`target`): `ZodPipeline`\<`ZodSet`\<`Value`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

• **target**: `T`

#### Returns

`ZodPipeline`\<`ZodSet`\<`Value`\>, `T`\>

#### Inherited from

`ZodType`.`pipe`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:94

***

### promise()

> **promise**(): `ZodPromise`\<`ZodSet`\<`Value`\>\>

#### Returns

`ZodPromise`\<`ZodSet`\<`Value`\>\>

#### Inherited from

`ZodType`.`promise`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:81

***

### readonly()

> **readonly**(): `ZodReadonly`\<`ZodSet`\<`Value`\>\>

#### Returns

`ZodReadonly`\<`ZodSet`\<`Value`\>\>

#### Inherited from

`ZodType`.`readonly`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:95

***

### refine()

#### refine(check, message)

> **refine**\<`RefinedOutput`\>(`check`, `message`?): `ZodEffects`\<`ZodSet`\<`Value`\>, `RefinedOutput`, `Set`\<`Value`\[`"_input"`\]\>\>

##### Type Parameters

• **RefinedOutput** *extends* `Set`\<`Value`\[`"_output"`\]\>

##### Parameters

• **check**

• **message?**: `string` \| `Partial`\<`Omit`\<[`ZodCustomIssue`](../namespaces/z/interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`) => `Partial`\<`Omit`\<[`ZodCustomIssue`](../namespaces/z/interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

`ZodEffects`\<`ZodSet`\<`Value`\>, `RefinedOutput`, `Set`\<`Value`\[`"_input"`\]\>\>

##### Inherited from

`ZodType`.`refine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:68

#### refine(check, message)

> **refine**(`check`, `message`?): `ZodEffects`\<`ZodSet`\<`Value`\>, `Set`\<`Value`\[`"_output"`\]\>, `Set`\<`Value`\[`"_input"`\]\>\>

##### Parameters

• **check**

• **message?**: `string` \| `Partial`\<`Omit`\<[`ZodCustomIssue`](../namespaces/z/interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`) => `Partial`\<`Omit`\<[`ZodCustomIssue`](../namespaces/z/interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

`ZodEffects`\<`ZodSet`\<`Value`\>, `Set`\<`Value`\[`"_output"`\]\>, `Set`\<`Value`\[`"_input"`\]\>\>

##### Inherited from

`ZodType`.`refine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:69

***

### refinement()

#### refinement(check, refinementData)

> **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): `ZodEffects`\<`ZodSet`\<`Value`\>, `RefinedOutput`, `Set`\<`Value`\[`"_input"`\]\>\>

##### Type Parameters

• **RefinedOutput** *extends* `Set`\<`Value`\[`"_output"`\]\>

##### Parameters

• **check**

• **refinementData**: [`IssueData`](../namespaces/z/type-aliases/IssueData.md) \| (`arg`, `ctx`) => [`IssueData`](../namespaces/z/type-aliases/IssueData.md)

##### Returns

`ZodEffects`\<`ZodSet`\<`Value`\>, `RefinedOutput`, `Set`\<`Value`\[`"_input"`\]\>\>

##### Inherited from

`ZodType`.`refinement`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:70

#### refinement(check, refinementData)

> **refinement**(`check`, `refinementData`): `ZodEffects`\<`ZodSet`\<`Value`\>, `Set`\<`Value`\[`"_output"`\]\>, `Set`\<`Value`\[`"_input"`\]\>\>

##### Parameters

• **check**

• **refinementData**: [`IssueData`](../namespaces/z/type-aliases/IssueData.md) \| (`arg`, `ctx`) => [`IssueData`](../namespaces/z/type-aliases/IssueData.md)

##### Returns

`ZodEffects`\<`ZodSet`\<`Value`\>, `Set`\<`Value`\[`"_output"`\]\>, `Set`\<`Value`\[`"_input"`\]\>\>

##### Inherited from

`ZodType`.`refinement`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:71

***

### safeParse()

> **safeParse**(`data`, `params`?): [`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`Set`\<`Value`\[`"_input"`\]\>, `Set`\<`Value`\[`"_output"`\]\>\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`Set`\<`Value`\[`"_input"`\]\>, `Set`\<`Value`\[`"_output"`\]\>\>

#### Inherited from

`ZodType`.`safeParse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:63

***

### safeParseAsync()

> **safeParseAsync**(`data`, `params`?): `Promise`\<[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`Set`\<`Value`\[`"_input"`\]\>, `Set`\<`Value`\[`"_output"`\]\>\>\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<`Set`\<`Value`\[`"_input"`\]\>, `Set`\<`Value`\[`"_output"`\]\>\>\>

#### Inherited from

`ZodType`.`safeParseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:65

***

### size()

> **size**(`size`, `message`?): `this`

#### Parameters

• **size**: `number`

• **message?**: `ErrMessage`

#### Returns

`this`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:716

***

### superRefine()

#### superRefine(refinement)

> **superRefine**\<`RefinedOutput`\>(`refinement`): `ZodEffects`\<`ZodSet`\<`Value`\>, `RefinedOutput`, `Set`\<`Value`\[`"_input"`\]\>\>

##### Type Parameters

• **RefinedOutput** *extends* `Set`\<`Value`\[`"_output"`\]\>

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodSet`\<`Value`\>, `RefinedOutput`, `Set`\<`Value`\[`"_input"`\]\>\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:73

#### superRefine(refinement)

> **superRefine**(`refinement`): `ZodEffects`\<`ZodSet`\<`Value`\>, `Set`\<`Value`\[`"_output"`\]\>, `Set`\<`Value`\[`"_input"`\]\>\>

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodSet`\<`Value`\>, `Set`\<`Value`\[`"_output"`\]\>, `Set`\<`Value`\[`"_input"`\]\>\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:74

#### superRefine(refinement)

> **superRefine**(`refinement`): `ZodEffects`\<`ZodSet`\<`Value`\>, `Set`\<`Value`\[`"_output"`\]\>, `Set`\<`Value`\[`"_input"`\]\>\>

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodSet`\<`Value`\>, `Set`\<`Value`\[`"_output"`\]\>, `Set`\<`Value`\[`"_input"`\]\>\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:75

***

### transform()

> **transform**\<`NewOut`\>(`transform`): `ZodEffects`\<`ZodSet`\<`Value`\>, `NewOut`, `Set`\<`Value`\[`"_input"`\]\>\>

#### Type Parameters

• **NewOut**

#### Parameters

• **transform**

#### Returns

`ZodEffects`\<`ZodSet`\<`Value`\>, `NewOut`, `Set`\<`Value`\[`"_input"`\]\>\>

#### Inherited from

`ZodType`.`transform`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:84
