import { useState, useEffect } from 'react';
import { Primitive } from '../types/Primitive';

export const useDebounce = <V extends Primitive>(value: V, delayInMS: number = 300) => {
  const [debouncedValue, setDebouncedValue] = useState<V>(value);

  useEffect(
    () => {
      const timer = setTimeout(() => {
        setDebouncedValue(value);
      }, delayInMS);

      return () => {
        clearTimeout(timer);
      };
    },
    [value, delayInMS]
  );

  return debouncedValue;
};

export default useDebounce;
