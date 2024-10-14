[**@ayka/fiji**](../../../../../README.md) • **Docs**

***

[@ayka/fiji](../../../../../globals.md) / [Zod](../../../README.md) / [z](../README.md) / ZodTuple

# Class: ZodTuple\<T, Rest\>

## Extends

- `ZodType`\<[`OutputTypeOfTupleWithRest`](../type-aliases/OutputTypeOfTupleWithRest.md)\<`T`, `Rest`\>, [`ZodTupleDef`](../interfaces/ZodTupleDef.md)\<`T`, `Rest`\>, [`InputTypeOfTupleWithRest`](../type-aliases/InputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>

## Type Parameters

• **T** *extends* [[`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `...ZodTypeAny[]`] \| [] = [[`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `...ZodTypeAny[]`]

• **Rest** *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md) \| `null` = `null`

## Constructors

### new ZodTuple()

> **new ZodTuple**\<`T`, `Rest`\>(`def`): `ZodTuple`\<`T`, `Rest`\>

#### Parameters

• **def**: [`ZodTupleDef`](../interfaces/ZodTupleDef.md)\<`T`, `Rest`\>

#### Returns

`ZodTuple`\<`T`, `Rest`\>

#### Inherited from

`ZodType`.`constructor`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:76

## Properties

### \_def

> `readonly` **\_def**: [`ZodTupleDef`](../interfaces/ZodTupleDef.md)\<`T`, `Rest`\>

#### Inherited from

`ZodType`.`_def`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:51

***

### \_input

> `readonly` **\_input**: [`InputTypeOfTupleWithRest`](../type-aliases/InputTypeOfTupleWithRest.md)\<`T`, `Rest`\>

#### Inherited from

`ZodType`.`_input`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:50

***

### \_output

> `readonly` **\_output**: [`OutputTypeOfTupleWithRest`](../type-aliases/OutputTypeOfTupleWithRest.md)\<`T`, `Rest`\>

#### Inherited from

`ZodType`.`_output`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:49

***

### \_type

> `readonly` **\_type**: [`OutputTypeOfTupleWithRest`](../type-aliases/OutputTypeOfTupleWithRest.md)\<`T`, `Rest`\>

#### Inherited from

`ZodType`.`_type`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:48

***

### spa()

> **spa**: (`data`, `params`?) => `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`InputTypeOfTupleWithRest`](../type-aliases/InputTypeOfTupleWithRest.md)\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../type-aliases/OutputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>\>

Alias of safeParseAsync

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`InputTypeOfTupleWithRest`](../type-aliases/InputTypeOfTupleWithRest.md)\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../type-aliases/OutputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>\>

#### Inherited from

`ZodType`.`spa`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:67

***

### create()

> `static` **create**: \<`T_1`\>(`schemas`, `params`?) => `ZodTuple`\<`T_1`, `null`\>

#### Type Parameters

• **T_1** *extends* [] \| [[`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `...ZodTypeAny[]`]

#### Parameters

• **schemas**: `T_1`

• **params?**: [`RawCreateParams`](../type-aliases/RawCreateParams.md)

#### Returns

`ZodTuple`\<`T_1`, `null`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:670

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

### items

> `get` **items**(): `T`

#### Returns

`T`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:668

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

> **\_parse**(`input`): [`ParseReturnType`](../type-aliases/ParseReturnType.md)\<[`OutputTypeOfTupleWithRest`](../type-aliases/OutputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>

#### Parameters

• **input**: [`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`ParseReturnType`](../type-aliases/ParseReturnType.md)\<[`OutputTypeOfTupleWithRest`](../type-aliases/OutputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>

#### Overrides

`ZodType`.`_parse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:667

***

### \_parseAsync()

> **\_parseAsync**(`input`): [`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<[`OutputTypeOfTupleWithRest`](../type-aliases/OutputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>

#### Parameters

• **input**: [`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<[`OutputTypeOfTupleWithRest`](../type-aliases/OutputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>

#### Inherited from

`ZodType`.`_parseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:61

***

### \_parseSync()

> **\_parseSync**(`input`): [`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<[`OutputTypeOfTupleWithRest`](../type-aliases/OutputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>

#### Parameters

• **input**: [`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<[`OutputTypeOfTupleWithRest`](../type-aliases/OutputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>

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

> **\_refinement**(`refinement`): `ZodEffects`\<`ZodTuple`\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../type-aliases/OutputTypeOfTupleWithRest.md)\<`T`, `Rest`\>, [`InputTypeOfTupleWithRest`](../type-aliases/InputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>

#### Parameters

• **refinement**

#### Returns

`ZodEffects`\<`ZodTuple`\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../type-aliases/OutputTypeOfTupleWithRest.md)\<`T`, `Rest`\>, [`InputTypeOfTupleWithRest`](../type-aliases/InputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>

#### Inherited from

`ZodType`.`_refinement`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:72

***

### and()

> **and**\<`T`\>(`incoming`): `ZodIntersection`\<`ZodTuple`\<`T`, `Rest`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

• **incoming**: `T`

#### Returns

`ZodIntersection`\<`ZodTuple`\<`T`, `Rest`\>, `T`\>

#### Inherited from

`ZodType`.`and`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:83

***

### array()

> **array**(): `ZodArray`\<`ZodTuple`\<`T`, `Rest`\>, `"many"`\>

#### Returns

`ZodArray`\<`ZodTuple`\<`T`, `Rest`\>, `"many"`\>

#### Inherited from

`ZodType`.`array`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:80

***

### brand()

> **brand**\<`B`\>(`brand`?): `ZodBranded`\<`ZodTuple`\<`T`, `Rest`\>, `B`\>

#### Type Parameters

• **B** *extends* `string` \| `number` \| `symbol`

#### Parameters

• **brand?**: `B`

#### Returns

`ZodBranded`\<`ZodTuple`\<`T`, `Rest`\>, `B`\>

#### Inherited from

`ZodType`.`brand`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:87

***

### catch()

#### catch(def)

> **catch**(`def`): `ZodCatch`\<`ZodTuple`\<`T`, `Rest`\>\>

##### Parameters

• **def**: [`OutputTypeOfTupleWithRest`](../type-aliases/OutputTypeOfTupleWithRest.md)\<`T`, `Rest`\>

##### Returns

`ZodCatch`\<`ZodTuple`\<`T`, `Rest`\>\>

##### Inherited from

`ZodType`.`catch`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:88

#### catch(def)

> **catch**(`def`): `ZodCatch`\<`ZodTuple`\<`T`, `Rest`\>\>

##### Parameters

• **def**

##### Returns

`ZodCatch`\<`ZodTuple`\<`T`, `Rest`\>\>

##### Inherited from

`ZodType`.`catch`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:89

***

### default()

#### default(def)

> **default**(`def`): `ZodDefault`\<`ZodTuple`\<`T`, `Rest`\>\>

##### Parameters

• **def**: `noUndefined`\<[`InputTypeOfTupleWithRest`](../type-aliases/InputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>

##### Returns

`ZodDefault`\<`ZodTuple`\<`T`, `Rest`\>\>

##### Inherited from

`ZodType`.`default`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:85

#### default(def)

> **default**(`def`): `ZodDefault`\<`ZodTuple`\<`T`, `Rest`\>\>

##### Parameters

• **def**

##### Returns

`ZodDefault`\<`ZodTuple`\<`T`, `Rest`\>\>

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

> **nullable**(): `ZodNullable`\<`ZodTuple`\<`T`, `Rest`\>\>

#### Returns

`ZodNullable`\<`ZodTuple`\<`T`, `Rest`\>\>

#### Inherited from

`ZodType`.`nullable`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:78

***

### nullish()

> **nullish**(): `ZodOptional`\<`ZodNullable`\<`ZodTuple`\<`T`, `Rest`\>\>\>

#### Returns

`ZodOptional`\<`ZodNullable`\<`ZodTuple`\<`T`, `Rest`\>\>\>

#### Inherited from

`ZodType`.`nullish`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:79

***

### optional()

> **optional**(): `ZodOptional`\<`ZodTuple`\<`T`, `Rest`\>\>

#### Returns

`ZodOptional`\<`ZodTuple`\<`T`, `Rest`\>\>

#### Inherited from

`ZodType`.`optional`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:77

***

### or()

> **or**\<`T`\>(`option`): `ZodUnion`\<[`ZodTuple`\<`T`, `Rest`\>, `T`]\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

• **option**: `T`

#### Returns

`ZodUnion`\<[`ZodTuple`\<`T`, `Rest`\>, `T`]\>

#### Inherited from

`ZodType`.`or`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:82

***

### parse()

> **parse**(`data`, `params`?): [`OutputTypeOfTupleWithRest`](../type-aliases/OutputTypeOfTupleWithRest.md)\<`T`, `Rest`\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

[`OutputTypeOfTupleWithRest`](../type-aliases/OutputTypeOfTupleWithRest.md)\<`T`, `Rest`\>

#### Inherited from

`ZodType`.`parse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:62

***

### parseAsync()

> **parseAsync**(`data`, `params`?): `Promise`\<[`OutputTypeOfTupleWithRest`](../type-aliases/OutputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`OutputTypeOfTupleWithRest`](../type-aliases/OutputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>

#### Inherited from

`ZodType`.`parseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:64

***

### pipe()

> **pipe**\<`T`\>(`target`): `ZodPipeline`\<`ZodTuple`\<`T`, `Rest`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

• **target**: `T`

#### Returns

`ZodPipeline`\<`ZodTuple`\<`T`, `Rest`\>, `T`\>

#### Inherited from

`ZodType`.`pipe`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:94

***

### promise()

> **promise**(): `ZodPromise`\<`ZodTuple`\<`T`, `Rest`\>\>

#### Returns

`ZodPromise`\<`ZodTuple`\<`T`, `Rest`\>\>

#### Inherited from

`ZodType`.`promise`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:81

***

### readonly()

> **readonly**(): `ZodReadonly`\<`ZodTuple`\<`T`, `Rest`\>\>

#### Returns

`ZodReadonly`\<`ZodTuple`\<`T`, `Rest`\>\>

#### Inherited from

`ZodType`.`readonly`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:95

***

### refine()

#### refine(check, message)

> **refine**\<`RefinedOutput`\>(`check`, `message`?): `ZodEffects`\<`ZodTuple`\<`T`, `Rest`\>, `RefinedOutput`, [`InputTypeOfTupleWithRest`](../type-aliases/InputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>

##### Type Parameters

• **RefinedOutput** *extends* [...AssertArray\<\{ \[k in string \| number \| symbol\]: T\[k\<k\>\] extends ZodType\<any, any, any\> ? any\[any\]\["\_output"\] : never \}\>\[\], `...any[]`] \| `any`[] & \{ \[k in string \| number \| symbol\]: T\[k\<k\>\] extends ZodType\<any, any, any\> ? any\[any\]\["\_output"\] : never \}

##### Parameters

• **check**

• **message?**: `string` \| `Partial`\<`Omit`\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`) => `Partial`\<`Omit`\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

`ZodEffects`\<`ZodTuple`\<`T`, `Rest`\>, `RefinedOutput`, [`InputTypeOfTupleWithRest`](../type-aliases/InputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>

##### Inherited from

`ZodType`.`refine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:68

#### refine(check, message)

> **refine**(`check`, `message`?): `ZodEffects`\<`ZodTuple`\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../type-aliases/OutputTypeOfTupleWithRest.md)\<`T`, `Rest`\>, [`InputTypeOfTupleWithRest`](../type-aliases/InputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>

##### Parameters

• **check**

• **message?**: `string` \| `Partial`\<`Omit`\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`) => `Partial`\<`Omit`\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

`ZodEffects`\<`ZodTuple`\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../type-aliases/OutputTypeOfTupleWithRest.md)\<`T`, `Rest`\>, [`InputTypeOfTupleWithRest`](../type-aliases/InputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>

##### Inherited from

`ZodType`.`refine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:69

***

### refinement()

#### refinement(check, refinementData)

> **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): `ZodEffects`\<`ZodTuple`\<`T`, `Rest`\>, `RefinedOutput`, [`InputTypeOfTupleWithRest`](../type-aliases/InputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>

##### Type Parameters

• **RefinedOutput** *extends* [...AssertArray\<\{ \[k in string \| number \| symbol\]: T\[k\<k\>\] extends ZodType\<any, any, any\> ? any\[any\]\["\_output"\] : never \}\>\[\], `...any[]`] \| `any`[] & \{ \[k in string \| number \| symbol\]: T\[k\<k\>\] extends ZodType\<any, any, any\> ? any\[any\]\["\_output"\] : never \}

##### Parameters

• **check**

• **refinementData**: [`IssueData`](../type-aliases/IssueData.md) \| (`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md)

##### Returns

`ZodEffects`\<`ZodTuple`\<`T`, `Rest`\>, `RefinedOutput`, [`InputTypeOfTupleWithRest`](../type-aliases/InputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>

##### Inherited from

`ZodType`.`refinement`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:70

#### refinement(check, refinementData)

> **refinement**(`check`, `refinementData`): `ZodEffects`\<`ZodTuple`\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../type-aliases/OutputTypeOfTupleWithRest.md)\<`T`, `Rest`\>, [`InputTypeOfTupleWithRest`](../type-aliases/InputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>

##### Parameters

• **check**

• **refinementData**: [`IssueData`](../type-aliases/IssueData.md) \| (`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md)

##### Returns

`ZodEffects`\<`ZodTuple`\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../type-aliases/OutputTypeOfTupleWithRest.md)\<`T`, `Rest`\>, [`InputTypeOfTupleWithRest`](../type-aliases/InputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>

##### Inherited from

`ZodType`.`refinement`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:71

***

### rest()

> **rest**\<`Rest`\>(`rest`): `ZodTuple`\<`T`, `Rest`\>

#### Type Parameters

• **Rest** *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

• **rest**: `Rest`

#### Returns

`ZodTuple`\<`T`, `Rest`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:669

***

### safeParse()

> **safeParse**(`data`, `params`?): [`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`InputTypeOfTupleWithRest`](../type-aliases/InputTypeOfTupleWithRest.md)\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../type-aliases/OutputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`InputTypeOfTupleWithRest`](../type-aliases/InputTypeOfTupleWithRest.md)\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../type-aliases/OutputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>

#### Inherited from

`ZodType`.`safeParse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:63

***

### safeParseAsync()

> **safeParseAsync**(`data`, `params`?): `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`InputTypeOfTupleWithRest`](../type-aliases/InputTypeOfTupleWithRest.md)\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../type-aliases/OutputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`InputTypeOfTupleWithRest`](../type-aliases/InputTypeOfTupleWithRest.md)\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../type-aliases/OutputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>\>

#### Inherited from

`ZodType`.`safeParseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:65

***

### superRefine()

#### superRefine(refinement)

> **superRefine**\<`RefinedOutput`\>(`refinement`): `ZodEffects`\<`ZodTuple`\<`T`, `Rest`\>, `RefinedOutput`, [`InputTypeOfTupleWithRest`](../type-aliases/InputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>

##### Type Parameters

• **RefinedOutput** *extends* [...AssertArray\<\{ \[k in string \| number \| symbol\]: T\[k\<k\>\] extends ZodType\<any, any, any\> ? any\[any\]\["\_output"\] : never \}\>\[\], `...any[]`] \| `any`[] & \{ \[k in string \| number \| symbol\]: T\[k\<k\>\] extends ZodType\<any, any, any\> ? any\[any\]\["\_output"\] : never \}

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodTuple`\<`T`, `Rest`\>, `RefinedOutput`, [`InputTypeOfTupleWithRest`](../type-aliases/InputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:73

#### superRefine(refinement)

> **superRefine**(`refinement`): `ZodEffects`\<`ZodTuple`\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../type-aliases/OutputTypeOfTupleWithRest.md)\<`T`, `Rest`\>, [`InputTypeOfTupleWithRest`](../type-aliases/InputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodTuple`\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../type-aliases/OutputTypeOfTupleWithRest.md)\<`T`, `Rest`\>, [`InputTypeOfTupleWithRest`](../type-aliases/InputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:74

#### superRefine(refinement)

> **superRefine**(`refinement`): `ZodEffects`\<`ZodTuple`\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../type-aliases/OutputTypeOfTupleWithRest.md)\<`T`, `Rest`\>, [`InputTypeOfTupleWithRest`](../type-aliases/InputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodTuple`\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../type-aliases/OutputTypeOfTupleWithRest.md)\<`T`, `Rest`\>, [`InputTypeOfTupleWithRest`](../type-aliases/InputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:75

***

### transform()

> **transform**\<`NewOut`\>(`transform`): `ZodEffects`\<`ZodTuple`\<`T`, `Rest`\>, `NewOut`, [`InputTypeOfTupleWithRest`](../type-aliases/InputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>

#### Type Parameters

• **NewOut**

#### Parameters

• **transform**

#### Returns

`ZodEffects`\<`ZodTuple`\<`T`, `Rest`\>, `NewOut`, [`InputTypeOfTupleWithRest`](../type-aliases/InputTypeOfTupleWithRest.md)\<`T`, `Rest`\>\>

#### Inherited from

`ZodType`.`transform`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:84
