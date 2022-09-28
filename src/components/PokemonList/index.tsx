import { memo } from 'react';
import { VirtuosoGrid } from 'react-virtuoso';

import PokemonCard from '../PokemonCard';
import PokemonList from './PokemonList';
import PokemonItem from './PokemonItem';

import { PokemonLisPropTypes } from './PropTypes';

import './styles.css';

const PokemonLis = ({
  pokemons,
  flippedPokemons,
  onClickPokemonCard,
  styles,
  ...props
}: PokemonLisPropTypes) => (
  <VirtuosoGrid
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    initialItemCount={pokemons.length >= 6 ? 6 : pokemons.length}
    totalCount={pokemons.length}
    overscan={200}
    components={{
      List: PokemonList,
      Item: PokemonItem
    }}
    // eslint-disable-next-line react/no-unstable-nested-components
    itemContent={(index) => {
      const pokemon = pokemons[index];
      return (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          frontSprite={pokemon.sprite.front}
          backSprite={pokemon.sprite.back}
          genus={pokemon.genus}
          description={pokemon.flavor_text}
          types={pokemon.types}
          weight={pokemon.weight}
          height={pokemon.height}
          stats={pokemon.stats}
          onClick={onClickPokemonCard}
          isFlipped={flippedPokemons.has(pokemon.id)}
        />
      );
    }}
    style={styles}
  />
);

export default memo(PokemonLis);
