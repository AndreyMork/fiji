[**@ayka/fiji**](../../../../../README.md) • **Docs**

***

[@ayka/fiji](../../../../../globals.md) / [Zod](../../../README.md) / [z](../README.md) / OutputTypeOfTupleWithRest

# Type Alias: OutputTypeOfTupleWithRest\<T, Rest\>

> **OutputTypeOfTupleWithRest**\<`T`, `Rest`\>: `Rest` *extends* [`ZodTypeAny`](ZodTypeAny.md) ? [`...OutputTypeOfTuple<T>`, `...Rest["_output"][]`] : [`OutputTypeOfTuple`](OutputTypeOfTuple.md)\<`T`\>

## Type Parameters

• **T** *extends* [`ZodTupleItems`](ZodTupleItems.md) \| []

• **Rest** *extends* [`ZodTypeAny`](ZodTypeAny.md) \| `null` = `null`

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:652
