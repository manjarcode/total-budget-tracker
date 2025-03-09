import {useState, useEffect} from 'react'
import {colors} from './colors'

export default function ViewModel({reportSummary}) {
  const [dataset, setDataset] = useState({})

  const hasData = dataset?.labels?.length > 0

  useEffect(() => {
    if (reportSummary?.length < 0) return

    const dataset = {
      labels: reportSummary.map(item => item.name),
      datasets: [
        {
          label: 'Gastos',
          data: reportSummary.map(item => item.total),
          backgroundColor: colors
        }
      ]
    }

    setDataset(dataset)
  }, [reportSummary, hasData])

  return {
    hasData,
    dataset,
    reportSummary
  }
}
