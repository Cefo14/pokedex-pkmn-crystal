import { ComponentPropsWithoutRef } from 'react';
import { OptionalPickRequired } from '../../types/OptionalPickRequired';

export interface PokemonImageProps {
  alt?: string;
  src?: string;
  size?: number;
  filter?: boolean;
  loading: 'eager' | 'lazy' | undefined
}

export const PokemonImageDefaultProps: OptionalPickRequired<PokemonImageProps> = {
  alt: '',
  src: '',
  size: 200,
  filter: false,
  loading: undefined
};

export type PokemonImagePropTypes = (
  ComponentPropsWithoutRef<'figure'>
  & PokemonImageProps
  & typeof PokemonImageDefaultProps
);

export default PokemonImagePropTypes;
