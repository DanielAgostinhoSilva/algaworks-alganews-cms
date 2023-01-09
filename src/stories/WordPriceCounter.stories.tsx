import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import WordPriceCounter , {WordPriceCounterProps} from "../app/components/WordPriceCounter/WordPriceCounter";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/WordPriceCounter',
    component: WordPriceCounter,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof WordPriceCounter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof WordPriceCounter> = (args) => <WordPriceCounter {...args} />;

export const Default = Template.bind({})
Default.args = {
    pricePerWord: 0.25,
    wordsCount: 20
}