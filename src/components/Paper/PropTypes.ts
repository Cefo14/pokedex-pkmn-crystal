import { ElementType, ReactElement } from 'react';

import { PolymorphicComponentPropsWithRef } from '../../types/component/PolymorphicComponent';
import { PolymorphicRef } from '../../types/component/PolymorphicRef';

export type PaperPropTypes<Component extends ElementType> = PolymorphicComponentPropsWithRef<
  Component
>;

export type PaperRef<C extends ElementType> = PolymorphicRef<C>;

export type PaperComponent = <C extends ElementType>(
  props: PaperPropTypes<C>
) => ReactElement | null;
