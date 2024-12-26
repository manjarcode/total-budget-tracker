import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement
} from 'chart.js';
import ViewModel from './reportChart.viewModel';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement
)

export default function ReportChart({reportSummary}) {
  const viewModel = ViewModel({reportSummary})

  return (
    <>
      {viewModel.hasData && <Bar data={viewModel.dataset} /> }
    </>
  )
}