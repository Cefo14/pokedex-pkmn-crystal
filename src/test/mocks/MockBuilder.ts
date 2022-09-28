import cloneDeep from 'lodash/cloneDeep';

export abstract class MockBuilder<T extends Object> {
  private initialElement: T;

  private element: T;

  constructor(element: T = {} as T) {
    this.initialElement = cloneDeep(element);
    this.element = cloneDeep(element);
  }

  with<K extends keyof T, V extends T[K]>(key: K, value: V): this {
    const newValue = cloneDeep(value);
    this.element[key] = newValue;
    return this;
  }

  reset(): this {
    this.element = cloneDeep(this.initialElement);
    return this;
  }

  build(): T {
    return cloneDeep(this.element);
  }
}

export default MockBuilder;
