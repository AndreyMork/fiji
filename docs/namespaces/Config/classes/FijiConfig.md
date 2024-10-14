[**@ayka/fiji**](../../../README.md) • **Docs**

***

[@ayka/fiji](../../../globals.md) / [Config](../README.md) / FijiConfig

# Class: FijiConfig\<t\>

## Type Parameters

• **t** *extends* [`rawConfig`](../../../type-aliases/rawConfig.md)

## Constructors

### new FijiConfig()

> **new FijiConfig**\<`t`\>(`params`): [`FijiConfig`](FijiConfig.md)\<`t`\>

Constructs a new FijiConfig.

#### Parameters

• **params**: `Readonly`\<`object`\>

The configuration parameters.

#### Returns

[`FijiConfig`](FijiConfig.md)\<`t`\>

#### Defined in

[src/Config.ts:34](https://github.com/AndreyMork/fiji/blob/fde791600000fa1e2ba950f5f939a73281ac49cc/src/Config.ts#L34)

## Accessors

### $def

> `get` **$def**(): [`ConfigDefinition`](../../ConfigDefinition/classes/ConfigDefinition.md)\<`t`\>

Gets the configuration definition.

#### Returns

[`ConfigDefinition`](../../ConfigDefinition/classes/ConfigDefinition.md)\<`t`\>

#### Defined in

[src/Config.ts:42](https://github.com/AndreyMork/fiji/blob/fde791600000fa1e2ba950f5f939a73281ac49cc/src/Config.ts#L42)

***

### $env

> `get` **$env**(): [`Env`](../../Env/classes/Env.md)

Gets the environment configuration.

#### Returns

[`Env`](../../Env/classes/Env.md)

#### Defined in

[src/Config.ts:49](https://github.com/AndreyMork/fiji/blob/fde791600000fa1e2ba950f5f939a73281ac49cc/src/Config.ts#L49)

***

### $parsedEnv

> `get` **$parsedEnv**(): `object`

Gets the parsed environment variables.

#### Returns

`object`

#### Defined in

[src/Config.ts:56](https://github.com/AndreyMork/fiji/blob/fde791600000fa1e2ba950f5f939a73281ac49cc/src/Config.ts#L56)

## Methods

### $envInfo()

> **$envInfo**(`opts`?): `object`

Provides detailed information about the environment configuration.
This includes which variables are loaded, defaulted, missing, patched, and unused.

#### Parameters

• **opts?**

Options for displaying unused variables.

• **opts.showUnused?**: `boolean`

#### Returns

`object`

An object containing arrays of environment variable names categorized by their status.

##### defaulted

> **defaulted**: `string`[]

##### loaded

> **loaded**: `string`[]

##### missing

> **missing**: `string`[]

##### patched

> **patched**: `string`[]

##### unused

> **unused**: `string`[]

#### Example

```ts
const envInfo = configInstance.$envInfo({ showUnused: true });
console.log(envInfo); // { loaded: ['PORT'], defaulted: ['API_KEY'], missing: [], patched: ['HOST'], unused: ['UNUSED_VAR'] }
```

#### Defined in

[src/Config.ts:130](https://github.com/AndreyMork/fiji/blob/fde791600000fa1e2ba950f5f939a73281ac49cc/src/Config.ts#L130)

***

### $load()

> **$load**(): [`FijiConfig`](FijiConfig.md)\<`t`\>

Loads the configuration, parsing environment variables and applying any patches.
This method should be called to initialize the configuration with the current environment state.

#### Returns

[`FijiConfig`](FijiConfig.md)\<`t`\>

The loaded configuration instance, ready for use.

#### Example

```ts
const config = configInstance.$load();
console.log(config.$toJS()); // { key: 'value', ... }
```

#### Defined in

[src/Config.ts:98](https://github.com/AndreyMork/fiji/blob/fde791600000fa1e2ba950f5f939a73281ac49cc/src/Config.ts#L98)

***

### $toJS()

> **$toJS**(`opts`?): [`config`](../../Types/type-aliases/config.md)\<`t`\>

Converts the configuration to a JavaScript object.

#### Parameters

• **opts?**: `Readonly`\<`object`\>

Options for conversion, such as hiding secret values.

#### Returns

[`config`](../../Types/type-aliases/config.md)\<`t`\>

The configuration as a plain JavaScript object, with secrets optionally masked.

#### Example

```ts
const config = configInstance.$toJS({ hideSecrets: true });
console.log(config); // { key: 'value', secretKey: '#secret#' }
```

#### Defined in

[src/Config.ts:68](https://github.com/AndreyMork/fiji/blob/fde791600000fa1e2ba950f5f939a73281ac49cc/src/Config.ts#L68)
