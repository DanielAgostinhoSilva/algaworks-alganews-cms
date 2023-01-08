import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ImageUpload , {ImageUploadProps} from "../components/ImageUpload";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/ImageUpload',
    component: ImageUpload
} as ComponentMeta<typeof ImageUpload>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ImageUpload> = (args: ImageUploadProps) => <ImageUpload {...args} />;

export const Default = Template.bind({})
Default.args = {
    label: 'Thumbnail do post'
}



