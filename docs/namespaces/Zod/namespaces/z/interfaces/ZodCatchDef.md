[**@ayka/fiji**](../../../../../README.md) • **Docs**

***

[@ayka/fiji](../../../../../globals.md) / [Zod](../../../README.md) / [z](../README.md) / ZodCatchDef

# Interface: ZodCatchDef\<T\>

## Extends

- [`ZodTypeDef`](ZodTypeDef.md)

## Type Parameters

• **T** *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

## Properties

### catchValue()

> **catchValue**: (`ctx`) => `T`\[`"_input"`\]

#### Parameters

• **ctx**

• **ctx.error**: `ZodError`\<`any`\>

• **ctx.input**: `unknown`

#### Returns

`T`\[`"_input"`\]

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:878

***

### description?

> `optional` **description**: `string`

#### Inherited from

[`ZodTypeDef`](ZodTypeDef.md).[`description`](ZodTypeDef.md#description)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:23

***

### errorMap?

> `optional` **errorMap**: [`ZodErrorMap`](../type-aliases/ZodErrorMap.md)

#### Inherited from

[`ZodTypeDef`](ZodTypeDef.md).[`errorMap`](ZodTypeDef.md#errormap)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:22

***

### innerType

> **innerType**: `T`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:877

***

### typeName

> **typeName**: `ZodCatch`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:882
