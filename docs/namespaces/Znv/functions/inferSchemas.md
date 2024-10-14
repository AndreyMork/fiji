[**@ayka/fiji**](../../../README.md) • **Docs**

***

[@ayka/fiji](../../../globals.md) / [Znv](../README.md) / inferSchemas

# Function: inferSchemas()

> **inferSchemas**\<`T`\>(`schemas`): `T` & [`RestrictSchemas`](../type-aliases/RestrictSchemas.md)\<`T`\>

Mostly an internal convenience function for testing. Returns the input
parameter unchanged, but with the same inference used in `parseEnv` applied.

## Type Parameters

• **T** *extends* [`Schemas`](../type-aliases/Schemas.md)

## Parameters

• **schemas**: `T` & [`RestrictSchemas`](../type-aliases/RestrictSchemas.md)\<`T`\>

## Returns

`T` & [`RestrictSchemas`](../type-aliases/RestrictSchemas.md)\<`T`\>

## Defined in

node\_modules/.pnpm/znv@0.4.0\_zod@3.23.8/node\_modules/znv/dist/parse-env.d.ts:47
