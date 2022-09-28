const path = '../../hooks/useDebounce';

jest.mock(path, () => {
  const useDebounce = <T>(value: T): T => value;
  return {
    ...jest.requireActual(path),
    default: useDebounce,
    useDebounce
  };
});

export default {};
