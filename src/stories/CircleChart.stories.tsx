import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CircleChart , {CircleChartProps} from "../app/components/CircleChart";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/CircleChart',
    component: CircleChart,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      progress: {
          control: {
              type: 'range',
              min: 0,
              max: 100
          }
      },
    },
} as ComponentMeta<typeof CircleChart>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CircleChart> = (args: CircleChartProps) => <CircleChart {...args} />;

export const Default = Template.bind({})
Default.args = {
    progress: 80,
    size: 150,
    caption: 'web'
}

export const Primary = Template.bind({})
Primary.args = {
    progress: 80,
    size: 150,
    caption: 'web',
    theme: 'primary'
}

