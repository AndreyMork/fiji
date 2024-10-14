[**@ayka/fiji**](../../../README.md) • **Docs**

***

[@ayka/fiji](../../../globals.md) / [Zod](../README.md) / ZodFunction

# Class: ZodFunction\<Args, Returns\>

## Extends

- `ZodType`\<[`OuterTypeOfFunction`](../namespaces/z/type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`ZodFunctionDef`](../namespaces/z/interfaces/ZodFunctionDef.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../namespaces/z/type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

## Type Parameters

• **Args** *extends* `ZodTuple`\<`any`, `any`\>

• **Returns** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

## Constructors

### new ZodFunction()

> **new ZodFunction**\<`Args`, `Returns`\>(`def`): `ZodFunction`\<`Args`, `Returns`\>

#### Parameters

• **def**: [`ZodFunctionDef`](../namespaces/z/interfaces/ZodFunctionDef.md)\<`Args`, `Returns`\>

#### Returns

`ZodFunction`\<`Args`, `Returns`\>

#### Inherited from

`ZodType`.`constructor`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:76

## Properties

### \_def

> `readonly` **\_def**: [`ZodFunctionDef`](../namespaces/z/interfaces/ZodFunctionDef.md)\<`Args`, `Returns`\>

#### Inherited from

`ZodType`.`_def`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:51

***

### \_input

> `readonly` **\_input**: [`InnerTypeOfFunction`](../namespaces/z/type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>

#### Inherited from

`ZodType`.`_input`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:50

***

### \_output

> `readonly` **\_output**: [`OuterTypeOfFunction`](../namespaces/z/type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>

#### Inherited from

`ZodType`.`_output`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:49

***

### \_type

> `readonly` **\_type**: [`OuterTypeOfFunction`](../namespaces/z/type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>

#### Inherited from

`ZodType`.`_type`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:48

***

### spa()

> **spa**: (`data`, `params`?) => `Promise`\<[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<[`InnerTypeOfFunction`](../namespaces/z/type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../namespaces/z/type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>\>

Alias of safeParseAsync

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<[`InnerTypeOfFunction`](../namespaces/z/type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../namespaces/z/type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>\>

#### Inherited from

`ZodType`.`spa`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:67

***

### validate()

> **validate**: \<`F`\>(`func`) => `ReturnType`\<`F`\> *extends* `Returns`\[`"_output"`\] ? (...`args`) => `ReturnType`\<`ReturnType`\<`F`\>\> : [`OuterTypeOfFunction`](../namespaces/z/type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>

#### Type Parameters

• **F** *extends* (...`args`) => `Returns`\[`"_input"`\]

#### Parameters

• **func**: `F`

#### Returns

`ReturnType`\<`F`\> *extends* `Returns`\[`"_output"`\] ? (...`args`) => `ReturnType`\<`ReturnType`\<`F`\>\> : [`OuterTypeOfFunction`](../namespaces/z/type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:735

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

> **\_parse**(`input`): [`ParseReturnType`](../namespaces/z/type-aliases/ParseReturnType.md)\<`any`\>

#### Parameters

• **input**: [`ParseInput`](../namespaces/z/type-aliases/ParseInput.md)

#### Returns

[`ParseReturnType`](../namespaces/z/type-aliases/ParseReturnType.md)\<`any`\>

#### Overrides

`ZodType`.`_parse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:728

***

### \_parseAsync()

> **\_parseAsync**(`input`): [`AsyncParseReturnType`](../namespaces/z/type-aliases/AsyncParseReturnType.md)\<[`OuterTypeOfFunction`](../namespaces/z/type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>

#### Parameters

• **input**: [`ParseInput`](../namespaces/z/type-aliases/ParseInput.md)

#### Returns

[`AsyncParseReturnType`](../namespaces/z/type-aliases/AsyncParseReturnType.md)\<[`OuterTypeOfFunction`](../namespaces/z/type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

`ZodType`.`_parseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:61

***

### \_parseSync()

> **\_parseSync**(`input`): [`SyncParseReturnType`](../namespaces/z/type-aliases/SyncParseReturnType.md)\<[`OuterTypeOfFunction`](../namespaces/z/type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>

#### Parameters

• **input**: [`ParseInput`](../namespaces/z/type-aliases/ParseInput.md)

#### Returns

[`SyncParseReturnType`](../namespaces/z/type-aliases/SyncParseReturnType.md)\<[`OuterTypeOfFunction`](../namespaces/z/type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>

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

> **\_refinement**(`refinement`): `ZodEffects`\<`ZodFunction`\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../namespaces/z/type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../namespaces/z/type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

#### Parameters

• **refinement**

#### Returns

`ZodEffects`\<`ZodFunction`\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../namespaces/z/type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../namespaces/z/type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

`ZodType`.`_refinement`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:72

***

### and()

> **and**\<`T`\>(`incoming`): `ZodIntersection`\<`ZodFunction`\<`Args`, `Returns`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

• **incoming**: `T`

#### Returns

`ZodIntersection`\<`ZodFunction`\<`Args`, `Returns`\>, `T`\>

#### Inherited from

`ZodType`.`and`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:83

***

### args()

> **args**\<`Items`\>(...`items`): `ZodFunction`\<`ZodTuple`\<`Items`, `ZodUnknown`\>, `Returns`\>

#### Type Parameters

• **Items** *extends* [] \| [[`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), `...ZodTypeAny[]`]

#### Parameters

• ...**items**: `Items`

#### Returns

`ZodFunction`\<`ZodTuple`\<`Items`, `ZodUnknown`\>, `Returns`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:731

***

### array()

> **array**(): `ZodArray`\<`ZodFunction`\<`Args`, `Returns`\>, `"many"`\>

#### Returns

`ZodArray`\<`ZodFunction`\<`Args`, `Returns`\>, `"many"`\>

#### Inherited from

`ZodType`.`array`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:80

***

### brand()

> **brand**\<`B`\>(`brand`?): `ZodBranded`\<`ZodFunction`\<`Args`, `Returns`\>, `B`\>

#### Type Parameters

• **B** *extends* `string` \| `number` \| `symbol`

#### Parameters

• **brand?**: `B`

#### Returns

`ZodBranded`\<`ZodFunction`\<`Args`, `Returns`\>, `B`\>

#### Inherited from

`ZodType`.`brand`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:87

***

### catch()

#### catch(def)

> **catch**(`def`): `ZodCatch`\<`ZodFunction`\<`Args`, `Returns`\>\>

##### Parameters

• **def**: [`OuterTypeOfFunction`](../namespaces/z/type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>

##### Returns

`ZodCatch`\<`ZodFunction`\<`Args`, `Returns`\>\>

##### Inherited from

`ZodType`.`catch`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:88

#### catch(def)

> **catch**(`def`): `ZodCatch`\<`ZodFunction`\<`Args`, `Returns`\>\>

##### Parameters

• **def**

##### Returns

`ZodCatch`\<`ZodFunction`\<`Args`, `Returns`\>\>

##### Inherited from

`ZodType`.`catch`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:89

***

### default()

#### default(def)

> **default**(`def`): `ZodDefault`\<`ZodFunction`\<`Args`, `Returns`\>\>

##### Parameters

• **def**: `noUndefined`\<[`InnerTypeOfFunction`](../namespaces/z/type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Returns

`ZodDefault`\<`ZodFunction`\<`Args`, `Returns`\>\>

##### Inherited from

`ZodType`.`default`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:85

#### default(def)

> **default**(`def`): `ZodDefault`\<`ZodFunction`\<`Args`, `Returns`\>\>

##### Parameters

• **def**

##### Returns

`ZodDefault`\<`ZodFunction`\<`Args`, `Returns`\>\>

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

### implement()

> **implement**\<`F`\>(`func`): `ReturnType`\<`F`\> *extends* `Returns`\[`"_output"`\] ? (...`args`) => `ReturnType`\<`ReturnType`\<`F`\>\> : [`OuterTypeOfFunction`](../namespaces/z/type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>

#### Type Parameters

• **F** *extends* (...`args`) => `Returns`\[`"_input"`\]

#### Parameters

• **func**: `F`

#### Returns

`ReturnType`\<`F`\> *extends* `Returns`\[`"_output"`\] ? (...`args`) => `ReturnType`\<`ReturnType`\<`F`\>\> : [`OuterTypeOfFunction`](../namespaces/z/type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:733

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

> **nullable**(): `ZodNullable`\<`ZodFunction`\<`Args`, `Returns`\>\>

#### Returns

`ZodNullable`\<`ZodFunction`\<`Args`, `Returns`\>\>

#### Inherited from

`ZodType`.`nullable`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:78

***

### nullish()

> **nullish**(): `ZodOptional`\<`ZodNullable`\<`ZodFunction`\<`Args`, `Returns`\>\>\>

#### Returns

`ZodOptional`\<`ZodNullable`\<`ZodFunction`\<`Args`, `Returns`\>\>\>

#### Inherited from

`ZodType`.`nullish`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:79

***

### optional()

> **optional**(): `ZodOptional`\<`ZodFunction`\<`Args`, `Returns`\>\>

#### Returns

`ZodOptional`\<`ZodFunction`\<`Args`, `Returns`\>\>

#### Inherited from

`ZodType`.`optional`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:77

***

### or()

> **or**\<`T`\>(`option`): `ZodUnion`\<[`ZodFunction`\<`Args`, `Returns`\>, `T`]\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

• **option**: `T`

#### Returns

`ZodUnion`\<[`ZodFunction`\<`Args`, `Returns`\>, `T`]\>

#### Inherited from

`ZodType`.`or`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:82

***

### parameters()

> **parameters**(): `Args`

#### Returns

`Args`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:729

***

### parse()

> **parse**(`data`, `params`?): [`OuterTypeOfFunction`](../namespaces/z/type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

[`OuterTypeOfFunction`](../namespaces/z/type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>

#### Inherited from

`ZodType`.`parse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:62

***

### parseAsync()

> **parseAsync**(`data`, `params`?): `Promise`\<[`OuterTypeOfFunction`](../namespaces/z/type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`OuterTypeOfFunction`](../namespaces/z/type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

`ZodType`.`parseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:64

***

### pipe()

> **pipe**\<`T`\>(`target`): `ZodPipeline`\<`ZodFunction`\<`Args`, `Returns`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

• **target**: `T`

#### Returns

`ZodPipeline`\<`ZodFunction`\<`Args`, `Returns`\>, `T`\>

#### Inherited from

`ZodType`.`pipe`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:94

***

### promise()

> **promise**(): `ZodPromise`\<`ZodFunction`\<`Args`, `Returns`\>\>

#### Returns

`ZodPromise`\<`ZodFunction`\<`Args`, `Returns`\>\>

#### Inherited from

`ZodType`.`promise`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:81

***

### readonly()

> **readonly**(): `ZodReadonly`\<`ZodFunction`\<`Args`, `Returns`\>\>

#### Returns

`ZodReadonly`\<`ZodFunction`\<`Args`, `Returns`\>\>

#### Inherited from

`ZodType`.`readonly`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:95

***

### refine()

#### refine(check, message)

> **refine**\<`RefinedOutput`\>(`check`, `message`?): `ZodEffects`\<`ZodFunction`\<`Args`, `Returns`\>, `RefinedOutput`, [`InnerTypeOfFunction`](../namespaces/z/type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Type Parameters

• **RefinedOutput** *extends* (...`args`) => `Returns`\[`"_output"`\]

##### Parameters

• **check**

• **message?**: `string` \| `Partial`\<`Omit`\<[`ZodCustomIssue`](../namespaces/z/interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`) => `Partial`\<`Omit`\<[`ZodCustomIssue`](../namespaces/z/interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

`ZodEffects`\<`ZodFunction`\<`Args`, `Returns`\>, `RefinedOutput`, [`InnerTypeOfFunction`](../namespaces/z/type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

`ZodType`.`refine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:68

#### refine(check, message)

> **refine**(`check`, `message`?): `ZodEffects`\<`ZodFunction`\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../namespaces/z/type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../namespaces/z/type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Parameters

• **check**

• **message?**: `string` \| `Partial`\<`Omit`\<[`ZodCustomIssue`](../namespaces/z/interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`) => `Partial`\<`Omit`\<[`ZodCustomIssue`](../namespaces/z/interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

`ZodEffects`\<`ZodFunction`\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../namespaces/z/type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../namespaces/z/type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

`ZodType`.`refine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:69

***

### refinement()

#### refinement(check, refinementData)

> **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): `ZodEffects`\<`ZodFunction`\<`Args`, `Returns`\>, `RefinedOutput`, [`InnerTypeOfFunction`](../namespaces/z/type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Type Parameters

• **RefinedOutput** *extends* (...`args`) => `Returns`\[`"_output"`\]

##### Parameters

• **check**

• **refinementData**: [`IssueData`](../namespaces/z/type-aliases/IssueData.md) \| (`arg`, `ctx`) => [`IssueData`](../namespaces/z/type-aliases/IssueData.md)

##### Returns

`ZodEffects`\<`ZodFunction`\<`Args`, `Returns`\>, `RefinedOutput`, [`InnerTypeOfFunction`](../namespaces/z/type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

`ZodType`.`refinement`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:70

#### refinement(check, refinementData)

> **refinement**(`check`, `refinementData`): `ZodEffects`\<`ZodFunction`\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../namespaces/z/type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../namespaces/z/type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Parameters

• **check**

• **refinementData**: [`IssueData`](../namespaces/z/type-aliases/IssueData.md) \| (`arg`, `ctx`) => [`IssueData`](../namespaces/z/type-aliases/IssueData.md)

##### Returns

`ZodEffects`\<`ZodFunction`\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../namespaces/z/type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../namespaces/z/type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

`ZodType`.`refinement`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:71

***

### returns()

> **returns**\<`NewReturnType`\>(`returnType`): `ZodFunction`\<`Args`, `NewReturnType`\>

#### Type Parameters

• **NewReturnType** *extends* `ZodType`\<`any`, `any`, `any`\>

#### Parameters

• **returnType**: `NewReturnType`

#### Returns

`ZodFunction`\<`Args`, `NewReturnType`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:732

***

### returnType()

> **returnType**(): `Returns`

#### Returns

`Returns`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:730

***

### safeParse()

> **safeParse**(`data`, `params`?): [`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<[`InnerTypeOfFunction`](../namespaces/z/type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../namespaces/z/type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<[`InnerTypeOfFunction`](../namespaces/z/type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../namespaces/z/type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

`ZodType`.`safeParse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:63

***

### safeParseAsync()

> **safeParseAsync**(`data`, `params`?): `Promise`\<[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<[`InnerTypeOfFunction`](../namespaces/z/type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../namespaces/z/type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../namespaces/z/type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../namespaces/z/type-aliases/SafeParseReturnType.md)\<[`InnerTypeOfFunction`](../namespaces/z/type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../namespaces/z/type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>\>

#### Inherited from

`ZodType`.`safeParseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:65

***

### strictImplement()

> **strictImplement**(`func`): [`InnerTypeOfFunction`](../namespaces/z/type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>

#### Parameters

• **func**: [`InnerTypeOfFunction`](../namespaces/z/type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>

#### Returns

[`InnerTypeOfFunction`](../namespaces/z/type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:734

***

### superRefine()

#### superRefine(refinement)

> **superRefine**\<`RefinedOutput`\>(`refinement`): `ZodEffects`\<`ZodFunction`\<`Args`, `Returns`\>, `RefinedOutput`, [`InnerTypeOfFunction`](../namespaces/z/type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Type Parameters

• **RefinedOutput** *extends* (...`args`) => `Returns`\[`"_output"`\]

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodFunction`\<`Args`, `Returns`\>, `RefinedOutput`, [`InnerTypeOfFunction`](../namespaces/z/type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:73

#### superRefine(refinement)

> **superRefine**(`refinement`): `ZodEffects`\<`ZodFunction`\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../namespaces/z/type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../namespaces/z/type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodFunction`\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../namespaces/z/type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../namespaces/z/type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:74

#### superRefine(refinement)

> **superRefine**(`refinement`): `ZodEffects`\<`ZodFunction`\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../namespaces/z/type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../namespaces/z/type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodFunction`\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../namespaces/z/type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../namespaces/z/type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:75

***

### transform()

> **transform**\<`NewOut`\>(`transform`): `ZodEffects`\<`ZodFunction`\<`Args`, `Returns`\>, `NewOut`, [`InnerTypeOfFunction`](../namespaces/z/type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

#### Type Parameters

• **NewOut**

#### Parameters

• **transform**

#### Returns

`ZodEffects`\<`ZodFunction`\<`Args`, `Returns`\>, `NewOut`, [`InnerTypeOfFunction`](../namespaces/z/type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

`ZodType`.`transform`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:84

***

### create()

#### create()

> `static` **create**(): `ZodFunction`\<`ZodTuple`\<[], `ZodUnknown`\>, `ZodUnknown`\>

##### Returns

`ZodFunction`\<`ZodTuple`\<[], `ZodUnknown`\>, `ZodUnknown`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:736

#### create(args)

> `static` **create**\<`T`\>(`args`): `ZodFunction`\<`T`, `ZodUnknown`\>

##### Type Parameters

• **T** *extends* [`AnyZodTuple`](../namespaces/z/type-aliases/AnyZodTuple.md) = `ZodTuple`\<[], `ZodUnknown`\>

##### Parameters

• **args**: `T`

##### Returns

`ZodFunction`\<`T`, `ZodUnknown`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:737

#### create(args, returns)

> `static` **create**\<`T`, `U`\>(`args`, `returns`): `ZodFunction`\<`T`, `U`\>

##### Type Parameters

• **T** *extends* [`AnyZodTuple`](../namespaces/z/type-aliases/AnyZodTuple.md)

• **U** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

##### Parameters

• **args**: `T`

• **returns**: `U`

##### Returns

`ZodFunction`\<`T`, `U`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:738

#### create(args, returns, params)

> `static` **create**\<`T`, `U`\>(`args`, `returns`, `params`?): `ZodFunction`\<`T`, `U`\>

##### Type Parameters

• **T** *extends* [`AnyZodTuple`](../namespaces/z/type-aliases/AnyZodTuple.md) = `ZodTuple`\<[], `ZodUnknown`\>

• **U** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = `ZodUnknown`

##### Parameters

• **args**: `T`

• **returns**: `U`

• **params?**: [`RawCreateParams`](../namespaces/z/type-aliases/RawCreateParams.md)

##### Returns

`ZodFunction`\<`T`, `U`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:739
