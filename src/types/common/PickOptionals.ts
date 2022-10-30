type UndefinedKeys<T> = {
  [K in keyof T]: undefined extends T[K] ? K : never;
}[keyof T];

export type PickOptionals<T> = Pick<T, Exclude<UndefinedKeys<T>, undefined>>;

export default PickOptionals;
