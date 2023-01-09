import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Chart, {ChartProps} from "../app/components/Chart/Chart";

const data: Chart.ChartData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
        {
            label: 'Receitas',
            data: [500, 400, 600, 100, 800, 20],
            fill: true,
            backgroundColor: '#0099FF',
            borderColor: '#0099FF',
            borderWidth: 0.5,
            yAxisID: 'cashflow',
        },
        {
            label: 'Despesas',
            data: [100, 200, 250, 500, 1000, 600],
            fill: true,
            backgroundColor: '#274060',
            borderColor: '#274060',
            borderWidth: 0.5,
            yAxisID: 'cashflow',
        },
    ],
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Chart',
    component: Chart,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof Chart>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Chart> = (args) => <Chart {...args} />;

export const Default = Template.bind({})
Default.args = {
    data: data,
    title: 'Média de performance nos últimos 12 meses'
}

export const WithoutData = Template.bind({})
WithoutData.args = {
    title: 'Média de performance nos últimos 12 meses'
}
