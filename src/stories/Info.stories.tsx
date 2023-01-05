import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Info , {InfoProps} from "../components/Info/Info"



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Info',
    component: Info,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof Info>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Info> = (args) => <Info {...args} />;

export const Default = Template.bind({})
Default.args = {
    title: 'Post não encontrado',
    description: 'Este post não foi encontrado. Você está sendo redirecionado(a) para a lista de posts.'
}