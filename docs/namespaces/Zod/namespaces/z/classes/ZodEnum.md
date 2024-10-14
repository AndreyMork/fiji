[**@ayka/fiji**](../../../../../README.md) • **Docs**

***

[@ayka/fiji](../../../../../globals.md) / [Zod](../../../README.md) / [z](../README.md) / ZodEnum

# Class: ZodEnum\<T\>

## Extends

- `ZodType`\<`T`\[`number`\], [`ZodEnumDef`](../interfaces/ZodEnumDef.md)\<`T`\>, `T`\[`number`\]\>

## Type Parameters

• **T** *extends* [`string`, `...string[]`]

## Constructors

### new ZodEnum()

> **new ZodEnum**\<`T`\>(`def`): `ZodEnum`\<`T`\>

#### Parameters

• **def**: [`ZodEnumDef`](../interfaces/ZodEnumDef.md)\<`T`\>

#### Returns

`ZodEnum`\<`T`\>

#### Inherited from

`ZodType`.`constructor`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:76

## Properties

### \_def

> `readonly` **\_def**: [`ZodEnumDef`](../interfaces/ZodEnumDef.md)\<`T`\>

#### Inherited from

`ZodType`.`_def`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:51

***

### \_input

> `readonly` **\_input**: `T`\[`number`\]

#### Inherited from

`ZodType`.`_input`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:50

***

### \_output

> `readonly` **\_output**: `T`\[`number`\]

#### Inherited from

`ZodType`.`_output`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:49

***

### \_type

> `readonly` **\_type**: `T`\[`number`\]

#### Inherited from

`ZodType`.`_type`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:48

***

### spa()

> **spa**: (`data`, `params`?) => `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`T`\[`number`\], `T`\[`number`\]\>\>

Alias of safeParseAsync

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`T`\[`number`\], `T`\[`number`\]\>\>

#### Inherited from

`ZodType`.`spa`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:67

***

### create()

> `static` **create**: \<`U`, `T`\>(`values`, `params`?) => `ZodEnum`\<[`Writeable`](../type-aliases/Writeable.md)\<`T`\>\>\<`U`, `T`\>(`values`, `params`?) => `ZodEnum`\<`T`\>

#### Type Parameters

• **U** *extends* `string`

• **T** *extends* readonly [`U`, `U`]

#### Parameters

• **values**: `T`

• **params?**: [`RawCreateParams`](../type-aliases/RawCreateParams.md)

#### Returns

`ZodEnum`\<[`Writeable`](../type-aliases/Writeable.md)\<`T`\>\>

#### Type Parameters

• **U** *extends* `string`

• **T** *extends* [`U`, `...U[]`]

#### Parameters

• **values**: `T`

• **params?**: [`RawCreateParams`](../type-aliases/RawCreateParams.md)

#### Returns

`ZodEnum`\<`T`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:785

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

### enum

> `get` **enum**(): [`Values`](../type-aliases/Values.md)\<`T`\>

#### Returns

[`Values`](../type-aliases/Values.md)\<`T`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:780

***

### Enum

> `get` **Enum**(): [`Values`](../type-aliases/Values.md)\<`T`\>

#### Returns

[`Values`](../type-aliases/Values.md)\<`T`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:782

***

### options

> `get` **options**(): `T`

#### Returns

`T`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:779

***

### Values

> `get` **Values**(): [`Values`](../type-aliases/Values.md)\<`T`\>

#### Returns

[`Values`](../type-aliases/Values.md)\<`T`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:781

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

> **\_parse**(`input`): [`ParseReturnType`](../type-aliases/ParseReturnType.md)\<`T`\[`number`\]\>

#### Parameters

• **input**: [`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`ParseReturnType`](../type-aliases/ParseReturnType.md)\<`T`\[`number`\]\>

#### Overrides

`ZodType`.`_parse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:778

***

### \_parseAsync()

> **\_parseAsync**(`input`): [`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<`T`\[`number`\]\>

#### Parameters

• **input**: [`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<`T`\[`number`\]\>

#### Inherited from

`ZodType`.`_parseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:61

***

### \_parseSync()

> **\_parseSync**(`input`): [`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`T`\[`number`\]\>

#### Parameters

• **input**: [`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`T`\[`number`\]\>

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

> **\_refinement**(`refinement`): `ZodEffects`\<`ZodEnum`\<`T`\>, `T`\[`number`\], `T`\[`number`\]\>

#### Parameters

• **refinement**

#### Returns

`ZodEffects`\<`ZodEnum`\<`T`\>, `T`\[`number`\], `T`\[`number`\]\>

#### Inherited from

`ZodType`.`_refinement`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:72

***

### and()

> **and**\<`T`\>(`incoming`): `ZodIntersection`\<`ZodEnum`\<`T`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

• **incoming**: `T`

#### Returns

`ZodIntersection`\<`ZodEnum`\<`T`\>, `T`\>

#### Inherited from

`ZodType`.`and`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:83

***

### array()

> **array**(): `ZodArray`\<`ZodEnum`\<`T`\>, `"many"`\>

#### Returns

`ZodArray`\<`ZodEnum`\<`T`\>, `"many"`\>

#### Inherited from

`ZodType`.`array`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:80

***

### brand()

> **brand**\<`B`\>(`brand`?): `ZodBranded`\<`ZodEnum`\<`T`\>, `B`\>

#### Type Parameters

• **B** *extends* `string` \| `number` \| `symbol`

#### Parameters

• **brand?**: `B`

#### Returns

`ZodBranded`\<`ZodEnum`\<`T`\>, `B`\>

#### Inherited from

`ZodType`.`brand`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:87

***

### catch()

#### catch(def)

> **catch**(`def`): `ZodCatch`\<`ZodEnum`\<`T`\>\>

##### Parameters

• **def**: `T`\[`number`\]

##### Returns

`ZodCatch`\<`ZodEnum`\<`T`\>\>

##### Inherited from

`ZodType`.`catch`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:88

#### catch(def)

> **catch**(`def`): `ZodCatch`\<`ZodEnum`\<`T`\>\>

##### Parameters

• **def**

##### Returns

`ZodCatch`\<`ZodEnum`\<`T`\>\>

##### Inherited from

`ZodType`.`catch`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:89

***

### default()

#### default(def)

> **default**(`def`): `ZodDefault`\<`ZodEnum`\<`T`\>\>

##### Parameters

• **def**: `noUndefined`\<`T`\[`number`\]\>

##### Returns

`ZodDefault`\<`ZodEnum`\<`T`\>\>

##### Inherited from

`ZodType`.`default`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:85

#### default(def)

> **default**(`def`): `ZodDefault`\<`ZodEnum`\<`T`\>\>

##### Parameters

• **def**

##### Returns

`ZodDefault`\<`ZodEnum`\<`T`\>\>

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

### exclude()

> **exclude**\<`ToExclude`\>(`values`, `newDef`?): `ZodEnum`\<[`typecast`](../type-aliases/typecast.md)\<[`Writeable`](../type-aliases/Writeable.md)\<[`FilterEnum`](../type-aliases/FilterEnum.md)\<`T`, `ToExclude`\[`number`\]\>\>, [`string`, `...string[]`]\>\>

#### Type Parameters

• **ToExclude** *extends* readonly [`T`\[`number`\], `T`\[`number`\]]

#### Parameters

• **values**: `ToExclude`

• **newDef?**: [`RawCreateParams`](../type-aliases/RawCreateParams.md)

#### Returns

`ZodEnum`\<[`typecast`](../type-aliases/typecast.md)\<[`Writeable`](../type-aliases/Writeable.md)\<[`FilterEnum`](../type-aliases/FilterEnum.md)\<`T`, `ToExclude`\[`number`\]\>\>, [`string`, `...string[]`]\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:784

***

### extract()

> **extract**\<`ToExtract`\>(`values`, `newDef`?): `ZodEnum`\<[`Writeable`](../type-aliases/Writeable.md)\<`ToExtract`\>\>

#### Type Parameters

• **ToExtract** *extends* readonly [`T`\[`number`\], `T`\[`number`\]]

#### Parameters

• **values**: `ToExtract`

• **newDef?**: [`RawCreateParams`](../type-aliases/RawCreateParams.md)

#### Returns

`ZodEnum`\<[`Writeable`](../type-aliases/Writeable.md)\<`ToExtract`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:783

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

> **nullable**(): `ZodNullable`\<`ZodEnum`\<`T`\>\>

#### Returns

`ZodNullable`\<`ZodEnum`\<`T`\>\>

#### Inherited from

`ZodType`.`nullable`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:78

***

### nullish()

> **nullish**(): `ZodOptional`\<`ZodNullable`\<`ZodEnum`\<`T`\>\>\>

#### Returns

`ZodOptional`\<`ZodNullable`\<`ZodEnum`\<`T`\>\>\>

#### Inherited from

`ZodType`.`nullish`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:79

***

### optional()

> **optional**(): `ZodOptional`\<`ZodEnum`\<`T`\>\>

#### Returns

`ZodOptional`\<`ZodEnum`\<`T`\>\>

#### Inherited from

`ZodType`.`optional`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:77

***

### or()

> **or**\<`T`\>(`option`): `ZodUnion`\<[`ZodEnum`\<`T`\>, `T`]\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

• **option**: `T`

#### Returns

`ZodUnion`\<[`ZodEnum`\<`T`\>, `T`]\>

#### Inherited from

`ZodType`.`or`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:82

***

### parse()

> **parse**(`data`, `params`?): `T`\[`number`\]

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`T`\[`number`\]

#### Inherited from

`ZodType`.`parse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:62

***

### parseAsync()

> **parseAsync**(`data`, `params`?): `Promise`\<`T`\[`number`\]\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<`T`\[`number`\]\>

#### Inherited from

`ZodType`.`parseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:64

***

### pipe()

> **pipe**\<`T`\>(`target`): `ZodPipeline`\<`ZodEnum`\<`T`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

• **target**: `T`

#### Returns

`ZodPipeline`\<`ZodEnum`\<`T`\>, `T`\>

#### Inherited from

`ZodType`.`pipe`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:94

***

### promise()

> **promise**(): `ZodPromise`\<`ZodEnum`\<`T`\>\>

#### Returns

`ZodPromise`\<`ZodEnum`\<`T`\>\>

#### Inherited from

`ZodType`.`promise`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:81

***

### readonly()

> **readonly**(): `ZodReadonly`\<`ZodEnum`\<`T`\>\>

#### Returns

`ZodReadonly`\<`ZodEnum`\<`T`\>\>

#### Inherited from

`ZodType`.`readonly`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:95

***

### refine()

#### refine(check, message)

> **refine**\<`RefinedOutput`\>(`check`, `message`?): `ZodEffects`\<`ZodEnum`\<`T`\>, `RefinedOutput`, `T`\[`number`\]\>

##### Type Parameters

• **RefinedOutput** *extends* `string`

##### Parameters

• **check**

• **message?**: `string` \| `Partial`\<`Omit`\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`) => `Partial`\<`Omit`\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

`ZodEffects`\<`ZodEnum`\<`T`\>, `RefinedOutput`, `T`\[`number`\]\>

##### Inherited from

`ZodType`.`refine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:68

#### refine(check, message)

> **refine**(`check`, `message`?): `ZodEffects`\<`ZodEnum`\<`T`\>, `T`\[`number`\], `T`\[`number`\]\>

##### Parameters

• **check**

• **message?**: `string` \| `Partial`\<`Omit`\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`) => `Partial`\<`Omit`\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

`ZodEffects`\<`ZodEnum`\<`T`\>, `T`\[`number`\], `T`\[`number`\]\>

##### Inherited from

`ZodType`.`refine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:69

***

### refinement()

#### refinement(check, refinementData)

> **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): `ZodEffects`\<`ZodEnum`\<`T`\>, `RefinedOutput`, `T`\[`number`\]\>

##### Type Parameters

• **RefinedOutput** *extends* `string`

##### Parameters

• **check**

• **refinementData**: [`IssueData`](../type-aliases/IssueData.md) \| (`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md)

##### Returns

`ZodEffects`\<`ZodEnum`\<`T`\>, `RefinedOutput`, `T`\[`number`\]\>

##### Inherited from

`ZodType`.`refinement`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:70

#### refinement(check, refinementData)

> **refinement**(`check`, `refinementData`): `ZodEffects`\<`ZodEnum`\<`T`\>, `T`\[`number`\], `T`\[`number`\]\>

##### Parameters

• **check**

• **refinementData**: [`IssueData`](../type-aliases/IssueData.md) \| (`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md)

##### Returns

`ZodEffects`\<`ZodEnum`\<`T`\>, `T`\[`number`\], `T`\[`number`\]\>

##### Inherited from

`ZodType`.`refinement`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:71

***

### safeParse()

> **safeParse**(`data`, `params`?): [`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`T`\[`number`\], `T`\[`number`\]\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`T`\[`number`\], `T`\[`number`\]\>

#### Inherited from

`ZodType`.`safeParse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:63

***

### safeParseAsync()

> **safeParseAsync**(`data`, `params`?): `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`T`\[`number`\], `T`\[`number`\]\>\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`T`\[`number`\], `T`\[`number`\]\>\>

#### Inherited from

`ZodType`.`safeParseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:65

***

### superRefine()

#### superRefine(refinement)

> **superRefine**\<`RefinedOutput`\>(`refinement`): `ZodEffects`\<`ZodEnum`\<`T`\>, `RefinedOutput`, `T`\[`number`\]\>

##### Type Parameters

• **RefinedOutput** *extends* `string`

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodEnum`\<`T`\>, `RefinedOutput`, `T`\[`number`\]\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:73

#### superRefine(refinement)

> **superRefine**(`refinement`): `ZodEffects`\<`ZodEnum`\<`T`\>, `T`\[`number`\], `T`\[`number`\]\>

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodEnum`\<`T`\>, `T`\[`number`\], `T`\[`number`\]\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:74

#### superRefine(refinement)

> **superRefine**(`refinement`): `ZodEffects`\<`ZodEnum`\<`T`\>, `T`\[`number`\], `T`\[`number`\]\>

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodEnum`\<`T`\>, `T`\[`number`\], `T`\[`number`\]\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:75

***

### transform()

> **transform**\<`NewOut`\>(`transform`): `ZodEffects`\<`ZodEnum`\<`T`\>, `NewOut`, `T`\[`number`\]\>

#### Type Parameters

• **NewOut**

#### Parameters

• **transform**

#### Returns

`ZodEffects`\<`ZodEnum`\<`T`\>, `NewOut`, `T`\[`number`\]\>

#### Inherited from

`ZodType`.`transform`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:84
