export type ObjectVisitor<T extends object> = {
  [K in keyof T]-?: (value: T[K]) => void;
};

export const visitObj = <T extends object>(
  obj: T,
  visit: ObjectVisitor<T>
): void =>
  Object.keys(obj).forEach((key) => visit[key as keyof T](obj[key as keyof T]));

export const cleanObj = <T extends object>(obj: T): T => {
  const result = { ...obj };
  for (var prop in result) {
    if (Object.hasOwnProperty.call(result, prop) && result[prop] == null) {
      delete result[prop];
    }
  }
  return result;
};

export const omitKey = <T extends object>(
  obj: T,
  key: keyof T
): Omit<T, keyof T> => {
  const { [key]: _, ...result } = obj;
  return result;
};

export const hasKeys = <T extends object>(obj: T, keys: string[]): boolean => {
  return (
    keys.map((key) => Object.keys(obj).indexOf(key) !== -1).indexOf(true) !== -1
  );
};
