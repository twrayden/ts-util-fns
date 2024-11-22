export function notEmpty(value: string | undefined | null): value is string {
  return !!value;
}

export function isDefined<T>(value: T | undefined | null): value is T {
  return value != null;
}