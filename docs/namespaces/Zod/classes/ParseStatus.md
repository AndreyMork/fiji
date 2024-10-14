[**@ayka/fiji**](../../../README.md) • **Docs**

***

[@ayka/fiji](../../../globals.md) / [Zod](../README.md) / ParseStatus

# Class: ParseStatus

## Constructors

### new ParseStatus()

> **new ParseStatus**(): `ParseStatus`

#### Returns

`ParseStatus`

## Properties

### value

> **value**: `"valid"` \| `"dirty"` \| `"aborted"`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:40

## Methods

### abort()

> **abort**(): `void`

#### Returns

`void`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:42

***

### dirty()

> **dirty**(): `void`

#### Returns

`void`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:41

***

### mergeArray()

> `static` **mergeArray**(`status`, `results`): [`SyncParseReturnType`](../namespaces/z/type-aliases/SyncParseReturnType.md)\<`any`\>

#### Parameters

• **status**: `ParseStatus`

• **results**: [`SyncParseReturnType`](../namespaces/z/type-aliases/SyncParseReturnType.md)\<`any`\>[]

#### Returns

[`SyncParseReturnType`](../namespaces/z/type-aliases/SyncParseReturnType.md)\<`any`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:43

***

### mergeObjectAsync()

> `static` **mergeObjectAsync**(`status`, `pairs`): `Promise`\<[`SyncParseReturnType`](../namespaces/z/type-aliases/SyncParseReturnType.md)\<`any`\>\>

#### Parameters

• **status**: `ParseStatus`

• **pairs**: `object`[]

#### Returns

`Promise`\<[`SyncParseReturnType`](../namespaces/z/type-aliases/SyncParseReturnType.md)\<`any`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:44

***

### mergeObjectSync()

> `static` **mergeObjectSync**(`status`, `pairs`): [`SyncParseReturnType`](../namespaces/z/type-aliases/SyncParseReturnType.md)\<`any`\>

#### Parameters

• **status**: `ParseStatus`

• **pairs**: `object`[]

#### Returns

[`SyncParseReturnType`](../namespaces/z/type-aliases/SyncParseReturnType.md)\<`any`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:48
