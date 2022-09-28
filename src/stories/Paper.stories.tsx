import { ComponentStory, ComponentMeta } from '@storybook/react';

import Paper from '../components/Paper';

export default {
  title: 'components/Paper',
  component: Paper,
  argTypes: {
    children: {
      control: {
        type: null
      }
    }
  }
} as ComponentMeta<typeof Paper>;

const Template: ComponentStory<typeof Paper> = ({ children, ...props }) => (
  <Paper {...props}>
    <div
      style={{
        height: '50vh',
        backgroundColor: 'gray'
      }}
    />
  </Paper>
);

export const Default = Template.bind({});
