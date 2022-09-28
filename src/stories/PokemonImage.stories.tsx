import { ComponentStory, ComponentMeta } from '@storybook/react';

import PokemonImage from '../components/PokemonImage';

export default {
  title: 'components/PokemonImage',
  component: PokemonImage,
  args: {
    alt: 'Pokemon Image',
    src: 'https://dummyimage.com/600x400/000/fff',
    size: 200
  }
} as ComponentMeta<typeof PokemonImage>;

const Template: ComponentStory<typeof PokemonImage> = ({ ...props }) => (
  <PokemonImage {...props} />
);

export const Default = Template.bind({});

export const WithFilter = Template.bind({});
WithFilter.args = {
  filter: true
};
