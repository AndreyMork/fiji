[**@ayka/fiji**](../README.md) • **Docs**

***

[@ayka/fiji](../globals.md) / patch

# Type Alias: patch\<t\>

> **patch**\<`t`\>: `Partial`\<`{ [key in keyof t]: t[key] extends Source<infer r> ? configValue<r> : t[key] extends any[] ? configValue<t[key]> : t[key] extends rawConfig ? patch<t[key]> : configValue<t[key]> }`\>

## Type Parameters

• **t** *extends* [`rawConfig`](rawConfig.md)

## Defined in

[src/Types/Types.d.ts:7](https://github.com/AndreyMork/fiji/blob/12b645d5d3b10e56502863abdc8c7fe71f7e6190/src/Types/Types.d.ts#L7)
