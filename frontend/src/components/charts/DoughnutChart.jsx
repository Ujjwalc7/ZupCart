import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);




export default function DoughnutChart({labels = [], data, backgroundColor, cutout, legends = true, offset}) {

  const info = {
  labels: labels,
  datasets: [
    {
      label: '',
      data: data,
      backgroundColor: backgroundColor,
      borderColor: backgroundColor,
      borderWidth: 1,
      offset
    },
  ],
};

const options = {
  responsive: true,

  plugins: {
    legend: {
      display: legends,
      position: 'bottom',
      labels:{}
    },
  },
  cutout
};

  return <Doughnut options={options} data={info} />;
}
