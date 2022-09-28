import { Pokemon } from '../../types/dto/Pokemon';
import { MockBuilder } from './MockBuilder';

export class PokemonMockBuilder extends MockBuilder<Pokemon> {
  constructor(pokemon: Partial<Pokemon> = {}) {
    const currentPokemon: Pokemon = {
      id: 0,
      flavor_text: '',
      genus: '',
      height: 0,
      name: '',
      own: 0,
      sprite: {
        front: '',
        back: ''
      },
      seen: 0,
      stats: [],
      types: [],
      weight: 0,
      ...pokemon
    };

    super(currentPokemon);
  }
}

export default PokemonMockBuilder;
