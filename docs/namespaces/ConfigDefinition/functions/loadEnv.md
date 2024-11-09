[**@ayka/fiji**](../../../README.md) • **Docs**

***

[@ayka/fiji](../../../globals.md) / [ConfigDefinition](../README.md) / loadEnv

# Function: loadEnv()

> **loadEnv**(`opts`?): [`Env`](../../Env/classes/Env.md)

Creates an environment configuration.

## Parameters

• **opts?**: `Readonly`\<`object`\>

Optional load options.

## Returns

[`Env`](../../Env/classes/Env.md)

An environment configuration.

## Example

```ts
const envConfig = env({ envSource: 'test' });
console.log(envConfig.toJS()); // { ... }
```

## Defined in

[src/ConfigDefinition.ts:252](https://github.com/AndreyMork/fiji/blob/12b645d5d3b10e56502863abdc8c7fe71f7e6190/src/ConfigDefinition.ts#L252)
