import { ComponentPropsWithoutRef } from 'react';
import { OptionalPickRequired } from '../../types/OptionalPickRequired';

export type IconSVG = Omit<
  ComponentPropsWithoutRef<'svg'>,
  'width' | 'height'
>;

export interface PokeballIconProps {
  size?: string | number;
}

export const PokeballIconDefaultProps: OptionalPickRequired<PokeballIconProps> = {
  size: '1rem'
};

export type PokeballIconPropTypes = (
  IconSVG
  & PokeballIconProps
  & typeof PokeballIconDefaultProps
);
