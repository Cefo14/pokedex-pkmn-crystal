import { MaxWidthType } from './PropTypes';

export const MAX_WIDTH_CLASS_NAMES: { [key in MaxWidthType]: string } = {
  xl: 'Container__max-width--xl',
  lg: 'Container__max-width--lg',
  md: 'Container__max-width--md',
  sm: 'Container__max-width--sm',
  xs: 'Container__max-width--xs'
};

export const DEFAULT_MAX_WIDTH: MaxWidthType = 'xl';

export const NO_PADDING_CLASS_NAME = 'Container__root--no-padding';
