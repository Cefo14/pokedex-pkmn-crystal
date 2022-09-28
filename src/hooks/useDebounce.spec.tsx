import { renderHook, act } from '@testing-library/react';
import { faker } from '@faker-js/faker';

import { useDebounce } from './useDebounce';

jest.useFakeTimers();

describe('useDebounce Hook', () => {
  describe('when is mounted', () => {
    it('should set the value', () => {
      const value = faker.datatype.number();
      const delay = faker.datatype.number();

      const view = renderHook(() => useDebounce(value, delay));

      expect(view.result.current).toBe(value);
    });
  });

  describe('when is debounced', () => {
    it('should assign the value when the timeout passes', async () => {
      let value = 0;
      let delay = 0;

      const view = renderHook(() => useDebounce(value, delay));

      expect(view.result.current).toBe(value);

      value = faker.datatype.number();
      delay = faker.datatype.number();
      view.rerender();

      act(() => {
        jest.advanceTimersByTime(delay);
      });

      expect(view.result.current).toBe(value);
    });
  });
});
