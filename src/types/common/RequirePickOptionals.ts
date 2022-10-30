import { PickOptionals } from './PickOptionals';

export type RequirePickOptionals<T> = Required<PickOptionals<T>>;

export default RequirePickOptionals;
