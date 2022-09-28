import { ComponentStory, ComponentMeta } from '@storybook/react';

import Container from '../components/Container';

export default {
  title: 'components/Container',
  component: Container,
  argTypes: {
    children: {
      control: {
        type: null
      }
    }
  }
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = ({ children, ...props }) => (
  <Container {...props}>
    <div
      style={{
        height: '100vh',
        backgroundColor: 'grey'
      }}
    />
  </Container>
);

export const Default = Template.bind({});

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  maxWidth: 'xl'
};

export const Large = Template.bind({});
Large.args = {
  maxWidth: 'lg'
};

export const Medium = Template.bind({});
Medium.args = {
  maxWidth: 'md'
};

export const Small = Template.bind({});
Small.args = {
  maxWidth: 'sm'
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  maxWidth: 'xs'
};
