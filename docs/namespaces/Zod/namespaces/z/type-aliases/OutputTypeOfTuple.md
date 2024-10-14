[**@ayka/fiji**](../../../../../README.md) • **Docs**

***

[@ayka/fiji](../../../../../globals.md) / [Zod](../../../README.md) / [z](../README.md) / OutputTypeOfTuple

# Type Alias: OutputTypeOfTuple\<T\>

> **OutputTypeOfTuple**\<`T`\>: [`AssertArray`](AssertArray.md)\<`{ [k in keyof T]: T[k] extends ZodType<any, any, any> ? T[k]["_output"] : never }`\>

## Type Parameters

• **T** *extends* [`ZodTupleItems`](ZodTupleItems.md) \| []

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:649
