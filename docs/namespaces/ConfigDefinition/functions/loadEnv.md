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

[src/ConfigDefinition.ts:247](https://github.com/AndreyMork/fiji/blob/fde791600000fa1e2ba950f5f939a73281ac49cc/src/ConfigDefinition.ts#L247)
