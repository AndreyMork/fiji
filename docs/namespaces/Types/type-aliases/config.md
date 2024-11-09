[**@ayka/fiji**](../../../README.md) • **Docs**

***

[@ayka/fiji](../../../globals.md) / [Types](../README.md) / config

# Type Alias: config\<t\>

> **config**\<`t`\>: `{ [key in keyof t]: t[key] extends Source<infer value> ? value : t[key] extends any[] ? t[key] : t[key] extends rawConfig ? config<t[key]> : t[key] }`

## Type Parameters

• **t** *extends* [`rawConfig`](../../../type-aliases/rawConfig.md)

## Defined in

[src/Types/Types.d.ts:25](https://github.com/AndreyMork/fiji/blob/12b645d5d3b10e56502863abdc8c7fe71f7e6190/src/Types/Types.d.ts#L25)
