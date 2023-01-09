import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Heading , {HeadingProps} from "../app/components/Typography/Heading/Heading";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Typography/Heading',
    component: Heading,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof Heading>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const Heading1 = Template.bind({})
Heading1.args = {
    level: 1,
    children: 'heading 1'
}

export const Heading2 = Template.bind({})
Heading2.args = {
    level: 2,
    children: 'heading 2'
}

export const Heading3 = Template.bind({})
Heading3.args = {
    level: 3,
    children: 'heading 3'
}