import { CSSProperties } from 'react';
import { VirtuosoGridProps } from 'react-virtuoso';

import { Pokemon } from '../../types/dto/Pokemon';
import { ButtonMouseEvent } from '../../types/component/ButtonMouseEvent';

type VirtuosoGridCustomProps = Omit<
  VirtuosoGridProps,
  'totalCount' | 'overscan' | 'components' | 'itemContent'
>;

export interface PokemonLisPropTypes extends VirtuosoGridCustomProps {
  pokemons: Pokemon[];
  flippedPokemons: Set<number>;
  onClickPokemonCard: (event: ButtonMouseEvent, id: number) => void;
  styles: CSSProperties;
}

export default PokemonLisPropTypes;
