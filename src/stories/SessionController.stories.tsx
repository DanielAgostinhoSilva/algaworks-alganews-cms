import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SessionController , {SessionControllerProps} from "../app/components/SessionController/SessionController";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/SessionController',
    component: SessionController,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof SessionController>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SessionController> = (args) => <SessionController {...args} />;

export const Default = Template.bind({})
Default.args = {
    name: 'Fulano da Silva',
    description: 'editor ha muito tempo'
}

