[**@ayka/fiji**](../../../README.md) • **Docs**

***

[@ayka/fiji](../../../globals.md) / [Types](../README.md) / config

# Type Alias: config\<t\>

> **config**\<`t`\>: `{ [key in keyof t]: t[key] extends Source<infer value> ? value : t[key] extends any[] ? t[key] : t[key] extends rawConfig ? config<t[key]> : t[key] }`

## Type Parameters

• **t** *extends* [`rawConfig`](../../../type-aliases/rawConfig.md)

## Defined in

[src/Types/Types.d.ts:25](https://github.com/AndreyMork/fiji/blob/144c0091223d6b00e7f3dad83fbdc3098be7f48c/src/Types/Types.d.ts#L25)
