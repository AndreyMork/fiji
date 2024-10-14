[**@ayka/fiji**](../../../README.md) • **Docs**

***

[@ayka/fiji](../../../globals.md) / [Znv](../README.md) / parseEnv

# Function: parseEnv()

> **parseEnv**\<`T`\>(`env`, `schemas`): `DeepReadonlyObject`\<[`ParsedSchema`](../type-aliases/ParsedSchema.md)\<`T`\>\>

Parses the passed environment object using the provided map of Zod schemas
and returns the immutably-typed, parsed environment..

## Type Parameters

• **T** *extends* [`Schemas`](../type-aliases/Schemas.md)

## Parameters

• **env**: `Record`\<`string`, `undefined` \| `string`\>

• **schemas**: `T` & [`RestrictSchemas`](../type-aliases/RestrictSchemas.md)\<`T`\>

## Returns

`DeepReadonlyObject`\<[`ParsedSchema`](../type-aliases/ParsedSchema.md)\<`T`\>\>

## Defined in

node\_modules/.pnpm/znv@0.4.0\_zod@3.23.8/node\_modules/znv/dist/parse-env.d.ts:52
