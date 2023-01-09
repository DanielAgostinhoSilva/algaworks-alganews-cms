import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MarkdownEditor , {MarkdownEditorProps} from "../app/components/MardownEditor";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/MarkdownEditor',
    component: MarkdownEditor
} as ComponentMeta<typeof MarkdownEditor>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MarkdownEditor> = (args: MarkdownEditorProps) => <MarkdownEditor {...args} />;

export const Default = Template.bind({})
Default.args = {

}

