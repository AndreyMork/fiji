[**@ayka/fiji**](../../../README.md) • **Docs**

***

[@ayka/fiji](../../../globals.md) / [Source](../README.md) / EnvSource

# Class: EnvSource\<t\>

## Extends

- [`Source`](Source.md)\<[`output`](../../Zod/namespaces/z/type-aliases/output.md)\<`t`\>\>

## Type Parameters

• **t** *extends* `Zod.ZodType`

## Constructors

### new EnvSource()

> **new EnvSource**\<`t`\>(`name`, `schema`): [`EnvSource`](EnvSource.md)\<`t`\>

#### Parameters

• **name**: `string`

• **schema**: `t`

#### Returns

[`EnvSource`](EnvSource.md)\<`t`\>

#### Overrides

[`Source`](Source.md).[`constructor`](Source.md#constructors)

#### Defined in

[src/Source.ts:34](https://github.com/AndreyMork/fiji/blob/fde791600000fa1e2ba950f5f939a73281ac49cc/src/Source.ts#L34)

## Properties

### isSecret

> **isSecret**: `boolean` = `false`

#### Inherited from

[`Source`](Source.md).[`isSecret`](Source.md#issecret)

#### Defined in

[src/Source.ts:17](https://github.com/AndreyMork/fiji/blob/fde791600000fa1e2ba950f5f939a73281ac49cc/src/Source.ts#L17)

***

### name

> `readonly` **name**: `string`

#### Defined in

[src/Source.ts:35](https://github.com/AndreyMork/fiji/blob/fde791600000fa1e2ba950f5f939a73281ac49cc/src/Source.ts#L35)

***

### schema

> `readonly` **schema**: `t`

#### Defined in

[src/Source.ts:36](https://github.com/AndreyMork/fiji/blob/fde791600000fa1e2ba950f5f939a73281ac49cc/src/Source.ts#L36)

## Accessors

### $$t

> `get` **$$t**(): `t`

#### Returns

`t`

#### Inherited from

[`Source`](Source.md).[`$$t`](Source.md#$$t)

#### Defined in

[src/Source.ts:13](https://github.com/AndreyMork/fiji/blob/fde791600000fa1e2ba950f5f939a73281ac49cc/src/Source.ts#L13)

## Methods

### secret()

> **secret**(`value`): [`EnvSource`](EnvSource.md)\<`t`\>

#### Parameters

• **value**: `boolean` = `true`

#### Returns

[`EnvSource`](EnvSource.md)\<`t`\>

#### Inherited from

[`Source`](Source.md).[`secret`](Source.md#secret)

#### Defined in

[src/Source.ts:19](https://github.com/AndreyMork/fiji/blob/fde791600000fa1e2ba950f5f939a73281ac49cc/src/Source.ts#L19)
