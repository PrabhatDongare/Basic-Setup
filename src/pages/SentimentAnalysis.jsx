import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

const backgroundBar = {
    id: 'backgroundBar',
    // beforeDatasetDraw(chart, args, pluginOptions) {
    //     const { data, ctx, chartArea: { top, bottom, left, right, width, height }, scales: {x,y}} = chart;
    beforeDatasetDraw(chart,) {
        const { data, ctx, chartArea: { top, width, height }, scales: { x } } = chart;
        ctx.save()
        const segment = width / data.labels.length;

        ctx.fillStyle = 'gray';
        ctx.fillRect(x.getPixelForValue(0), top, segment, height)
    },
};

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, backgroundBar);

const SentimentAnalysis = () => {
    // color for bar background ['#fcddd8', '#fce0ea', '#ccf5ea', '#e0e2fe', '#eee0fe', '#ffecde', '#d1f6fd', '#fcfae2'],

    const data = {
        labels: [204, 133, 124, 168, 190, 77, 112, 186],

        datasets: [
            {
                label: ['Negative, Angry', 'Angry', 'Positive', 'Neutral', 'Praise', 'Surprise', 'Demand', 'Exclamation'],
                data: [204, 133, 124, 168, 190, 77, 112, 186],
                // backgroundColor: 'gray',
                backgroundColor: ['#ef553b', '#f26595', '#00cc96', '#636efa', '#ab63fa', '#ffa15a', '#19d3f3', '#f2e56f'],
                borderRadius: 7,
                borderSkipped: false
            },
        ],
    };

    const options = {
        indexAxis: 'x',
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
                ticks: {
                    font: {
                        weight: '600',
                    },
                },
                border: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: false,
                    color: 'black',
                    font: {
                        weight: '600',
                    },
                },
                border: {
                    display: false,
                },
            },
        },

        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 12,
                    boxHeight: 12,
                    useBorderRadius: true,
                    borderRadius: 2,
                }
            },
        },
        // plugins: [backgroundBar]
    };

    return (
        <>
            <Bar data={data} options={options} />
        </>
    )
}

export default SentimentAnalysis;
