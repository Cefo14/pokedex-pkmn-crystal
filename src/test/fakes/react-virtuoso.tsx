import { VirtuosoProps } from 'react-virtuoso';

/* eslint-disable react/destructuring-assignment */
jest.mock('react-virtuoso', () => {
  const VirtuosoGrid = (props: VirtuosoProps<unknown, unknown>) => (
    <>
      {
        new Array(props.totalCount)
          .fill(null)
          .map((value, index) => (
            props.itemContent?.(index, value, undefined)
          ))
      }
    </>
  );

  return {
    ...jest.requireActual('react-virtuoso'),
    VirtuosoGrid
  };
});
