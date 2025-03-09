import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement
} from 'chart.js'
import ViewModel from './reportChart.viewModel'
import {Bar} from 'react-chartjs-2'
import style from './reportChart.module.css'
import PropTypes from 'prop-types'

ChartJS.register(CategoryScale, LinearScale, BarElement)

export default function ReportChart({reportSummary}) {
  const viewModel = ViewModel({reportSummary})

  return (
    <>
      {viewModel.hasData && (
        <Bar className={style.container} data={viewModel.dataset} />
      )}
    </>
  )
}

ReportChart.propTypes = {
  reportSummary: PropTypes.array
}
