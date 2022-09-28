import { ElementType } from 'react';

import { PolymorphicComponentPropsWithoutRef } from '../../types/component/PolymorphicComponent';

export type MaxWidthType = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

export type ContainerProps = {
  maxWidth?: MaxWidthType;
  noPadding?: boolean;
};

export type ContainerPropTypes<Component extends ElementType> = PolymorphicComponentPropsWithoutRef<
  Component,
  ContainerProps
>;

export default ContainerPropTypes;
