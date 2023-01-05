import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ValueDescriptor , {ValueDescriptorProps} from "../components/ValueDescriptor/ValueDescriptor";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/ValueDescriptor',
    component: ValueDescriptor,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof ValueDescriptor>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ValueDescriptor> = (args) => <ValueDescriptor {...args} />;

export const Default = Template.bind({})
Default.args = {
    descriptioin: 'ganhos no mês:',
    value: 560_322.02
}

export const DefaultCurrency = Template.bind({})
DefaultCurrency.args = {
    descriptioin: 'ganhos no mês:',
    value: 560_322.02,
    isCurrency: true
}

export const Primary = Template.bind({})
Primary.args = {
    descriptioin: 'ganhos no mês:',
    value: 560_322.02,
    color: 'primary'
}

export const PrimaryCurrency = Template.bind({})
PrimaryCurrency.args = {
    descriptioin: 'ganhos no mês:',
    value: 560_322.02,
    color: 'primary',
    isCurrency:  true
}