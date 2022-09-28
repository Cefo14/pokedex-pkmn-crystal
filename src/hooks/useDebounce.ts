import { useState, useEffect } from 'react';
import { Primitive } from '../types/Primitive';

export const useDebounce = (value?: Primitive, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState<Primitive>(value);

  useEffect(
    () => {
      const timer = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(timer);
      };
    },
    [value, delay]
  );

  return debouncedValue;
};

export default useDebounce;
