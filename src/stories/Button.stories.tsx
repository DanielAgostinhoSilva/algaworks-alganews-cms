import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button, {ButtonProps} from "../app/components/Button/Button";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'primary',
  label: 'Button',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  label: 'Button'
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  label: 'Button'
}

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  label: 'Button',
  disabled: true
}

