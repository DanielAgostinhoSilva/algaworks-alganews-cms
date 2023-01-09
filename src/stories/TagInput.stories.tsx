import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TagInput , {TagInputProps} from "../components/TagInput";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/TagInput',
    component: TagInput
   
} as ComponentMeta<typeof TagInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TagInput> = (args: TagInputProps) => <TagInput {...args} />;

export const Default = Template.bind({})
Default.args = {
    placeholder: 'Insira as tags deste post',
    tags: [{ id: '1', text: 'JavaScript' }]
}


