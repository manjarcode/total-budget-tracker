import { useState, useEffect } from "react"
import { colors } from "./colors"
export default function ViewModel({reportSummary}) {
  const [dataset, setDataset] = useState({})

  const hasData = dataset?.labels?.length > 0

  useEffect(()=> {
    if (reportSummary?.length < 0) return

    const dataset = {
      labels: reportSummary.map(item => item.name),
      datasets: [
        {
          label: 'Gastos', // Etiqueta del dataset
          data: reportSummary.map(item => item.total),
           backgroundColor: colors
          // backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'], // Colores
        },
      ],
    }

    setDataset(dataset)
  }, [reportSummary, hasData])

  return {
    hasData,
    dataset,
    reportSummary
  }
}