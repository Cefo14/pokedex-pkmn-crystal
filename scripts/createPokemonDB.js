const { performance } = require('perf_hooks');
const fs = require('fs');
const axios = require('axios');

const POKEMON_GENERATION = 'generation-ii';
const POKEMON_VERSION_NAME = 'crystal';
const POKEMON_LANGUAGE = 'en';
const MAX_POKEMONS = 251;

const fetchPokemon = (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  return axios.get(url);
};

const fetchSpecies = (pokemon) => (
  axios.get(pokemon.species.url)
);

const fetchPokemons = async (limit) => {
  const pokemons = [];

  // ** The query is made in a singular way so as not to saturate the server.
  for (let i = 1; i <= limit; i++) {
    console.log(`Fetch Pokemon With Pokedex ID: ${i}`);
  
    const { data: pokemon } = await fetchPokemon(i);
    const { data: species } = await fetchSpecies(pokemon);

    const sprite = pokemon.sprites.versions[POKEMON_GENERATION].crystal;
    const types = pokemon.types.map(({ type }) => type.name);
    const stats = pokemon.stats.map((stat) => ({
      name: stat.stat.name,
      value: stat.base_stat
    }));
    const flavorTextEntry = species.flavor_text_entries.find(entry => entry.version.name === POKEMON_VERSION_NAME);
    const genera = species.genera.find((genera) => genera.language.name === POKEMON_LANGUAGE);

    const seen = Math.floor(Math.random() * 254) + 1;
    const own = Math.floor(Math.random() * 254) + 1;

    const mappedPokemon = {
      id: pokemon.id,
      flavor_text: flavorTextEntry.flavor_text,
      genus: genera.genus,
      height: pokemon.height,
      name: pokemon.name,
      own,
      sprite: {
        front: sprite.front_transparent,
        back: sprite.back_transparent,
      },
      seen,
      stats,
      types,
      weight: pokemon.weight,
    };

    pokemons.push(mappedPokemon);
  }

  return pokemons;
};

const saveFile = (pokemons) => {
  const filename = 'pokemon.db.json';
  const path = `${__dirname}/${filename}`;
  const data = JSON.stringify(pokemons);

  fs.writeFileSync(path, data);

  return path;
};

const getFileSizeInKB = (path) => {
  const stats = fs.statSync(path);
  const fileSizeInBytes = stats.size;
  const fileSizeInKB = (fileSizeInBytes / 1000).toFixed(2);
  return fileSizeInKB;
}

(async () => {
  try {
    const startTime = performance.now();

    const pokemons = await fetchPokemons(MAX_POKEMONS);
    const path = saveFile(pokemons);
    const fileSizeInKB = getFileSizeInKB(path);

    const endTime = performance.now();
    const executionTime = endTime - startTime;

    console.info('The file was created in the following path:');
    console.info(`Path: ${path}`);
    console.info(`Size: ${fileSizeInKB} KB`);
    console.info(`Execution time: ${executionTime.toFixed(2)} ms`);
  }

  catch (e) {
    console.warn(e);
  }
})();
