import {useEffect, useState} from 'react'

export default function useConsolidatedReport(reportId) {
  const [report, setReport] = useState({items:[], summary: {}})

  useEffect(() => {
    if (!reportId) return
    
    const url = `/api/reports/${reportId}`

    fetch(url, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(response => setReport(response))
    
  }, [reportId])

  return report
}
