import { ComponentPropsWithoutRef } from 'react';
import { RequirePickOptionals } from '../../types/common/RequirePickOptionals';

export type IconSVG = Omit<
  ComponentPropsWithoutRef<'svg'>,
  'width' | 'height'
>;

export interface PokeballIconProps {
  size?: string | number;
}

export const PokeballIconDefaultProps: RequirePickOptionals<PokeballIconProps> = {
  size: '1rem'
};

export type PokeballIconPropTypes = (
  IconSVG
  & PokeballIconProps
  & typeof PokeballIconDefaultProps
);
