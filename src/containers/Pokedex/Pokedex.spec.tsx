import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import shuffle from 'lodash/shuffle';
import userEvent from '@testing-library/user-event';

import { PokeApiServices } from '../../types/service/PokeApiServices';

import { PokeApi } from '../../test/fakes/PokeApi';
import '../../test/fakes/useDebounce';
import '../../test/fakes/react-virtuoso';

import Pokedex from './Pokedex';

describe('Pokedex Container', () => {
  let pokeApi: PokeApiServices;

  beforeEach(async () => {
    pokeApi = new PokeApi();
  });

  describe('when is mounted', () => {
    it('should call the services', async () => {
      const fetchPokemonsSpy = jest.spyOn(pokeApi, 'fetchPokemons');

      const view = render(
        <Pokedex
          pokeApi={pokeApi}
        />
      );

      await act(async () => {
        await view;
      });

      expect(fetchPokemonsSpy).toHaveBeenCalledTimes(1);
    });

    it('should render it', async () => {
      const pokemons = await pokeApi.fetchPokemons();

      const view = render(
        <Pokedex
          pokeApi={pokeApi}
        />
      );

      await act(async () => {
        await view;
      });

      const input = screen.queryByRole('textbox', { name: /pokedex/i });
      expect(input).toBeInTheDocument();
      expect(input).toBeInTheDocument();

      const cards = screen.queryAllByRole('article', { name: /pokemon card/ });
      expect(cards.length).toBe(pokemons.length);
    });
  });

  describe('when user type a pokemon name', () => {
    it('should filter the cards', async () => {
      const pokemons = await pokeApi.fetchPokemons();
      const [randomPokemon] = shuffle(pokemons);

      const view = render(
        <Pokedex
          pokeApi={pokeApi}
        />
      );

      await act(async () => {
        await view;
      });

      let cards = screen.getAllByRole('article', { name: /pokemon card/ });
      expect(cards.length).toBe(pokemons.length);

      const input = screen.getByRole('textbox', { name: /pokedex/i });
      userEvent.type(input, randomPokemon.name);

      cards = screen.getAllByRole('article', { name: /pokemon card/ });
      expect(cards.length).toBeGreaterThanOrEqual(1);
      expect(cards.length).toBeLessThan(pokemons.length);
    });
  });

  describe('when user type a pokemon id', () => {
    it('should filter the cards', async () => {
      const pokemons = await pokeApi.fetchPokemons();
      const [randomPokemon] = shuffle(pokemons);

      const view = render(
        <Pokedex
          pokeApi={pokeApi}
        />
      );

      await act(async () => {
        await view;
      });

      let cards = screen.getAllByRole('article', { name: /pokemon card/ });
      expect(cards.length).toBe(pokemons.length);

      const input = screen.getByRole('textbox', { name: /pokedex/i });
      userEvent.type(input, randomPokemon.id.toString());

      cards = screen.getAllByRole('article', { name: /pokemon card/ });
      expect(cards.length).toBeGreaterThanOrEqual(1);
      expect(cards.length).toBeLessThan(pokemons.length);
    });
  });

  describe('when user type a pokemon type', () => {
    it('should filter the cards', async () => {
      const pokemons = await pokeApi.fetchPokemons();
      const [randomPokemon] = shuffle(pokemons);
      const [randomType] = shuffle(randomPokemon.types);

      const view = render(
        <Pokedex
          pokeApi={pokeApi}
        />
      );

      await act(async () => {
        await view;
      });

      let cards = screen.getAllByRole('article', { name: /pokemon card/ });
      expect(cards.length).toBe(pokemons.length);

      const input = screen.getByRole('textbox', { name: /pokedex/i });
      userEvent.type(input, randomType);

      cards = screen.getAllByRole('article', { name: /pokemon card/ });
      expect(cards.length).toBeLessThan(pokemons.length);
    });
  });
});
