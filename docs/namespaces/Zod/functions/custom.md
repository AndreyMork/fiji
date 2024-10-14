[**@ayka/fiji**](../../../README.md) • **Docs**

***

[@ayka/fiji](../../../globals.md) / [Zod](../README.md) / custom

# Function: custom()

> **custom**\<`T`\>(`check`?, `params`?, `fatal`?): `ZodType`\<`T`, [`ZodTypeDef`](../namespaces/z/interfaces/ZodTypeDef.md), `T`\>

## Type Parameters

• **T**

## Parameters

• **check?**

• **params?**: `string` \| `CustomParams` \| (`input`) => `CustomParams`

• **fatal?**: `boolean`

**Deprecated**

Pass `fatal` into the params object instead:

```ts
z.string().custom((val) => val.length > 5, { fatal: false })
```

## Returns

`ZodType`\<`T`, [`ZodTypeDef`](../namespaces/z/interfaces/ZodTypeDef.md), `T`\>

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:943
