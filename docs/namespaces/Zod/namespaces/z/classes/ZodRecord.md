[**@ayka/fiji**](../../../../../README.md) • **Docs**

***

[@ayka/fiji](../../../../../globals.md) / [Zod](../../../README.md) / [z](../README.md) / ZodRecord

# Class: ZodRecord\<Key, Value\>

## Extends

- `ZodType`\<[`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, [`ZodRecordDef`](../interfaces/ZodRecordDef.md)\<`Key`, `Value`\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

## Type Parameters

• **Key** *extends* [`KeySchema`](../type-aliases/KeySchema.md) = `ZodString`

• **Value** *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

## Constructors

### new ZodRecord()

> **new ZodRecord**\<`Key`, `Value`\>(`def`): `ZodRecord`\<`Key`, `Value`\>

#### Parameters

• **def**: [`ZodRecordDef`](../interfaces/ZodRecordDef.md)\<`Key`, `Value`\>

#### Returns

`ZodRecord`\<`Key`, `Value`\>

#### Inherited from

`ZodType`.`constructor`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:76

## Properties

### \_def

> `readonly` **\_def**: [`ZodRecordDef`](../interfaces/ZodRecordDef.md)\<`Key`, `Value`\>

#### Inherited from

`ZodType`.`_def`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:51

***

### \_input

> `readonly` **\_input**: [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>

#### Inherited from

`ZodType`.`_input`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:50

***

### \_output

> `readonly` **\_output**: [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>

#### Inherited from

`ZodType`.`_output`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:49

***

### \_type

> `readonly` **\_type**: [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>

#### Inherited from

`ZodType`.`_type`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:48

***

### spa()

> **spa**: (`data`, `params`?) => `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>\>

Alias of safeParseAsync

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>\>

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

### element

> `get` **element**(): `Value`

#### Returns

`Value`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:685

***

### keySchema

> `get` **keySchema**(): `Key`

#### Returns

`Key`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:682

***

### valueSchema

> `get` **valueSchema**(): `Value`

#### Returns

`Value`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:683

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

> **\_parse**(`input`): [`ParseReturnType`](../type-aliases/ParseReturnType.md)\<[`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>

#### Parameters

• **input**: [`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`ParseReturnType`](../type-aliases/ParseReturnType.md)\<[`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>

#### Overrides

`ZodType`.`_parse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:684

***

### \_parseAsync()

> **\_parseAsync**(`input`): [`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<[`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>

#### Parameters

• **input**: [`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<[`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>

#### Inherited from

`ZodType`.`_parseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:61

***

### \_parseSync()

> **\_parseSync**(`input`): [`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<[`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>

#### Parameters

• **input**: [`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<[`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>

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

> **\_refinement**(`refinement`): `ZodEffects`\<`ZodRecord`\<`Key`, `Value`\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

#### Parameters

• **refinement**

#### Returns

`ZodEffects`\<`ZodRecord`\<`Key`, `Value`\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

#### Inherited from

`ZodType`.`_refinement`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:72

***

### and()

> **and**\<`T`\>(`incoming`): `ZodIntersection`\<`ZodRecord`\<`Key`, `Value`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

• **incoming**: `T`

#### Returns

`ZodIntersection`\<`ZodRecord`\<`Key`, `Value`\>, `T`\>

#### Inherited from

`ZodType`.`and`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:83

***

### array()

> **array**(): `ZodArray`\<`ZodRecord`\<`Key`, `Value`\>, `"many"`\>

#### Returns

`ZodArray`\<`ZodRecord`\<`Key`, `Value`\>, `"many"`\>

#### Inherited from

`ZodType`.`array`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:80

***

### brand()

> **brand**\<`B`\>(`brand`?): `ZodBranded`\<`ZodRecord`\<`Key`, `Value`\>, `B`\>

#### Type Parameters

• **B** *extends* `string` \| `number` \| `symbol`

#### Parameters

• **brand?**: `B`

#### Returns

`ZodBranded`\<`ZodRecord`\<`Key`, `Value`\>, `B`\>

#### Inherited from

`ZodType`.`brand`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:87

***

### catch()

#### catch(def)

> **catch**(`def`): `ZodCatch`\<`ZodRecord`\<`Key`, `Value`\>\>

##### Parameters

• **def**: [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>

##### Returns

`ZodCatch`\<`ZodRecord`\<`Key`, `Value`\>\>

##### Inherited from

`ZodType`.`catch`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:88

#### catch(def)

> **catch**(`def`): `ZodCatch`\<`ZodRecord`\<`Key`, `Value`\>\>

##### Parameters

• **def**

##### Returns

`ZodCatch`\<`ZodRecord`\<`Key`, `Value`\>\>

##### Inherited from

`ZodType`.`catch`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:89

***

### default()

#### default(def)

> **default**(`def`): `ZodDefault`\<`ZodRecord`\<`Key`, `Value`\>\>

##### Parameters

• **def**: `noUndefined`\<[`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Returns

`ZodDefault`\<`ZodRecord`\<`Key`, `Value`\>\>

##### Inherited from

`ZodType`.`default`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:85

#### default(def)

> **default**(`def`): `ZodDefault`\<`ZodRecord`\<`Key`, `Value`\>\>

##### Parameters

• **def**

##### Returns

`ZodDefault`\<`ZodRecord`\<`Key`, `Value`\>\>

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

> **nullable**(): `ZodNullable`\<`ZodRecord`\<`Key`, `Value`\>\>

#### Returns

`ZodNullable`\<`ZodRecord`\<`Key`, `Value`\>\>

#### Inherited from

`ZodType`.`nullable`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:78

***

### nullish()

> **nullish**(): `ZodOptional`\<`ZodNullable`\<`ZodRecord`\<`Key`, `Value`\>\>\>

#### Returns

`ZodOptional`\<`ZodNullable`\<`ZodRecord`\<`Key`, `Value`\>\>\>

#### Inherited from

`ZodType`.`nullish`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:79

***

### optional()

> **optional**(): `ZodOptional`\<`ZodRecord`\<`Key`, `Value`\>\>

#### Returns

`ZodOptional`\<`ZodRecord`\<`Key`, `Value`\>\>

#### Inherited from

`ZodType`.`optional`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:77

***

### or()

> **or**\<`T`\>(`option`): `ZodUnion`\<[`ZodRecord`\<`Key`, `Value`\>, `T`]\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

• **option**: `T`

#### Returns

`ZodUnion`\<[`ZodRecord`\<`Key`, `Value`\>, `T`]\>

#### Inherited from

`ZodType`.`or`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:82

***

### parse()

> **parse**(`data`, `params`?): [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

[`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>

#### Inherited from

`ZodType`.`parse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:62

***

### parseAsync()

> **parseAsync**(`data`, `params`?): `Promise`\<[`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>

#### Inherited from

`ZodType`.`parseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:64

***

### pipe()

> **pipe**\<`T`\>(`target`): `ZodPipeline`\<`ZodRecord`\<`Key`, `Value`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

• **target**: `T`

#### Returns

`ZodPipeline`\<`ZodRecord`\<`Key`, `Value`\>, `T`\>

#### Inherited from

`ZodType`.`pipe`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:94

***

### promise()

> **promise**(): `ZodPromise`\<`ZodRecord`\<`Key`, `Value`\>\>

#### Returns

`ZodPromise`\<`ZodRecord`\<`Key`, `Value`\>\>

#### Inherited from

`ZodType`.`promise`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:81

***

### readonly()

> **readonly**(): `ZodReadonly`\<`ZodRecord`\<`Key`, `Value`\>\>

#### Returns

`ZodReadonly`\<`ZodRecord`\<`Key`, `Value`\>\>

#### Inherited from

`ZodType`.`readonly`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:95

***

### refine()

#### refine(check, message)

> **refine**\<`RefinedOutput`\>(`check`, `message`?): `ZodEffects`\<`ZodRecord`\<`Key`, `Value`\>, `RefinedOutput`, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Type Parameters

• **RefinedOutput** *extends* `Record`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\> \| `Partial`\<`Record`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>

##### Parameters

• **check**

• **message?**: `string` \| `Partial`\<`Omit`\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`) => `Partial`\<`Omit`\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

`ZodEffects`\<`ZodRecord`\<`Key`, `Value`\>, `RefinedOutput`, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Inherited from

`ZodType`.`refine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:68

#### refine(check, message)

> **refine**(`check`, `message`?): `ZodEffects`\<`ZodRecord`\<`Key`, `Value`\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Parameters

• **check**

• **message?**: `string` \| `Partial`\<`Omit`\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`) => `Partial`\<`Omit`\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

`ZodEffects`\<`ZodRecord`\<`Key`, `Value`\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Inherited from

`ZodType`.`refine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:69

***

### refinement()

#### refinement(check, refinementData)

> **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): `ZodEffects`\<`ZodRecord`\<`Key`, `Value`\>, `RefinedOutput`, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Type Parameters

• **RefinedOutput** *extends* `Record`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\> \| `Partial`\<`Record`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>

##### Parameters

• **check**

• **refinementData**: [`IssueData`](../type-aliases/IssueData.md) \| (`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md)

##### Returns

`ZodEffects`\<`ZodRecord`\<`Key`, `Value`\>, `RefinedOutput`, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Inherited from

`ZodType`.`refinement`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:70

#### refinement(check, refinementData)

> **refinement**(`check`, `refinementData`): `ZodEffects`\<`ZodRecord`\<`Key`, `Value`\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Parameters

• **check**

• **refinementData**: [`IssueData`](../type-aliases/IssueData.md) \| (`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md)

##### Returns

`ZodEffects`\<`ZodRecord`\<`Key`, `Value`\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Inherited from

`ZodType`.`refinement`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:71

***

### safeParse()

> **safeParse**(`data`, `params`?): [`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>

#### Inherited from

`ZodType`.`safeParse`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:63

***

### safeParseAsync()

> **safeParseAsync**(`data`, `params`?): `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>\>

#### Parameters

• **data**: `unknown`

• **params?**: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>\>

#### Inherited from

`ZodType`.`safeParseAsync`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:65

***

### superRefine()

#### superRefine(refinement)

> **superRefine**\<`RefinedOutput`\>(`refinement`): `ZodEffects`\<`ZodRecord`\<`Key`, `Value`\>, `RefinedOutput`, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Type Parameters

• **RefinedOutput** *extends* `Record`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\> \| `Partial`\<`Record`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodRecord`\<`Key`, `Value`\>, `RefinedOutput`, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:73

#### superRefine(refinement)

> **superRefine**(`refinement`): `ZodEffects`\<`ZodRecord`\<`Key`, `Value`\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodRecord`\<`Key`, `Value`\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:74

#### superRefine(refinement)

> **superRefine**(`refinement`): `ZodEffects`\<`ZodRecord`\<`Key`, `Value`\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Parameters

• **refinement**

##### Returns

`ZodEffects`\<`ZodRecord`\<`Key`, `Value`\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Inherited from

`ZodType`.`superRefine`

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:75

***

### transform()

> **transform**\<`NewOut`\>(`transform`): `ZodEffects`\<`ZodRecord`\<`Key`, `Value`\>, `NewOut`, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

#### Type Parameters

• **NewOut**

#### Parameters

• **transform**

#### Returns

`ZodEffects`\<`ZodRecord`\<`Key`, `Value`\>, `NewOut`, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

#### Inherited from

`ZodType`.`transform`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:84

***

### create()

#### create(valueType, params)

> `static` **create**\<`Value`\>(`valueType`, `params`?): `ZodRecord`\<`ZodString`, `Value`\>

##### Type Parameters

• **Value** *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

##### Parameters

• **valueType**: `Value`

• **params?**: [`RawCreateParams`](../type-aliases/RawCreateParams.md)

##### Returns

`ZodRecord`\<`ZodString`, `Value`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:686

#### create(keySchema, valueType, params)

> `static` **create**\<`Keys`, `Value`\>(`keySchema`, `valueType`, `params`?): `ZodRecord`\<`Keys`, `Value`\>

##### Type Parameters

• **Keys** *extends* [`KeySchema`](../type-aliases/KeySchema.md)

• **Value** *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

##### Parameters

• **keySchema**: `Keys`

• **valueType**: `Value`

• **params?**: [`RawCreateParams`](../type-aliases/RawCreateParams.md)

##### Returns

`ZodRecord`\<`Keys`, `Value`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:687
