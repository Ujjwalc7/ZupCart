import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



const PieChart = ({labels = [], data1, backgroundColor, legends = false, offset}) => {
  
  const data = {
  labels: labels,
  datasets: [
    {
      label: '',
      data: data1,
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
};
    return (
    <Pie data={data} options={options}/>
  )
}
export default PieChart



