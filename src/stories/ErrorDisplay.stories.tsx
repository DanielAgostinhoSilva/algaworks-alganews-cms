import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ErrorDisplay from "../app/components/ErrorDisplay/ErrorDiplay";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/ErrorDisplay',
    component: ErrorDisplay,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof ErrorDisplay>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ErrorDisplay> = (args) => <ErrorDisplay {...args} />;

export const Default = Template.bind({})
Default.args = {}

export const CustomTitle = Template.bind({})
CustomTitle.args = {
    title: 'Houve um erro'
}

export const CustomMessage = Template.bind({})
CustomMessage.args = {
    title: 'Houve um erro',
    message: 'Falha na comunicação com o servidor'
}

export const Small = Template.bind({})
Small.args = {
    title: 'Houve um erro',
    message: 'Falha na comunicação com o servidor',
    small: true
}