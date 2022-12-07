export type VisitMap<T extends object> = {
  [K in keyof T]-?: (value: T[K]) => void;
};

/**
 * @name visit
 * @summary Run a function for each key of target object
 *
 * @description
 * Run a function for each key of target object
 *
 * @param obj - the target object
 * @param map - strict object map with a function per key
 * @returns void
 */
export const visit = <T extends object>(obj: T, map: VisitMap<T>): void =>
  Object.keys(obj).forEach((key) => map[key as keyof T](obj[key as keyof T]));

/**
 * @name trim
 * @summary Remove empty keys from target object
 *
 * @description
 * Remove empty keys from target object
 *
 * @param obj - the target object
 * @returns new object with empty keys omitted
 */
export const trim = <T extends object>(obj: T): T => {
  const result = { ...obj };
  for (var prop in result) {
    if (Object.hasOwnProperty.call(result, prop) && result[prop] === undefined) {
      delete result[prop];
    }
  }
  return result;
};

/**
 * @name isEmpty
 * @summary Return true if the target object is empty
 *
 * @description
 * Return true if the target object is empty
 *
 * @param obj - the target object
 * @returns target object is empty
 */
export const isEmpty = <T extends object>(obj: T) =>
  Object.keys(obj).length === 0;

/**
 * @name omitKey
 * @summary Remove key from target object
 *
 * @description
 * Remove key from target object
 *
 * @param obj - the target object
 * @param key - the key to remove from target object
 * @returns new object with key omitted
 */
export const omitKey = <T extends object>(
  obj: T,
  key: keyof T
): Omit<T, keyof T> => {
  const { [key]: _, ...result } = obj;
  return result;
};

/**
 * @name hasKeys
 * @summary Return true is the target object contains at least one specified key
 *
 * @description
 * Return true is the target object contains at least one specified key
 *
 * @param obj - the target object
 * @param keys - the keys to check for existence in target object
 * @returns target object contains specified keys
 */
export const hasKeys = <T extends object>(obj: T, keys: string[]): boolean => {
  return (
    keys.map((key) => Object.keys(obj).indexOf(key) !== -1).indexOf(true) !== -1
  );
};
