[**@ayka/fiji**](../../../../../README.md) • **Docs**

***

[@ayka/fiji](../../../../../globals.md) / [Zod](../../../README.md) / [z](../README.md) / deoptional

# Type Alias: deoptional\<T\>

> **deoptional**\<`T`\>: `T` *extends* `ZodOptional`\<infer U\> ? [`deoptional`](deoptional.md)\<`U`\> : `T` *extends* `ZodNullable`\<infer U\> ? `ZodNullable`\<[`deoptional`](deoptional.md)\<`U`\>\> : `T`

## Type Parameters

• **T** *extends* [`ZodTypeAny`](ZodTypeAny.md)

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:529
