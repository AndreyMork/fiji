[**@ayka/fiji**](../../../README.md) • **Docs**

***

[@ayka/fiji](../../../globals.md) / [Znv](../README.md) / resolveDefaultValueForSpec

# Function: resolveDefaultValueForSpec()

> **resolveDefaultValueForSpec**\<`TIn`\>(`defaults`, `nodeEnv`): [`boolean`, `TIn` \| `undefined`]

Since there might be a provided default value of `null` or `undefined`, we
return a tuple that also indicates whether we found a default.

## Type Parameters

• **TIn** = `unknown`

## Parameters

• **defaults**: `undefined` \| `Record`\<`string`, `TIn`\>

• **nodeEnv**: `undefined` \| `string`

## Returns

[`boolean`, `TIn` \| `undefined`]

## Defined in

node\_modules/.pnpm/znv@0.4.0\_zod@3.23.8/node\_modules/znv/dist/parse-env.d.ts:42
