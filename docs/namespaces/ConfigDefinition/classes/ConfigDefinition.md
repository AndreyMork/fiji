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

• **flatConfig**: `flatConfig`

#### Returns

[`ConfigDefinition`](ConfigDefinition.md)\<`t`\>

#### Defined in

[src/ConfigDefinition.ts:67](https://github.com/AndreyMork/fiji/blob/144c0091223d6b00e7f3dad83fbdc3098be7f48c/src/ConfigDefinition.ts#L67)

## Accessors

### $$config

> `get` **$$config**(): [`config`](../../Types/type-aliases/config.md)\<`t`\>

Exposes the types of the config.

#### Returns

[`config`](../../Types/type-aliases/config.md)\<`t`\>

#### Defined in

[src/ConfigDefinition.ts:49](https://github.com/AndreyMork/fiji/blob/144c0091223d6b00e7f3dad83fbdc3098be7f48c/src/ConfigDefinition.ts#L49)

***

### $$fijiConfig

> `get` **$$fijiConfig**(): [`FijiConfig`](../../Config/classes/FijiConfig.md)\<`t`\>

Exposes the Fiji configuration.

#### Returns

[`FijiConfig`](../../Config/classes/FijiConfig.md)\<`t`\>

#### Defined in

[src/ConfigDefinition.ts:56](https://github.com/AndreyMork/fiji/blob/144c0091223d6b00e7f3dad83fbdc3098be7f48c/src/ConfigDefinition.ts#L56)

***

### $$patch

> `get` **$$patch**(): `Partial`\<\{ \[key in string \| number \| symbol\]: t\[key\] extends Source\<r\> ? configValue\<r\> : t\[key\] extends any\[\] ? configValue\<any\[any\]\> : t\[key\] extends rawConfig ? Partial\<\{ \[key in string \| number \| symbol\]: any\[any\]\[key\] extends Source\<r\> ? configValue\<r\> : any\[any\]\[key\] extends any\[\] ? configValue\<(...)\[(...)\]\> : (...)\[(...)\] extends rawConfig ? Partial\<(...)\> : configValue\<(...)\> \}\> : configValue\<t\[key\]\> \}\>

Exposes the patch type.

#### Returns

`Partial`\<\{ \[key in string \| number \| symbol\]: t\[key\] extends Source\<r\> ? configValue\<r\> : t\[key\] extends any\[\] ? configValue\<any\[any\]\> : t\[key\] extends rawConfig ? Partial\<\{ \[key in string \| number \| symbol\]: any\[any\]\[key\] extends Source\<r\> ? configValue\<r\> : any\[any\]\[key\] extends any\[\] ? configValue\<(...)\[(...)\]\> : (...)\[(...)\] extends rawConfig ? Partial\<(...)\> : configValue\<(...)\> \}\> : configValue\<t\[key\]\> \}\>

#### Defined in

[src/ConfigDefinition.ts:63](https://github.com/AndreyMork/fiji/blob/144c0091223d6b00e7f3dad83fbdc3098be7f48c/src/ConfigDefinition.ts#L63)

***

### envs

> `get` **envs**(): `FlatObject`\<[`EnvSource`](../../Source/classes/EnvSource.md)\<`any`\>\>

Lazily retrieves the environment variables from the configuration.

#### Returns

`FlatObject`\<[`EnvSource`](../../Source/classes/EnvSource.md)\<`any`\>\>

#### Defined in

[src/ConfigDefinition.ts:85](https://github.com/AndreyMork/fiji/blob/144c0091223d6b00e7f3dad83fbdc3098be7f48c/src/ConfigDefinition.ts#L85)

***

### sources

> `get` **sources**(): `FlatObject`\<[`ValueSource`](../../Source/classes/ValueSource.md)\<`any`\> \| [`EnvSource`](../../Source/classes/EnvSource.md)\<`any`\>\>

#### Returns

`FlatObject`\<[`ValueSource`](../../Source/classes/ValueSource.md)\<`any`\> \| [`EnvSource`](../../Source/classes/EnvSource.md)\<`any`\>\>

#### Defined in

[src/ConfigDefinition.ts:92](https://github.com/AndreyMork/fiji/blob/144c0091223d6b00e7f3dad83fbdc3098be7f48c/src/ConfigDefinition.ts#L92)

***

### values

> `get` **values**(): `FlatObject`\<[`ValueSource`](../../Source/classes/ValueSource.md)\<`any`\>\>

Lazily retrieves the values from the configuration.

#### Returns

`FlatObject`\<[`ValueSource`](../../Source/classes/ValueSource.md)\<`any`\>\>

#### Defined in

[src/ConfigDefinition.ts:75](https://github.com/AndreyMork/fiji/blob/144c0091223d6b00e7f3dad83fbdc3098be7f48c/src/ConfigDefinition.ts#L75)

***

### znvSchema

> `get` **znvSchema**(): `Record`\<`string`, `ZodType`\<`any`, [`ZodTypeDef`](../../Zod/namespaces/z/interfaces/ZodTypeDef.md), `any`\>\>

#### Returns

`Record`\<`string`, `ZodType`\<`any`, [`ZodTypeDef`](../../Zod/namespaces/z/interfaces/ZodTypeDef.md), `any`\>\>

#### Defined in

[src/ConfigDefinition.ts:97](https://github.com/AndreyMork/fiji/blob/144c0091223d6b00e7f3dad83fbdc3098be7f48c/src/ConfigDefinition.ts#L97)

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

[src/ConfigDefinition.ts:134](https://github.com/AndreyMork/fiji/blob/144c0091223d6b00e7f3dad83fbdc3098be7f48c/src/ConfigDefinition.ts#L134)

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

[src/ConfigDefinition.ts:190](https://github.com/AndreyMork/fiji/blob/144c0091223d6b00e7f3dad83fbdc3098be7f48c/src/ConfigDefinition.ts#L190)

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

[src/ConfigDefinition.ts:174](https://github.com/AndreyMork/fiji/blob/144c0091223d6b00e7f3dad83fbdc3098be7f48c/src/ConfigDefinition.ts#L174)

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

[src/ConfigDefinition.ts:119](https://github.com/AndreyMork/fiji/blob/144c0091223d6b00e7f3dad83fbdc3098be7f48c/src/ConfigDefinition.ts#L119)

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

[src/ConfigDefinition.ts:157](https://github.com/AndreyMork/fiji/blob/144c0091223d6b00e7f3dad83fbdc3098be7f48c/src/ConfigDefinition.ts#L157)
