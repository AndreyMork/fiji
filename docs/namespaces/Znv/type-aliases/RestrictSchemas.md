[**@ayka/fiji**](../../../README.md) • **Docs**

***

[@ayka/fiji](../../../globals.md) / [Znv](../README.md) / RestrictSchemas

# Type Alias: RestrictSchemas\<T\>

> **RestrictSchemas**\<`T`\>: `{ [K in keyof T]: T[K] extends SimpleSchema ? SimpleSchema : T[K] extends DetailedSpec ? DetailedSpec<T[K]["schema"]> & Omit<Record<keyof T[K], never>, DetailedSpecKeys> : never }`

## Type Parameters

• **T** *extends* [`Schemas`](Schemas.md)

## Defined in

node\_modules/.pnpm/znv@0.4.0\_zod@3.23.8/node\_modules/znv/dist/parse-env.d.ts:32
