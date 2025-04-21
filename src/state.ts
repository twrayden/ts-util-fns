type KeyGetter<T> = (item: T) => string;

type Data<T> = Record<string, T>;

export class KeyValueSetter<T> {
  constructor(private readonly keyGetter: KeyGetter<T>) {}

  add<F extends T = T>(data: Data<F>, items: F[]): Data<F> {
    let result = { ...data };
    for (const item of items) {
      result = this.set(result, item);
    }
    return result;
  }

  set<F extends T = T>(data: Data<F>, item: F): Data<F> {
    const key = this.keyGetter(item);
    return { ...data, [key]: item };
  }
}
