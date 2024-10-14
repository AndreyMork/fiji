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

[src/Source.ts:27](https://github.com/AndreyMork/fiji/blob/fde791600000fa1e2ba950f5f939a73281ac49cc/src/Source.ts#L27)

## Properties

### isSecret

> **isSecret**: `boolean` = `false`

#### Inherited from

[`Source`](Source.md).[`isSecret`](Source.md#issecret)

#### Defined in

[src/Source.ts:17](https://github.com/AndreyMork/fiji/blob/fde791600000fa1e2ba950f5f939a73281ac49cc/src/Source.ts#L17)

***

### value

> `readonly` **value**: `t`

#### Defined in

[src/Source.ts:27](https://github.com/AndreyMork/fiji/blob/fde791600000fa1e2ba950f5f939a73281ac49cc/src/Source.ts#L27)

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

> **secret**(`value`): [`ValueSource`](ValueSource.md)\<`t`\>

#### Parameters

• **value**: `boolean` = `true`

#### Returns

[`ValueSource`](ValueSource.md)\<`t`\>

#### Inherited from

[`Source`](Source.md).[`secret`](Source.md#secret)

#### Defined in

[src/Source.ts:19](https://github.com/AndreyMork/fiji/blob/fde791600000fa1e2ba950f5f939a73281ac49cc/src/Source.ts#L19)
