import {
  ElementType,
  PropsWithChildren,
  ComponentPropsWithoutRef
} from 'react';

import { PolymorphicRefAsProp } from './PolymorphicRef';

interface ComponentAsProp<Component extends ElementType> {
  component?: Component;
}

type PropsWithComponentAsProp<
  Component extends ElementType,
  Props
> = (
  Props
  & ComponentAsProp<Component>
);

export type PolymorphicComponentPropsWithoutRef<
  Component extends ElementType,
  Props
> = (
  PropsWithChildren<PropsWithComponentAsProp<Component, Props>>
  & Omit<
    ComponentPropsWithoutRef<Component>,
    keyof PropsWithComponentAsProp<Component, Props>
  >
);

export type PolymorphicComponentPropsWithRef<
  Component extends ElementType,
  Props = {}
> = (
  PolymorphicComponentPropsWithoutRef<Component, Props>
  & PolymorphicRefAsProp<Component>
);
