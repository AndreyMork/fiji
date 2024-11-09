[**@ayka/fiji**](../README.md) • **Docs**

***

[@ayka/fiji](../globals.md) / extension

# Type Alias: extension\<x, y\>

> **extension**\<`x`, `y`\>: \{ \[key in keyof x \| keyof y\]: key extends keyof y ? y\[key\] : key extends keyof x ? x\[key\] : never \}

## Type Parameters

• **x** *extends* [`rawConfig`](rawConfig.md)

• **y** *extends* [`rawConfig`](rawConfig.md)

## Defined in

[src/Types/Types.d.ts:17](https://github.com/AndreyMork/fiji/blob/12b645d5d3b10e56502863abdc8c7fe71f7e6190/src/Types/Types.d.ts#L17)
