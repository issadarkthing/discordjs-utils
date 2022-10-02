[@jiman24/discordjs-utils](README.md) / Exports

# @jiman24/discordjs-utils

## Table of contents

### Variables

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

### random

• `Const` **random**: `Random`

Random functions helpers

#### Defined in

[index.ts:70](https://github.com/issadarkthing/discordjs-utils/blob/33b1278/src/index.ts#L70)

___

### time

• `Const` **time**: `Time`

Time in milliseconds

#### Defined in

[index.ts:170](https://github.com/issadarkthing/discordjs-utils/blob/33b1278/src/index.ts#L170)

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

[index.ts:200](https://github.com/issadarkthing/discordjs-utils/blob/33b1278/src/index.ts#L200)

___

### aggregateByKey

▸ **aggregateByKey**<`T`, `K`\>(`items`, `key`): `Map`<`T`[`K`], { `count`: `number` ; `value`: `T`  }\>

Aggregates item by key and count. It returns an object of 
`{ value: Value, key: Key }`

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

[index.ts:177](https://github.com/issadarkthing/discordjs-utils/blob/33b1278/src/index.ts#L177)

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

[index.ts:10](https://github.com/issadarkthing/discordjs-utils/blob/33b1278/src/index.ts#L10)

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

[index.ts:156](https://github.com/issadarkthing/discordjs-utils/blob/33b1278/src/index.ts#L156)

___

### clamp

▸ **clamp**(`min`, `max`, `value`): `number`

Clamps number between min and max numbers
```ts
clamp(10, 20, 15) // 15
clamp(10, 20, 35) // 20
clamp(10, 20, 5) // 10
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[index.ts:247](https://github.com/issadarkthing/discordjs-utils/blob/33b1278/src/index.ts#L247)

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

[index.ts:15](https://github.com/issadarkthing/discordjs-utils/blob/33b1278/src/index.ts#L15)

___

### compact

▸ **compact**(`num`): `string`

Converts number into short representation
```ts
compact(12_494) // "12.5k"
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |

#### Returns

`string`

#### Defined in

[index.ts:211](https://github.com/issadarkthing/discordjs-utils/blob/33b1278/src/index.ts#L211)

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

[index.ts:20](https://github.com/issadarkthing/discordjs-utils/blob/33b1278/src/index.ts#L20)

___

### formatPercent

▸ **formatPercent**(`num`): `string`

Formats number into percentage

**`Example`**

```ts
formatPercent(0.253111) // "25.31%"
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |

#### Returns

`string`

#### Defined in

[index.ts:28](https://github.com/issadarkthing/discordjs-utils/blob/33b1278/src/index.ts#L28)

___

### progressBar

▸ **progressBar**(`progress`, `maxProgress`, `length?`): `string`

Creates progressbar using string
```ts
progressBar(10, 20, 10) // "█████░░░░░ [10/20]"
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `progress` | `number` | `undefined` |
| `maxProgress` | `number` | `undefined` |
| `length` | `number` | `20` |

#### Returns

`string`

#### Defined in

[index.ts:220](https://github.com/issadarkthing/discordjs-utils/blob/33b1278/src/index.ts#L220)

___

### remove

▸ **remove**<`T`\>(`item`, `arr`, `count?`): `T`[]

Removes N number of items from an array. Returns new array, passed array
remains unchanged. This compares item using `===` equality. You should only
use this when items are primitives.

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

[index.ts:147](https://github.com/issadarkthing/discordjs-utils/blob/33b1278/src/index.ts#L147)

___

### removeById

▸ **removeById**<`T`\>(`arr`, `value`, `count?`): `T`[]

Removes item from array using "id" as key 
```ts
const items = [
 { id: "weapon" }, 
 { id: "weapon" }, 
 { id: "potion" },
];

const updatedItems = removeById(items, "weapon");
console.log(updatedItems) // [{ id: "weapon" }, { id: "potion" }]
```

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

[index.ts:127](https://github.com/issadarkthing/discordjs-utils/blob/33b1278/src/index.ts#L127)

___

### removeByKey

▸ **removeByKey**<`T`, `K`, `V`\>(`arr`, `key`, `value`, `count?`): `T`[]

Removes item from array using key
```ts
const items = [
 { id: "weapon" }, 
 { id: "weapon" }, 
 { id: "potion" },
];

const updatedItems = removeByKey(items, "id", "weapon");
console.log(updatedItems) // [{ id: "weapon" }, { id: "potion" }]
```

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

[index.ts:93](https://github.com/issadarkthing/discordjs-utils/blob/33b1278/src/index.ts#L93)

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

[index.ts:73](https://github.com/issadarkthing/discordjs-utils/blob/33b1278/src/index.ts#L73)

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

[index.ts:4](https://github.com/issadarkthing/discordjs-utils/blob/33b1278/src/index.ts#L4)

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

[index.ts:53](https://github.com/issadarkthing/discordjs-utils/blob/33b1278/src/index.ts#L53)

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

[index.ts:64](https://github.com/issadarkthing/discordjs-utils/blob/33b1278/src/index.ts#L64)

___

### validateNumber

▸ **validateNumber**(`amount`): `void`

Validates passed number is a valid number and not NaN
```ts
validateNumber(null) // throws an error
validateNumber(NaN) // throws an error
validateNumber("10") // throws an error
validateNumber(10.3) // nothing
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

`void`

#### Defined in

[index.ts:43](https://github.com/issadarkthing/discordjs-utils/blob/33b1278/src/index.ts#L43)
