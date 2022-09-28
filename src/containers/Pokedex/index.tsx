import { PokeApi } from '../../api/PokeApi';

import Pokedex from './Pokedex';

const PokedexWrapper = () => {
  const pokeApi = new PokeApi();
  return (
    <Pokedex
      pokeApi={pokeApi}
    />
  );
};

export default PokedexWrapper;
