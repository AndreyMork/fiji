[**@ayka/fiji**](../../../../../README.md) • **Docs**

***

[@ayka/fiji](../../../../../globals.md) / [Zod](../../../README.md) / [z](../README.md) / objectOutputType

# Type Alias: objectOutputType\<Shape, Catchall, UnknownKeys\>

> **objectOutputType**\<`Shape`, `Catchall`, `UnknownKeys`\>: `objectUtil.flatten`\<`objectUtil.addQuestionMarks`\<[`baseObjectOutputType`](baseObjectOutputType.md)\<`Shape`\>\>\> & [`CatchallOutput`](CatchallOutput.md)\<`Catchall`\> & [`PassthroughType`](PassthroughType.md)\<`UnknownKeys`\>

## Type Parameters

• **Shape** *extends* [`ZodRawShape`](ZodRawShape.md)

• **Catchall** *extends* [`ZodTypeAny`](ZodTypeAny.md)

• **UnknownKeys** *extends* [`UnknownKeysParam`](UnknownKeysParam.md) = [`UnknownKeysParam`](UnknownKeysParam.md)

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:512
