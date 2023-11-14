export function notEmpty(value: string | undefined | null): value is string {
  return !!value;
}

export function isDefined<T>(value: T | undefined | null): value is T {
  return value != null;
}

/** Sort that doesn't mutate original array */
export function safeSort<T>(arr: T[], compareFn?: (a: T, b: T) => number): T[] {
  return arr.slice().sort(compareFn);
}

/** Reverse that doesn't mutate original array */
export function safeReverse<T>(arr: T[]): T[] {
  return arr.slice().reverse();
}

export function uniq<T>(arr: T[]) {
  return Array.from(new Set(arr));
}

export function safeSplice<T>(
  arr: T[],
  index: number,
  deleteCount: number,
  insert?: T
): T[] {
  const result = arr.slice();
  if (insert != null) {
    result.splice(index, deleteCount, insert);
  } else {
    result.splice(index, deleteCount);
  }
  return result;
}

export function isSame<T>(a: T[], b: T[]): boolean {
  return a.length === b.length && a.every((val) => b.includes(val));
}

export function containsOne<T>(target: T[], check: T[]): boolean {
  return check.filter((val) => target.indexOf(val) !== -1).length > 0;
}

export function lazyJoin(
  arr: Array<string | undefined | null>,
  separator: string
): string {
  return arr.filter(notEmpty).join(separator);
}

export function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

export function last<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}

export function without<T>(target: T[], ...checks: T[]): T[] {
  return target.filter((item) => !checks.includes(item));
}

export function intersection<T>(target: T[], check: T[]): T[] {
  return target.filter((item) => check.includes(item));
}

export function stepItem<T>(
  arr: T[],
  index: number,
  direction: "up" | "down"
): T[] {
  const step = (() => {
    switch (direction) {
      case "up": {
        return -1;
      }
      case "down": {
        return 1;
      }
    }
  })();
  const to = index + step;
  const [fromItem] = safeSplice(arr, index, 1);
  const [toItem] = safeSplice(arr, to, 1);
  const result = arr.slice();
  if (fromItem) result[to] = fromItem;
  if (toItem) result[index] = toItem;
  return result;
}

/** Create a simple array with a specified length */
export function fromLength(length: number): number[] {
  return [...Array(length).keys()];
}
