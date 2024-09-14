import {useEffect, useState} from 'react'

export default function useConsolidatedReport(reportId) {
  const [expenseItems, setExpenseItems] = useState([])

  useEffect(() => {
    console.log('useConsolidatedReport', reportId)
    const url = `/api/reports/${reportId}`
    fetch(url, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(response => setExpenseItems(response))
  }, [reportId])

  return expenseItems
}
