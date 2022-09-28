import { ElementType, memo } from 'react';
import clsx from 'clsx';

import { ContainerPropTypes } from './PropTypes';
import {
  MAX_WIDTH_CLASS_NAMES,
  DEFAULT_MAX_WIDTH,
  NO_PADDING_CLASS_NAME
} from './config';

import './styles.css';

const Container = <C extends ElementType>({
  component,
  className,
  children,
  maxWidth = DEFAULT_MAX_WIDTH,
  noPadding = false,
  ...props
}: ContainerPropTypes<C>) => {
  const Component = component || 'div' as const;

  return (
    <Component
      {...props}
      className={clsx(
        'Container__root',
        MAX_WIDTH_CLASS_NAMES[maxWidth],
        { [NO_PADDING_CLASS_NAME]: noPadding },
        className
      )}
    >
      {children}
    </Component>
  );
};

export default memo(Container);
