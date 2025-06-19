import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July']; //exmaple labels



const VerticalBarchart = ({data1, data2, title1, title2, bgColor1, bgcolor2, labels = months, horizontal=false}) => {
    
const options = {
  responsive: true,
  indexAxis: horizontal ? 'y' : 'x',

  plugins: {
    legend: {
      display: false,
      position: horizontal ? 'right' : 'top',
    },
    title: {
      display: false,
      text: horizontal ? 'Chart.js Horizontal Bar Chart' : 'Chart.js Bar Chart',
    },
  },
  scales: {
    y: {
        beginAtZero: true,
        grid: {
            display: false
        }
    },
    x: {
        grid: {
            display: false
        }
    }
  }
};


const data= {
  labels,
  datasets: [
    {
      label: title1,
      data: data1,
      backgroundColor: bgColor1,
      bartThickness: 'flex',
      barPercentage: 1,
      categoryPercentage: 0.4
    },
    {
      label: title2,
      data: data2,
      backgroundColor: bgcolor2,
      bartThickness: 'flex',
      barPercentage: 1,
      categoryPercentage: 0.4
    },
  ],
};
  return (
    <Bar options={options} data={data} />
  )
}
export default VerticalBarchart
