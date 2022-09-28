import { PokeApiServices } from '../../types/service/PokeApiServices';
import { Pokemon } from '../../types/dto/Pokemon';
import { PokemonMockFactory } from '../mocks/PokemonMockFactory';

export class PokeApi implements PokeApiServices {
  private mockFactory = new PokemonMockFactory();

  async fetchPokemons(): Promise<Pokemon[]> {
    return [
      this.mockFactory.bulbasaur(),
      this.mockFactory.gengar(),
      this.mockFactory.snorlax(),
      this.mockFactory.tyranitar()
    ];
  }
}

export default PokeApi;
