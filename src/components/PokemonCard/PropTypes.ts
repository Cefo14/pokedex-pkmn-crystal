import { MouseEvent } from 'react';

import { OptionalPickRequired } from '../../types/OptionalPickRequired';
import { Pokemon } from '../../types/dto/Pokemon';

export type PokemonCardType = Partial<Omit<Pokemon, 'sprite' | 'flavor_text' | 'own' | 'seen'>>;

export interface PokemonCardProps extends PokemonCardType {
  frontSprite?: string;
  backSprite?: string;
  description?: string;
  isFlipped?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>, id: number) => void;
}

export const PokemonCardDefaultProps: OptionalPickRequired<PokemonCardProps> = {
  id: 0,
  name: '',
  frontSprite: '',
  backSprite: '',
  genus: '',
  description: '',
  types: [],
  weight: 0,
  height: 0,
  stats: [],
  isFlipped: false,
  onClick: () => { }
};

export type PokemonCardPropTypes = (
  PokemonCardProps
  & typeof PokemonCardDefaultProps
);

export default PokemonCardPropTypes;
