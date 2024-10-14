[**@ayka/fiji**](../README.md) • **Docs**

***

[@ayka/fiji](../globals.md) / patch

# Type Alias: patch\<t\>

> **patch**\<`t`\>: `Partial`\<`{ [key in keyof t]: t[key] extends Source<infer r> ? configValue<r> : t[key] extends any[] ? configValue<t[key]> : t[key] extends rawConfig ? patch<t[key]> : configValue<t[key]> }`\>

## Type Parameters

• **t** *extends* [`rawConfig`](rawConfig.md)

## Defined in

[src/Types/Types.d.ts:7](https://github.com/AndreyMork/fiji/blob/144c0091223d6b00e7f3dad83fbdc3098be7f48c/src/Types/Types.d.ts#L7)
