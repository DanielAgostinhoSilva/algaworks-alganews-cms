import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TagInput , {TagInputProps} from "../app/components/TagInput";
import {Tag} from "react-tag-input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/TagInput',
    component: TagInput
   
} as ComponentMeta<typeof TagInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TagInput> = (args: TagInputProps) =>
    <div>
        <TagInput {...args} />
    </div>

export const Default = Template.bind({})
Default.args = {
    placeholder: 'Insira as tags deste post',
    tags: [{ id: '1', text: 'JavaScript' }]
}

export const VairousTags = Template.bind({})
VairousTags.args = {
    placeholder: 'Insira as tags deste post',
    tags: [
        { id: '1', text: 'JavaScript' },
        { id: '2', text: 'Java' },
        { id: '3', text: 'Ruby on Rails' },
        { id: '4', text: 'Python' },
        { id: '5', text: 'C#' },
        { id: '6', text: '.Net' },
        { id: '7', text: 'Go' },
    ]
}

export function WorkingLiveExample() {
    const [tags, setTags] = useState<Tag[]>([])

    return <TagInput
        placeholder={'Insira as tags deste post'}
        tags={tags}
        onAdd={tag => setTags([...tags, tag])}
        onDelete={index => setTags(tags.filter((tag, i) => i !== index))}
    />
}
