type UndefinedKeys<T> = {
  [K in keyof T]: undefined extends T[K] ? K : never;
}[keyof T];

type OptionalPick<T> = Pick<T, Exclude<UndefinedKeys<T>, undefined>>;

export type OptionalPickRequired<T> = Required<OptionalPick<T>>;

export default OptionalPickRequired;
