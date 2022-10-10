/* eslint-disable import/no-extraneous-dependencies */

import { faker } from '@faker-js/faker';

import { PokemonMockBuilder } from './PokemonMockBuilder';

export class PokemonMockFactory {
  private readonly builder = new PokemonMockBuilder();

  random() {
    return this.builder
      .reset()
      .with('id', faker.datatype.number())
      .with('flavor_text', faker.random.words())
      .with('genus', faker.random.word())
      .with('height', faker.datatype.number({ min: 0, max: 99 }))
      .with('name', faker.animal.bird())
      .with('own', faker.datatype.number({ min: 0, max: 99 }))
      .with('sprite', {
        front: faker.image.avatar(),
        back: faker.image.avatar()
      })
      .with('seen', faker.datatype.number({ min: 0, max: 99 }))
      .with('stats', [])
      .with('types', [
        faker.unique(faker.animal.type),
        faker.unique(faker.animal.type)
      ])
      .with('weight', 0)
      .build();
  }

  randoms(qty: number = 1) {
    return new Array(qty)
      .fill(null)
      .map(() => this.random());
  }

  bulbasaur() {
    return this.builder
      .reset()
      .with('id', 1)
      .with('flavor_text', 'While it is young, it uses the nutrients that are stored in the seeds on its back in order to grow.')
      .with('genus', 'Seed Pokémon')
      .with('height', 7)
      .with('name', 'bulbasaur')
      .with('own', 174)
      .with('sprite', {
        front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/1.png',
        back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/1.png'
      })
      .with('seen', 114)
      .with('types', [
        'grass',
        'poison'
      ])
      .with('weight', 69)
      .build();
  }

  gengar() {
    return this.builder
      .reset()
      .with('id', 94)
      .with('flavor_text', 'Hiding in people\'s shadows at night, it absorbs their heat. The chill it causes makes the victims shake.')
      .with('genus', 'Shadow Pokémon')
      .with('height', 15)
      .with('name', 'gengar')
      .with('own', 213)
      .with('sprite', {
        front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/94.png',
        back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/94.png'
      })
      .with('seen', 228)
      .with('types', [
        'ghost',
        'poison'
      ])
      .with('weight', 405)
      .build();
  }

  snorlax() {
    return this.builder
      .reset()
      .with('id', 143)
      .with('flavor_text', 'This POKéMON\'s stomach is so strong, even eating moldy or rotten food will not affect it.')
      .with('genus', 'Sleeping Pokémon')
      .with('height', 21)
      .with('name', 'snorlax')
      .with('own', 64)
      .with('sprite', {
        front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/143.png',
        back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/143.png'
      })
      .with('seen', 170)
      .with('types', [
        'normal'
      ])
      .with('weight', 4600)
      .build();
  }

  tyranitar() {
    return this.builder
      .reset()
      .with('id', 248)
      .with('flavor_text', 'In just one of its mighty hands, it has the power to make the ground shake and moun­ tains crumble.')
      .with('genus', 'Armor Pokémon')
      .with('height', 20)
      .with('name', 'tyranitar')
      .with('own', 245)
      .with('sprite', {
        front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/248.png',
        back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/248.png'
      })
      .with('seen', 51)
      .with('types', [
        'rock',
        'dark'
      ])
      .with('weight', 2020)
      .build();
  }
}

export default PokemonMockFactory;
