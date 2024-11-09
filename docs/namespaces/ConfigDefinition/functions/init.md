[**@ayka/fiji**](../../../README.md) • **Docs**

***

[@ayka/fiji](../../../globals.md) / [ConfigDefinition](../README.md) / init

# Function: init()

> **init**\<`t`\>(`configSource`): [`ConfigDefinition`](../classes/ConfigDefinition.md)\<`t`\>

Initializes a new ConfigDefinition from a configuration source.

## Type Parameters

• **t** *extends* [`rawConfig`](../../../type-aliases/rawConfig.md)

## Parameters

• **configSource**: [`defParams`](../type-aliases/defParams.md)\<`t`\>

The configuration source, either as an object or a function.

## Returns

[`ConfigDefinition`](../classes/ConfigDefinition.md)\<`t`\>

A new ConfigDefinition instance.

## Example

```ts
// Simple definition example
const simpleConfigDef = init({ key: 'value' });
const simpleConfig = simpleConfigDef.load();
console.log(simpleConfig.$toJS()); // { key: 'value' }

// Using a function with ctx to define the configuration
const complexConfigDef = init((ctx) => ({
  port: ctx.env('PORT', ctx.z.port().default(3000)),
  apiKey: ctx.env('API_KEY', ctx.z.string()).secret(),
}));
const complexConfig = complexConfigDef.load();
console.log(complexConfig.$toJS({ hideSecrets: true })); // { port: 3000, apiKey: '<secret>' }
```

## Defined in

[src/ConfigDefinition.ts:237](https://github.com/AndreyMork/fiji/blob/12b645d5d3b10e56502863abdc8c7fe71f7e6190/src/ConfigDefinition.ts#L237)
