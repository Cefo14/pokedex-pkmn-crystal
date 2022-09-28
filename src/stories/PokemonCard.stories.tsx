import { ComponentStory, ComponentMeta } from '@storybook/react';

import PokemonCard from '../components/PokemonCard';

export default {
  title: 'components/PokemonCard',
  component: PokemonCard,
  args: {
    id: 1,
    name: 'bulbasaur',
    frontSprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/1.png',
    backSprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/1.png',
    genus: 'Seed Pokémon',
    description: 'While it is young, it uses the nutrients that are stored in the seeds on its back in order to grow.',
    types: [
      'grass',
      'poison'
    ],
    weight: 69,
    height: 7,
    isFlipped: false
  }
} as ComponentMeta<typeof PokemonCard>;

const Template: ComponentStory<typeof PokemonCard> = ({ ...props }) => (
  <PokemonCard {...props} />
);

export const Default = Template.bind({});

export const Front = Template.bind({});

export const Back = Template.bind({});
Back.args = {
  isFlipped: true
};
