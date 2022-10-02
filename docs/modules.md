[@jiman24/discordjs-utils](README.md) / Exports

# @jiman24/discordjs-utils

## Table of contents

### Variables

- [BLACK\_BUTTON](modules.md#black_button)
- [BLUE\_BUTTON](modules.md#blue_button)
- [RED\_BUTTON](modules.md#red_button)
- [WHITE\_BUTTON](modules.md#white_button)
- [random](modules.md#random)
- [time](modules.md#time)

### Functions

- [aggregateById](modules.md#aggregatebyid)
- [aggregateByKey](modules.md#aggregatebykey)
- [bold](modules.md#bold)
- [cap](modules.md#cap)
- [clamp](modules.md#clamp)
- [code](modules.md#code)
- [compact](modules.md#compact)
- [formatFloat](modules.md#formatfloat)
- [formatPercent](modules.md#formatpercent)
- [progressBar](modules.md#progressbar)
- [remove](modules.md#remove)
- [removeById](modules.md#removebyid)
- [removeByKey](modules.md#removebykey)
- [sleep](modules.md#sleep)
- [toNList](modules.md#tonlist)
- [validateAmount](modules.md#validateamount)
- [validateIndex](modules.md#validateindex)
- [validateNumber](modules.md#validatenumber)

## Variables

### BLACK\_BUTTON

• `Const` **BLACK\_BUTTON**: ``"⚫"``

#### Defined in

index.ts:6

___

### BLUE\_BUTTON

• `Const` **BLUE\_BUTTON**: ``"🔵"``

#### Defined in

index.ts:3

___

### RED\_BUTTON

• `Const` **RED\_BUTTON**: ``"🔴"``

#### Defined in

index.ts:5

___

### WHITE\_BUTTON

• `Const` **WHITE\_BUTTON**: ``"⚪"``

#### Defined in

index.ts:4

___

### random

• `Const` **random**: `Random`

Random functions helpers

#### Defined in

index.ts:65

___

### time

• `Const` **time**: `Time`

Time in milliseconds

#### Defined in

index.ts:140

## Functions

### aggregateById

▸ **aggregateById**<`T`\>(`items`): `Map`<`T`[``"id"``], { `count`: `number` ; `value`: `T`  }\>

Aggregates items by id: string

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | `T`[] |

#### Returns

`Map`<`T`[``"id"``], { `count`: `number` ; `value`: `T`  }\>

#### Defined in

index.ts:170

___

### aggregateByKey

▸ **aggregateByKey**<`T`, `K`\>(`items`, `key`): `Map`<`T`[`K`], { `count`: `number` ; `value`: `T`  }\>

Aggregates item by key and count. It returns an object of 
{ value: Value, key: Key }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | `T`[] |
| `key` | `K` |

#### Returns

`Map`<`T`[`K`], { `count`: `number` ; `value`: `T`  }\>

#### Defined in

index.ts:147

___

### bold

▸ **bold**(`str`): `string`

Formats argument into discord's bold formatting

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` \| `number` |

#### Returns

`string`

#### Defined in

index.ts:16

___

### cap

▸ **cap**(`str`): `string`

Capitalize string

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

index.ts:126

___

### clamp

▸ **clamp**(`min`, `max`, `value`): `number`

Clamps number between min and max numbers

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |
| `value` | `number` |

#### Returns

`number`

#### Defined in

index.ts:207

___

### code

▸ **code**(`str`): `string`

Formats argument into discord's inline code formatting

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` \| `number` |

#### Returns

`string`

#### Defined in

index.ts:21

___

### compact

▸ **compact**(`num`): `string`

Converts number into short representation

**`Example`**

```ts
12_494 # 12.5k
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |

#### Returns

`string`

#### Defined in

index.ts:179

___

### formatFloat

▸ **formatFloat**(`num`): `string`

Formates number into .1 precision float

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |

#### Returns

`string`

#### Defined in

index.ts:26

___

### formatPercent

▸ **formatPercent**(`num`): `string`

Formats number into percentage

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |

#### Returns

`string`

#### Defined in

index.ts:31

___

### progressBar

▸ **progressBar**(`progress`, `maxProgress`, `length?`): `string`

Creates progressbar using string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `progress` | `number` | `undefined` |
| `maxProgress` | `number` | `undefined` |
| `length` | `number` | `20` |

#### Returns

`string`

#### Defined in

index.ts:185

___

### remove

▸ **remove**<`T`\>(`item`, `arr`, `count?`): `T`[]

Removes N number of items from an array. Returns new array, passed array
remains unchanged.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `item` | `T` | `undefined` |
| `arr` | `T`[] | `undefined` |
| `count` | `number` | `1` |

#### Returns

`T`[]

#### Defined in

index.ts:117

___

### removeById

▸ **removeById**<`T`\>(`arr`, `value`, `count?`): `T`[]

Removes item from array using "id" as key

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `arr` | `T`[] | `undefined` |
| `value` | `string` | `undefined` |
| `count` | `number` | `1` |

#### Returns

`T`[]

#### Defined in

index.ts:98

___

### removeByKey

▸ **removeByKey**<`T`, `K`, `V`\>(`arr`, `key`, `value`, `count?`): `T`[]

Removes item from array using key

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends `string` \| `number` \| `symbol` |
| `V` | `V` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `arr` | `T`[] | `undefined` |
| `key` | `K` | `undefined` |
| `value` | `V` | `undefined` |
| `count` | `number` | `1` |

#### Returns

`T`[]

#### Defined in

index.ts:76

___

### sleep

▸ **sleep**(`time`): `Promise`<`unknown`\>

Async sleep for N milliseconds

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

index.ts:68

___

### toNList

▸ **toNList**(`items`, `start?`): `string`

Formats an array of string into a list with specified index (default to 1)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `items` | `string`[] | `undefined` |
| `start` | `number` | `1` |

#### Returns

`string`

#### Defined in

index.ts:10

___

### validateAmount

▸ **validateAmount**(`amount`, `balance`): `void`

Validates the number passed is not zero and does not exceed balance

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |
| `balance` | `number` |

#### Returns

`void`

#### Defined in

index.ts:48

___

### validateIndex

▸ **validateIndex**<`T`\>(`index`, `arr`): `void`

Validates the number passed is a valid index in an array

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `arr` | `T`[] |

#### Returns

`void`

#### Defined in

index.ts:59

___

### validateNumber

▸ **validateNumber**(`amount`): `void`

Validates passed number is a valid number and not NaN

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

`void`

#### Defined in

index.ts:38
