export type RequiredPick<T, K extends keyof T> = Required<Pick<T, K>>;

export default RequiredPick;
