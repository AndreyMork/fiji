[**@ayka/fiji**](../../../README.md) • **Docs**

***

[@ayka/fiji](../../../globals.md) / [Source](../README.md) / ValueSource

# Class: ValueSource\<t\>

## Extends

- [`Source`](Source.md)\<`t`\>

## Type Parameters

• **t**

## Constructors

### new ValueSource()

> **new ValueSource**\<`t`\>(`value`): [`ValueSource`](ValueSource.md)\<`t`\>

#### Parameters

• **value**: `t`

#### Returns

[`ValueSource`](ValueSource.md)\<`t`\>

#### Overrides

[`Source`](Source.md).[`constructor`](Source.md#constructors)

#### Defined in

[src/Source.ts:33](https://github.com/AndreyMork/fiji/blob/12b645d5d3b10e56502863abdc8c7fe71f7e6190/src/Source.ts#L33)

## Properties

### isSecret

> **isSecret**: `boolean` = `false`

#### Inherited from

[`Source`](Source.md).[`isSecret`](Source.md#issecret)

#### Defined in

[src/Source.ts:23](https://github.com/AndreyMork/fiji/blob/12b645d5d3b10e56502863abdc8c7fe71f7e6190/src/Source.ts#L23)

***

### value

> `readonly` **value**: `t`

#### Defined in

[src/Source.ts:33](https://github.com/AndreyMork/fiji/blob/12b645d5d3b10e56502863abdc8c7fe71f7e6190/src/Source.ts#L33)

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

> **secret**(`value`): [`ValueSource`](ValueSource.md)\<`t`\>

#### Parameters

• **value**: `boolean` = `true`

#### Returns

[`ValueSource`](ValueSource.md)\<`t`\>

#### Inherited from

[`Source`](Source.md).[`secret`](Source.md#secret)

#### Defined in

[src/Source.ts:25](https://github.com/AndreyMork/fiji/blob/12b645d5d3b10e56502863abdc8c7fe71f7e6190/src/Source.ts#L25)
