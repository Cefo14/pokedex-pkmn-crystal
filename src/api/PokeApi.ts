import axios, { AxiosInstance } from 'axios';

import { PokeApiServices } from '../types/service/PokeApiServices';
import { Pokemon, PokemonSchema } from '../types/dto/Pokemon';

export class PokeApi implements PokeApiServices {
  private api: AxiosInstance;

  constructor() {
    const baseURL = process.env.PUBLIC_URL;

    this.api = axios.create({
      baseURL
    });
  }

  async fetchPokemons(): Promise<Pokemon[]> {
    const url = '/pokemon.db.json';
    const response = await this.api.get<Pokemon[]>(url);
    return PokemonSchema.array().parse(response.data);
  }
}

export default PokeApi;
