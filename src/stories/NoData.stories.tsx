import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NoData , {NoDataProps} from "../app/components/NoData/NoData";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/NoData',
    component: NoData,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof NoData>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NoData> = (args) => <NoData {...args} />;

export const Default = Template.bind({})
Default.args = {

}

export const FixedHeight = Template.bind({})
FixedHeight.args = {
    height: 240
}