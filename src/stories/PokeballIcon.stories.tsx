import { ComponentStory, ComponentMeta } from '@storybook/react';

import PokeballIcon from '../components/PokeballIcon';

export default {
  title: 'components/PokeballIcon',
  component: PokeballIcon,
  args: {
    size: 50
  }
} as ComponentMeta<typeof PokeballIcon>;

const Template: ComponentStory<typeof PokeballIcon> = ({ ...props }) => (
  <PokeballIcon {...props} />
);

export const Default = Template.bind({});
