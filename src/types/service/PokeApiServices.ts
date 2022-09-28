import { Pokemon } from '../dto/Pokemon';

export interface PokeApiServices {
  fetchPokemons(): Promise<Pokemon[]>;
}

export default PokeApiServices;
