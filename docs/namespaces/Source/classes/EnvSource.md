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

[src/Source.ts:40](https://github.com/AndreyMork/fiji/blob/12b645d5d3b10e56502863abdc8c7fe71f7e6190/src/Source.ts#L40)

## Properties

### isSecret

> **isSecret**: `boolean` = `false`

#### Inherited from

[`Source`](Source.md).[`isSecret`](Source.md#issecret)

#### Defined in

[src/Source.ts:23](https://github.com/AndreyMork/fiji/blob/12b645d5d3b10e56502863abdc8c7fe71f7e6190/src/Source.ts#L23)

***

### name

> `readonly` **name**: `string`

#### Defined in

[src/Source.ts:41](https://github.com/AndreyMork/fiji/blob/12b645d5d3b10e56502863abdc8c7fe71f7e6190/src/Source.ts#L41)

***

### schema

> `readonly` **schema**: `t`

#### Defined in

[src/Source.ts:42](https://github.com/AndreyMork/fiji/blob/12b645d5d3b10e56502863abdc8c7fe71f7e6190/src/Source.ts#L42)

## Accessors

### $$t

#### Get Signature

> **get** **$$t**(): `t`

##### Returns

`t`

#### Inherited from

[`Source`](Source.md).[`$$t`](Source.md#$$t)

#### Defined in

[src/Source.ts:19](https://github.com/AndreyMork/fiji/blob/12b645d5d3b10e56502863abdc8c7fe71f7e6190/src/Source.ts#L19)

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

[src/Source.ts:25](https://github.com/AndreyMork/fiji/blob/12b645d5d3b10e56502863abdc8c7fe71f7e6190/src/Source.ts#L25)
