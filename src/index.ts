import { MersenneTwister19937, Random } from "random-js"

/** Formats an array of string into a list with specified index (default to 1) */
export function toNList(items: string[], start = 1) {
  if (items.length < 0) return "none";
  return items.map((x, i) => `${i + start}. ${x}`).join("\n");
}

/** Formats argument into discord's bold formatting */
export function bold(str: string | number) {
  return `**${str}**`;
}

/** Formats argument into discord's inline code formatting */
export function code(str: string | number) {
  return `\`${str}\``;
}

/** Formates number into .1 precision float */
export function formatFloat(num: number) {
  return num.toFixed(1);
}

/** 
 * Formats number into percentage
 * @example formatPercent(0.253111) // "25.31%"
 * */
export function formatPercent(num: number) {
  return `${(num * 100).toFixed(2)}%`
}

class InvalidNumber extends Error {}

/** 
 * Validates passed number is a valid number and not NaN
 * ```ts
 * validateNumber(null) // throws an error
 * validateNumber(NaN) // throws an error
 * validateNumber("10") // throws an error
 * validateNumber(10.3) // nothing
 * ```
 * */
export function validateNumber(amount: number) {
  if (Number.isNaN(amount)) {
    throw new InvalidNumber("not a valid number");
  }
}

class InsufficientBalance extends Error {}
class ZeroAmount extends Error {}

/** Validates the number passed is not zero and does not exceed balance */
export function validateAmount(amount: number, balance: number) {
  if (amount > balance) {
    throw new InsufficientBalance("insufficient balance");
  } else if (amount <= 0) {
    throw new ZeroAmount("zero amount is not allowed");
  }
}

class InvalidIndex extends Error {}

/** Validates the number passed is a valid index in an array */
export function validateIndex<T>(index: number, arr: T[]) {
  if (index < 0 || index > arr.length - 1) 
    throw new InvalidIndex(`cannot find item in index ${index + 1}`);
}

/** Random functions helpers */
export const random = new Random(MersenneTwister19937.autoSeed());

/** Async sleep for N milliseconds */
export function sleep(time: number) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  })
}


/** 
 * Removes item from array using key
 * ```ts
 * const items = [
 *  { id: "weapon" }, 
 *  { id: "weapon" }, 
 *  { id: "potion" },
 * ];
 *
 * const updatedItems = removeByKey(items, "id", "weapon");
 * console.log(updatedItems) // [{ id: "weapon" }, { id: "potion" }]
 * ```
 * */
export function removeByKey<
  T, 
  K extends keyof T, 
  V extends T[K],
  >(arr: T[], key: K, value: V, count = 1) {
  const result = [] as T[];
  let deletedCount = 0;

  for (const item of arr) {

    if (item[key] === value && deletedCount < count) {
      deletedCount++;
      continue
    }

    result.push(item);
  }

  return result;
}

/** 
 * Removes item from array using "id" as key 
 * ```ts
 * const items = [
 *  { id: "weapon" }, 
 *  { id: "weapon" }, 
 *  { id: "potion" },
 * ];
 *
 * const updatedItems = removeById(items, "weapon");
 * console.log(updatedItems) // [{ id: "weapon" }, { id: "potion" }]
 * ```
 * */
export function removeById<T extends { id: string }>(arr: T[], value: string, count = 1) {
  return removeByKey(arr, "id", value, count);
}

function remove1<T>(item: T, arr: T[]) {
  const copy = [...arr];
  const index = copy.findIndex(x => x === item);

  if (index !== undefined) {
    copy.splice(index, 1);
  }

  return copy;
}

/** 
 * Removes N number of items from an array. Returns new array, passed array
 * remains unchanged. This compares item using `===` equality. You should only
 * use this when items are primitives.
 * */
export function remove<T>(item: T, arr: T[], count = 1) {
  for (let i = 0; i < count; i++) {
    arr = remove1(item, arr);
  }

  return arr;
}

/** Capitalize string */
export function cap(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}

/** Represents time */
class Time {
  SECOND = 1000;
  MINUTE = 60 * this.SECOND;
  HOUR = 60 * this.MINUTE;
  DAY = 24 * this.HOUR;
  WEEK = 7 * this.DAY;
}

/** Time in milliseconds */
export const time = new Time();


/** 
 * Aggregates item by key and count. It returns an object of 
 * `{ value: Value, key: Key }`
 * */
export function aggregateByKey<T, K extends keyof T>(items: T[], key: K) {

  const records = new Map<T[K], { count: number, value: T }>();

  for (const item of items) {

    const id = item[key];
    const record = records.get(id);

    if (record) {
      record.count++;
    } else {
      records.set(id, { count: 1, value: item });
    }

  }

  return records;
}

/** 
 * Aggregates items by id: string
 * */
export function aggregateById<T extends { id: string }>(items: T[]) {
  return aggregateByKey(items, "id");
}


/** 
 * Converts number into short representation
 * ```ts
 * compact(12_494) // "12.5k"
 * ```
 * */
export const compact = (num: number) =>
  Intl.NumberFormat("en", { notation: "compact" }).format(num);

/** 
 * Creates progressbar using string
 * ```ts
 * progressBar(10, 20, 10) // "█████░░░░░ [10/20]"
 * ```
 * */
export function progressBar(
  progress: number,
  maxProgress: number,
  length = 20
) {
  if (progress < 0) progress = 0;

  const fill = "█";
  const path = "░";
  const fillProgress = Math.round((progress * length) / maxProgress);

  const bar = Array(length)
    .fill(fill)
    .map((v, i) => (fillProgress > i ? v : path))
    .join("");

  return `${bar} \`[${compact(progress)}/${compact(maxProgress)}]\``;
}

/** 
 * Clamps number between min and max numbers
 * ```ts
 * clamp(10, 20, 15) // 15
 * clamp(10, 20, 35) // 20
 * clamp(10, 20, 5) // 10
 * ```
 * */
export function clamp(min: number, max: number, value: number) {
  if (value < min) {
    return min;
  } else if (value > max) {
    return max;
  } else {
    return value;
  }
}
