[**@ayka/fiji**](../../../README.md) • **Docs**

***

[@ayka/fiji](../../../globals.md) / [Znv](../README.md) / ParsedSchema

# Type Alias: ParsedSchema\<T\>

> **ParsedSchema**\<`T`\>: `T` *extends* `any` ? `{ [K in keyof T]: T[K] extends SimpleSchema<infer TOut> ? TOut : T[K] extends DetailedSpec ? T[K]["schema"] extends SimpleSchema<infer TOut> ? TOut : never : never }` : `never`

## Type Parameters

• **T** *extends* [`Schemas`](Schemas.md)

## Defined in

node\_modules/.pnpm/znv@0.4.0\_zod@3.23.8/node\_modules/znv/dist/parse-env.d.ts:35
