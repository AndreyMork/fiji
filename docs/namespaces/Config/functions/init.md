[**@ayka/fiji**](../../../README.md) • **Docs**

***

[@ayka/fiji](../../../globals.md) / [Config](../README.md) / init

# Function: init()

> **init**\<`t`\>(`params`): [`configInstance`](../type-aliases/configInstance.md)\<`t`\>

Initializes a new FijiConfig.

## Type Parameters

• **t** *extends* [`rawConfig`](../../../type-aliases/rawConfig.md)

## Parameters

• **params**: `Readonly`\<`object`\>

The configuration parameters.

## Returns

[`configInstance`](../type-aliases/configInstance.md)\<`t`\>

A new configuration instance.

## Example

```ts
const configInstance = init({ def: configDef, env: envConfig });
console.log(configInstance.$toJS()); // { ... }
```

## Defined in

[src/Config.ts:185](https://github.com/AndreyMork/fiji/blob/12b645d5d3b10e56502863abdc8c7fe71f7e6190/src/Config.ts#L185)
