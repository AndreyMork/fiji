[**@ayka/fiji**](../README.md) • **Docs**

***

[@ayka/fiji](../globals.md) / extension

# Type Alias: extension\<x, y\>

> **extension**\<`x`, `y`\>: \{ \[key in keyof x \| keyof y\]: key extends keyof y ? y\[key\] : key extends keyof x ? x\[key\] : never \}

## Type Parameters

• **x** *extends* [`rawConfig`](rawConfig.md)

• **y** *extends* [`rawConfig`](rawConfig.md)

## Defined in

[src/Types/Types.d.ts:17](https://github.com/AndreyMork/fiji/blob/144c0091223d6b00e7f3dad83fbdc3098be7f48c/src/Types/Types.d.ts#L17)
