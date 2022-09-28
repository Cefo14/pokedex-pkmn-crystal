import {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef
} from 'react';

import Container from '../../components/Container';
import Paper from '../../components/Paper';
import PokemonList from '../../components/PokemonList';
import PokeballIcon from '../../components/PokeballIcon';

import { useDebounce } from '../../hooks/useDebounce';

import { Pokemon } from '../../types/dto/Pokemon';
import { ButtonMouseEvent } from '../../types/component/ButtonMouseEvent';

import { PokedexPropTypes } from './PropTypes';
import './styles.css';

const Pokedex = ({
  pokeApi
}: PokedexPropTypes) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [flippedPokemons, setFlippedPokemons] = useState<Set<number>>(new Set<number>());
  const [pokemonName, setPokemonName] = useState('');

  const seachBoxRef = useRef<HTMLDivElement>(null);

  const pokemonNameDebounced = useDebounce(pokemonName); // ? inverse dependency?

  const currentPokemons = useMemo<Pokemon[]>(() => {
    const searchRegex = new RegExp(`${pokemonNameDebounced}`, 'ig');
    return pokemons
      .filter((pokemon) => (
        searchRegex.test(pokemon.name)
        || searchRegex.test(pokemon.id.toString())
        || searchRegex.test(pokemon.types.toString())
      ));
  }, [pokemons, pokemonNameDebounced]);

  const pokemonListHeight = (
    seachBoxRef.current
      ? `calc(100vh - 3rem - ${seachBoxRef.current.offsetHeight}px`
      : '100vh'
  );

  const onClickPokemonCard = useCallback((event: ButtonMouseEvent, id: number) => {
    const newflippedPokemons = new Set(flippedPokemons);

    if (newflippedPokemons.has(id)) {
      newflippedPokemons.delete(id);
    }

    else {
      newflippedPokemons.add(id);
    }

    setFlippedPokemons(newflippedPokemons);
  }, [flippedPokemons]);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const response = await pokeApi.fetchPokemons();
        setPokemons(response);
      }

      catch {
        setPokemons([]);
      }
    };

    fetchInitialData();
  }, [pokeApi]);

  return (
    <Container
      aria-label="pokedex"
      className="Pokedex__container"
      maxWidth="xl"
    >
      <Paper
        component="div"
        ref={seachBoxRef}
        className="Pokedex__seach-box"
        aria-label="pokemon finder"
      >
        <label
          htmlFor="search"
          className="Pokedex__seach-label"
        >
          Pokedex
          <PokeballIcon size={24} />
        </label>
        <input
          id="search"
          type="text"
          placeholder="..."
          className="Pokedex__seach-input"
          value={pokemonName}
          onChange={(event) => {
            setPokemonName(event.target.value);
          }}
        />
      </Paper>

      <PokemonList
        aria-label="pokemon cards"
        pokemons={currentPokemons}
        onClickPokemonCard={onClickPokemonCard}
        flippedPokemons={flippedPokemons}
        styles={{
          height: pokemonListHeight
        }}
      />
    </Container>
  );
};

export default Pokedex;
