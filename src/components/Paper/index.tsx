import { ElementType, forwardRef, memo } from 'react';
import clsx from 'clsx';

import {
  PaperPropTypes,
  PaperComponent,
  PaperRef
} from './PropTypes';

import './styles.css';

const Paper: PaperComponent = forwardRef(
  <C extends ElementType> (
    {
      component,
      className,
      children,
      ...props
    }: PaperPropTypes<C>,
    ref?: PaperRef<C>
  ) => {
    const Component = component ?? 'div' as const;

    return (
      <Component
        ref={ref}
        {...props}
        className={clsx(
          className,
          'Paper__root'
        )}
      >
        { children }
      </Component>
    );
  }
);

export default memo(Paper) as PaperComponent;
