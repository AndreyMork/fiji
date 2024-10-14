[**@ayka/fiji**](../../../../../README.md) • **Docs**

***

[@ayka/fiji](../../../../../globals.md) / [Zod](../../../README.md) / [z](../README.md) / ZodDiscriminatedUnion

# Class: ZodDiscriminatedUnion\<Discriminator, Options\>

## Extends

- `ZodType`\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`ZodDiscriminatedUnionDef`](../interfaces/ZodDiscriminatedUnionDef.md)\<`Discriminator`, `Options`\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

## Type Parameters

• **Discriminator** *extends* `string`

• **Options** *extends* [`ZodDiscriminatedUnionOption`](../type-aliases/ZodDiscriminatedUnionOption.md)\<`Discriminator`\>[]

## Constructors

### new ZodDiscriminatedUnion()

> **new ZodDiscriminatedUnion**\<`Discriminator`, `Options`\>(`def`): `ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>

#### Parameters

• **def**: [`ZodDiscriminatedUnionDef`](../interfaces/ZodDiscriminatedUnionDef.md)\<`Discriminator`, `Options`\>

#### Returns

`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>

#### Inherited from

`ZodType`.`constructor`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:76

## Properties

### \_def

> `readonly` **\_def**: [`ZodDiscriminatedUnionDef`](../interfaces/ZodDiscriminatedUnionDef.md)\<`Discriminator`, `Options`\>

#### Inherited from

`ZodType`.`_def`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:51

***

### \_input

> `readonly` **\_input**: [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>

#### Inherited from

`ZodType`.`_input`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:50

***

### \_output

> `readonly` **\_output**: [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>

#### Inherited from

`ZodType`.`_output`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:49

***

### \_type

> `readonly` **\_type**: [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>

#### Inherited from

`ZodType`.`_type`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:48

***

### spa()

> **spa**: (`data`, `params`?) => `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>\>

Alias of safeParseAsync

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>\>

#### Inherited from

`ZodType`.`spa`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:67

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

### discriminator

> `get` **discriminator**(): `Discriminator`

#### Returns

`Discriminator`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:622

***

### options

> `get` **options**(): `Options`

#### Returns

`Options`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:623

***

### optionsMap

> `get` **optionsMap**(): `Map`\<[`Primitive`](../type-aliases/Primitive.md), [`ZodDiscriminatedUnionOption`](../type-aliases/ZodDiscriminatedUnionOption.md)\<`any`\>\>

#### Returns

`Map`\<[`Primitive`](../type-aliases/Primitive.md), [`ZodDiscriminatedUnionOption`](../type-aliases/ZodDiscriminatedUnionOption.md)\<`any`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:624

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

> **\_parse**(`input`): [`ParseReturnType`](../type-aliases/ParseReturnType.md)\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

#### Parameters

• **input**: [`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`ParseReturnType`](../type-aliases/ParseReturnType.md)\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

#### Overrides

`ZodType`.`_parse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:621

***

### \_parseAsync()

> **\_parseAsync**(`input`): [`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

#### Parameters

• **input**: [`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

#### Inherited from

`ZodType`.`_parseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:61

***

### \_parseSync()

> **\_parseSync**(`input`): [`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

#### Parameters

• **input**: [`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

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

> **\_refinement**(`refinement`): `ZodEffects`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

#### Parameters

• **refinement**

#### Returns

`ZodEffects`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

#### Inherited from

`ZodType`.`_refinement`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:72

***

### and()

> **and**\<`T`\>(`incoming`): `ZodIntersection`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

• **incoming**: `T`

#### Returns

`ZodIntersection`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `T`\>

#### Inherited from

`ZodType`.`and`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:83

***

### array()

> **array**(): `ZodArray`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `"many"`\>

#### Returns

`ZodArray`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `"many"`\>

#### Inherited from

`ZodType`.`array`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:80

***

### brand()

> **brand**\<`B`\>(`brand`?): `ZodBranded`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `B`\>

#### Type Parameters

• **B** *extends* `string` \| `number` \| `symbol`

#### Parameters

• **brand?**: `B`

#### Returns

`ZodBranded`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `B`\>

#### Inherited from

`ZodType`.`brand`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:87

***

### catch()

#### catch(def)

> **catch**(`def`): `ZodCatch`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

##### Parameters

• **def**: [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>

##### Returns

`ZodCatch`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

##### Inherited from

`ZodType`.`catch`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:88

#### catch(def)

> **catch**(`def`): `ZodCatch`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

##### Parameters

• **def**

##### Returns

`ZodCatch`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

##### Inherited from

`ZodType`.`catch`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:89

***

### default()

#### default(def)

> **default**(`def`): `ZodDefault`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

##### Parameters

• **def**: `noUndefined`\<[`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Returns

`ZodDefault`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

##### Inherited from

`ZodType`.`default`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:85

#### default(def)

> **default**(`def`): `ZodDefault`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

##### Parameters

• **def**

##### Returns

`ZodDefault`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

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

> **nullable**(): `ZodNullable`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

#### Returns

`ZodNullable`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

#### Inherited from

`ZodType`.`nullable`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:78

***

### nullish()

> **nullish**(): `ZodOptional`\<`ZodNullable`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>\>

#### Returns

`ZodOptional`\<`ZodNullable`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>\>

#### Inherited from

`ZodType`.`nullish`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:79

***

### optional()

> **optional**(): `ZodOptional`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

#### Returns

`ZodOptional`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

#### Inherited from

`ZodType`.`optional`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:77

***

### or()

> **or**\<`T`\>(`option`): `ZodUnion`\<[`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `T`]\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

• **option**: `T`

#### Returns

`ZodUnion`\<[`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `T`]\>

#### Inherited from

`ZodType`.`or`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:82

***

### parse()

> **parse**(`data`, `params`?): [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>

#### Inherited from

`ZodType`.`parse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:62

***

### parseAsync()

> **parseAsync**(`data`, `params`?): `Promise`\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

#### Inherited from

`ZodType`.`parseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:64

***

### pipe()

> **pipe**\<`T`\>(`target`): `ZodPipeline`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

• **target**: `T`

#### Returns

`ZodPipeline`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `T`\>

#### Inherited from

`ZodType`.`pipe`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:94

***

### promise()

> **promise**(): `ZodPromise`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

#### Returns

`ZodPromise`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

#### Inherited from

`ZodType`.`promise`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:81

***

### readonly()

> **readonly**(): `ZodReadonly`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

#### Returns

`ZodReadonly`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

#### Inherited from

`ZodType`.`readonly`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:95

***

### refine()

#### refine(check, message)

> **refine**\<`RefinedOutput`\>(`check`, `message`?): `ZodEffects`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `RefinedOutput`, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Type Parameters

• **RefinedOutput** *extends* \{ \[k in string \| number\]: addQuestionMarks\<baseObjectOutputType\<\{ \[key in string\]: ZodTypeAny \} & ZodRawShape\>, any\>\[k\] \}

##### Parameters

• **check**

• **message?**: `string` \| `Partial`\<`Omit`\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`) => `Partial`\<`Omit`\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

`ZodEffects`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `RefinedOutput`, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Inherited from

`ZodType`.`refine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:68

#### refine(check, message)

> **refine**(`check`, `message`?): `ZodEffects`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Parameters

• **check**

• **message?**: `string` \| `Partial`\<`Omit`\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`) => `Partial`\<`Omit`\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

`ZodEffects`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Inherited from

`ZodType`.`refine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:69

***

### refinement()

#### refinement(check, refinementData)

> **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): `ZodEffects`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `RefinedOutput`, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Type Parameters

• **RefinedOutput** *extends* \{ \[k in string \| number\]: addQuestionMarks\<baseObjectOutputType\<\{ \[key in string\]: ZodTypeAny \} & ZodRawShape\>, any\>\[k\] \}

##### Parameters

• **check**

• **refinementData**: [`IssueData`](../type-aliases/IssueData.md) \| (`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md)

##### Returns

`ZodEffects`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `RefinedOutput`, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Inherited from

`ZodType`.`refinement`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:70

#### refinement(check, refinementData)

> **refinement**(`check`, `refinementData`): `ZodEffects`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Parameters

• **check**

• **refinementData**: [`IssueData`](../type-aliases/IssueData.md) \| (`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md)

##### Returns

`ZodEffects`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Inherited from

`ZodType`.`refinement`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:71

***

### safeParse()

> **safeParse**(`data`, `params`?): [`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

#### Inherited from

`ZodType`.`safeParse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:63

***

### safeParseAsync()

> **safeParseAsync**(`data`, `params`?): `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>\>

#### Inherited from

`ZodType`.`safeParseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:65

***

### superRefine()

#### superRefine(refinement)

> **superRefine**\<`RefinedOutput`\>(`refinement`): `ZodEffects`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `RefinedOutput`, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Type Parameters

• **RefinedOutput** *extends* \{ \[k in string \| number\]: addQuestionMarks\<baseObjectOutputType\<\{ \[key in string\]: ZodTypeAny \} & ZodRawShape\>, any\>\[k\] \}

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `RefinedOutput`, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:73

#### superRefine(refinement)

> **superRefine**(`refinement`): `ZodEffects`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:74

#### superRefine(refinement)

> **superRefine**(`refinement`): `ZodEffects`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:75

***

### transform()

> **transform**\<`NewOut`\>(`transform`): `ZodEffects`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `NewOut`, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

#### Type Parameters

• **NewOut**

#### Parameters

• **transform**

#### Returns

`ZodEffects`\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `NewOut`, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

#### Inherited from

`ZodType`.`transform`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:84

***

### create()

> `static` **create**\<`Discriminator`, `Types`\>(`discriminator`, `options`, `params`?): `ZodDiscriminatedUnion`\<`Discriminator`, `Types`\>

The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
However, it only allows a union of objects, all of which need to share a discriminator property. This property must
have a different value for each object in the union.

#### Type Parameters

• **Discriminator** *extends* `string`

• **Types** *extends* [[`ZodDiscriminatedUnionOption`](../type-aliases/ZodDiscriminatedUnionOption.md)\<`Discriminator`\>, `...ZodDiscriminatedUnionOption<Discriminator>[]`]

#### Parameters

• **discriminator**: `Discriminator`

the name of the discriminator property

• **options**: `Types`

• **params?**: [`RawCreateParams`](../type-aliases/RawCreateParams.md)

#### Returns

`ZodDiscriminatedUnion`\<`Discriminator`, `Types`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:633
