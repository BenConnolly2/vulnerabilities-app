import { Doughnut } from 'react-chartjs-2';
import { DoughnutChartProps } from '../types/doughnutChartProps';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Title
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, Title);

export default function PieChart({inputData, chartLabels, title} : DoughnutChartProps) {
  const data = {
    labels: chartLabels,
    datasets:[{
      label: title,
      data: inputData,
      backgroundColor: [
          'rgb(220, 38, 38)',  // CRITICAL
          'rgb(234, 88, 12)',  // HIGH
          'rgb(252, 211, 77)', // MEDIUM
          'rgb(34, 197, 94)',  // LOW
          'rgb(59, 130, 246)'  // INFO
      ],
      hoverOffset: 4
    }]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Threat Severity Breakdown",
      },
    },
  }

  return(
    <div style={{ width: '100%', height: '200px', position: 'relative' }}>
      <Doughnut data={data} options={options} />
    </div>
  )
}
