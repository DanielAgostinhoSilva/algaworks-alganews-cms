import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CircleChart , {CircleChartProps} from "../components/CircleChart";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/CircleChart',
    component: CircleChart,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof CircleChart>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CircleChart> = (args) => <CircleChart {...args} />;

export const Primary = Template.bind({})
Primary.args = {

}

