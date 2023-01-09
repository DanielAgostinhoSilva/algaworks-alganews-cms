import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Confirm , {ConfirmProps} from "../app/components/Confirm/Confirm";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Confirm',
    component: Confirm,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof Confirm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Confirm> = (args) => <Confirm {...args} />;

export const Default = Template.bind({})
Default.args = {
    title: 'Você tem certeza?'
}