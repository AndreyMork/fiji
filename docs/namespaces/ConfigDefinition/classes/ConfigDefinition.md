[**@ayka/fiji**](../../../README.md) • **Docs**

***

[@ayka/fiji](../../../globals.md) / [ConfigDefinition](../README.md) / ConfigDefinition

# Class: ConfigDefinition\<t\>

## Type Parameters

• **t** *extends* [`rawConfig`](../../../type-aliases/rawConfig.md)

## Constructors

### new ConfigDefinition()

> **new ConfigDefinition**\<`t`\>(`flatConfig`): [`ConfigDefinition`](ConfigDefinition.md)\<`t`\>

#### Parameters

• **flatConfig**: [`flatConfig`](../type-aliases/flatConfig.md)

#### Returns

[`ConfigDefinition`](ConfigDefinition.md)\<`t`\>

#### Defined in

[src/ConfigDefinition.ts:68](https://github.com/AndreyMork/fiji/blob/12b645d5d3b10e56502863abdc8c7fe71f7e6190/src/ConfigDefinition.ts#L68)

## Accessors

### $$config

#### Get Signature

> **get** **$$config**(): [`config`](../../Types/type-aliases/config.md)\<`t`\>

Exposes the types of the config.

##### Returns

[`config`](../../Types/type-aliases/config.md)\<`t`\>

#### Defined in

[src/ConfigDefinition.ts:50](https://github.com/AndreyMork/fiji/blob/12b645d5d3b10e56502863abdc8c7fe71f7e6190/src/ConfigDefinition.ts#L50)

***

### $$fijiConfig

#### Get Signature

> **get** **$$fijiConfig**(): [`FijiConfig`](../../Config/classes/FijiConfig.md)\<`t`\>

Exposes the Fiji configuration.

##### Returns

[`FijiConfig`](../../Config/classes/FijiConfig.md)\<`t`\>

#### Defined in

[src/ConfigDefinition.ts:57](https://github.com/AndreyMork/fiji/blob/12b645d5d3b10e56502863abdc8c7fe71f7e6190/src/ConfigDefinition.ts#L57)

***

### $$patch

#### Get Signature

> **get** **$$patch**(): `Partial`\<\{ \[key in string \| number \| symbol\]: t\[key\] extends Source\<r\> ? configValue\<r\> : t\[key\] extends any\[\] ? configValue\<any\[any\]\> : t\[key\] extends rawConfig ? Partial\<\{ \[key in string \| number \| symbol\]: any\[any\]\[key\] extends Source\<r\> ? configValue\<r\> : any\[any\]\[key\] extends any\[\] ? configValue\<(...)\[(...)\]\> : (...)\[(...)\] extends rawConfig ? Partial\<(...)\> : configValue\<(...)\> \}\> : configValue\<t\[key\]\> \}\>

Exposes the patch type.

##### Returns

`Partial`\<\{ \[key in string \| number \| symbol\]: t\[key\] extends Source\<r\> ? configValue\<r\> : t\[key\] extends any\[\] ? configValue\<any\[any\]\> : t\[key\] extends rawConfig ? Partial\<\{ \[key in string \| number \| symbol\]: any\[any\]\[key\] extends Source\<r\> ? configValue\<r\> : any\[any\]\[key\] extends any\[\] ? configValue\<(...)\[(...)\]\> : (...)\[(...)\] extends rawConfig ? Partial\<(...)\> : configValue\<(...)\> \}\> : configValue\<t\[key\]\> \}\>

#### Defined in

[src/ConfigDefinition.ts:64](https://github.com/AndreyMork/fiji/blob/12b645d5d3b10e56502863abdc8c7fe71f7e6190/src/ConfigDefinition.ts#L64)

***

### envs

#### Get Signature

> **get** **envs**(): `FlatObject`\<[`EnvSource`](../../Source/classes/EnvSource.md)\<`any`\>\>

Lazily retrieves the environment variables from the configuration.

##### Returns

`FlatObject`\<[`EnvSource`](../../Source/classes/EnvSource.md)\<`any`\>\>

#### Defined in

[src/ConfigDefinition.ts:86](https://github.com/AndreyMork/fiji/blob/12b645d5d3b10e56502863abdc8c7fe71f7e6190/src/ConfigDefinition.ts#L86)

***

### sources

#### Get Signature

> **get** **sources**(): `FlatObject`\<[`ValueSource`](../../Source/classes/ValueSource.md)\<`any`\> \| [`EnvSource`](../../Source/classes/EnvSource.md)\<`any`\>\>

##### Returns

`FlatObject`\<[`ValueSource`](../../Source/classes/ValueSource.md)\<`any`\> \| [`EnvSource`](../../Source/classes/EnvSource.md)\<`any`\>\>

#### Defined in

[src/ConfigDefinition.ts:93](https://github.com/AndreyMork/fiji/blob/12b645d5d3b10e56502863abdc8c7fe71f7e6190/src/ConfigDefinition.ts#L93)

***

### values

#### Get Signature

> **get** **values**(): `FlatObject`\<[`ValueSource`](../../Source/classes/ValueSource.md)\<`any`\>\>

Lazily retrieves the values from the configuration.

##### Returns

`FlatObject`\<[`ValueSource`](../../Source/classes/ValueSource.md)\<`any`\>\>

#### Defined in

[src/ConfigDefinition.ts:76](https://github.com/AndreyMork/fiji/blob/12b645d5d3b10e56502863abdc8c7fe71f7e6190/src/ConfigDefinition.ts#L76)

***

### znvSchema

#### Get Signature

> **get** **znvSchema**(): `Record`\<`string`, `ZodType`\<`any`, [`ZodTypeDef`](../../Zod/namespaces/z/interfaces/ZodTypeDef.md), `any`\>\>

##### Returns

`Record`\<`string`, `ZodType`\<`any`, [`ZodTypeDef`](../../Zod/namespaces/z/interfaces/ZodTypeDef.md), `any`\>\>

#### Defined in

[src/ConfigDefinition.ts:98](https://github.com/AndreyMork/fiji/blob/12b645d5d3b10e56502863abdc8c7fe71f7e6190/src/ConfigDefinition.ts#L98)

## Methods

### asClass()

> **asClass**(): [`configClassConstructor`](../type-aliases/configClassConstructor.md)\<`t`\>

Converts the configuration definition to a class constructor.
Useful for dependency injection in frameworks like NestJS.

#### Returns

[`configClassConstructor`](../type-aliases/configClassConstructor.md)\<`t`\>

A class constructor for the configuration.

#### Example

```ts
class Config extends configDef.asClass() {};
const config = new Config({ envFiles: ['.env'] });
console.log(config.$toJS()); // { ... }
```

#### Defined in

[src/ConfigDefinition.ts:139](https://github.com/AndreyMork/fiji/blob/12b645d5d3b10e56502863abdc8c7fe71f7e6190/src/ConfigDefinition.ts#L139)

***

### clone()

> **clone**(): [`ConfigDefinition`](ConfigDefinition.md)\<`t`\>

Clones the current configuration definition.

#### Returns

[`ConfigDefinition`](ConfigDefinition.md)\<`t`\>

A new ConfigDefinition that is a clone of the current one.

#### Example

```ts
const clonedConfig = configDef.clone();
const config = clonedConfig.load();
console.log(config.$toJS()); // { ... }
```

#### Defined in

[src/ConfigDefinition.ts:195](https://github.com/AndreyMork/fiji/blob/12b645d5d3b10e56502863abdc8c7fe71f7e6190/src/ConfigDefinition.ts#L195)

***

### extend()

> **extend**\<`r`\>(`extensionDef`): [`ConfigDefinition`](ConfigDefinition.md)\<[`extension`](../../../type-aliases/extension.md)\<`t`, `r`\>\>

Extends the configuration with additional definitions.

#### Type Parameters

• **r** *extends* [`rawConfig`](../../../type-aliases/rawConfig.md)

#### Parameters

• **extensionDef**: [`defParams`](../type-aliases/defParams.md)\<`r`\>

The extension definition, either as an object or a function.

#### Returns

[`ConfigDefinition`](ConfigDefinition.md)\<[`extension`](../../../type-aliases/extension.md)\<`t`, `r`\>\>

A new ConfigDefinition with the extension applied.

#### Example

```ts
const extendedConfig = configDef.extend({ additionalKey: 'additionalValue' });
const config = extendedConfig.load();
console.log(config.$toJS()); // { additionalKey: 'additionalValue', ... }
```

#### Defined in

[src/ConfigDefinition.ts:179](https://github.com/AndreyMork/fiji/blob/12b645d5d3b10e56502863abdc8c7fe71f7e6190/src/ConfigDefinition.ts#L179)

***

### load()

> **load**(`opts`?): [`configInstance`](../../Config/type-aliases/configInstance.md)\<`t`\>

Loads the configuration instance.

#### Parameters

• **opts?**: [`loadOpts`](../type-aliases/loadOpts.md)\<`t`\>

Optional load options.

#### Returns

[`configInstance`](../../Config/type-aliases/configInstance.md)\<`t`\>

The loaded configuration instance.

#### Example

```ts
const def = Fiji.init((ctx) => ({
  port: ctx.env('PORT', ctx.zod.number().default(3000)),
  dbUrl: ctx.env('DATABASE_URL', ctx.zod.string().url()),
}));
const config = def.load();
console.log(config.$toJS()); // { port: 3000, dbUrl: '...' }
```

#### Defined in

[src/ConfigDefinition.ts:120](https://github.com/AndreyMork/fiji/blob/12b645d5d3b10e56502863abdc8c7fe71f7e6190/src/ConfigDefinition.ts#L120)

***

### makeLoader()

> **makeLoader**(): (`opts`?) => [`configInstance`](../../Config/type-aliases/configInstance.md)\<`t`\>

#### Returns

`Function`

##### Parameters

• **opts?**: [`loadOpts`](../type-aliases/loadOpts.md)\<`t`\>

##### Returns

[`configInstance`](../../Config/type-aliases/configInstance.md)\<`t`\>

#### Defined in

[src/ConfigDefinition.ts:126](https://github.com/AndreyMork/fiji/blob/12b645d5d3b10e56502863abdc8c7fe71f7e6190/src/ConfigDefinition.ts#L126)

***

### patch()

> **patch**(`patch`): [`ConfigDefinition`](ConfigDefinition.md)\<`t`\>

Applies a patch to the configuration.

#### Parameters

• **patch**: `Partial`\<\{ \[key in string \| number \| symbol\]: t\[key\] extends Source\<r\> ? configValue\<r\> : t\[key\] extends any\[\] ? configValue\<any\[any\]\> : t\[key\] extends rawConfig ? Partial\<\{ \[key in string \| number \| symbol\]: any\[any\]\[key\] extends Source\<r\> ? configValue\<r\> : (...)\[(...)\] extends (...)\[\] ? configValue\<(...)\> : (...) extends (...) ? (...) : (...) \}\> : configValue\<t\[key\]\> \}\> \| (`ctx`) => `Partial`\<\{ \[key in string \| number \| symbol\]: t\[key\] extends Source\<r\> ? configValue\<r\> : t\[key\] extends any\[\] ? configValue\<any\[any\]\> : t\[key\] extends rawConfig ? Partial\<\{ \[key in string \| number \| symbol\]: (...)\[(...)\] extends Source\<(...)\> ? configValue\<(...)\> : (...) extends (...) ? (...) : (...) \}\> : configValue\<t\[key\]\> \}\>

The patch to apply, either as an object or a function.

#### Returns

[`ConfigDefinition`](ConfigDefinition.md)\<`t`\>

A new ConfigDefinition with the patch applied.

#### Example

```ts
const patchedConfig = configDef.patch({ newKey: 'newValue' });
const config = patchedConfig.load();
console.log(config.$toJS()); // { newKey: 'newValue', ... }
```

#### Defined in

[src/ConfigDefinition.ts:162](https://github.com/AndreyMork/fiji/blob/12b645d5d3b10e56502863abdc8c7fe71f7e6190/src/ConfigDefinition.ts#L162)
