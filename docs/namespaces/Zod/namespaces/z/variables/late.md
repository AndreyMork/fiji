[**@ayka/fiji**](../../../../../README.md) • **Docs**

***

[@ayka/fiji](../../../../../globals.md) / [Zod](../../../README.md) / [z](../README.md) / late

# Variable: late

> `const` **late**: `object`

## Type declaration

### object()

> **object**: \<`T`\>(`shape`, `params`?) => `ZodObject`\<`T`, `"strip"`, [`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `{ [k in keyof addQuestionMarks<baseObjectOutputType<T>, any>]: addQuestionMarks<baseObjectOutputType<T>, any>[k] }`, `{ [k_1 in keyof baseObjectInputType<T>]: baseObjectInputType<T>[k_1] }`\>

#### Type Parameters

• **T** *extends* [`ZodRawShape`](../type-aliases/ZodRawShape.md)

#### Parameters

• **shape**

• **params?**: [`RawCreateParams`](../type-aliases/RawCreateParams.md)

#### Returns

`ZodObject`\<`T`, `"strip"`, [`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `{ [k in keyof addQuestionMarks<baseObjectOutputType<T>, any>]: addQuestionMarks<baseObjectOutputType<T>, any>[k] }`, `{ [k_1 in keyof baseObjectInputType<T>]: baseObjectInputType<T>[k_1] }`\>

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:956
