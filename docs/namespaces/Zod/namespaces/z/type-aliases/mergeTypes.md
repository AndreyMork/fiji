[**@ayka/fiji**](../../../../../README.md) • **Docs**

***

[@ayka/fiji](../../../../../globals.md) / [Zod](../../../README.md) / [z](../README.md) / mergeTypes

# Type Alias: mergeTypes\<A, B\>

> **mergeTypes**\<`A`, `B`\>: \{ \[k in keyof A \| keyof B\]: k extends keyof B ? B\[k\] : k extends keyof A ? A\[k\] : never \}

## Type Parameters

• **A**

• **B**

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:509
