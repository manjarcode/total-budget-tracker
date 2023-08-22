import {useCallback, useEffect, useState} from 'react'

export default function useListUncategorizedExpenses(reportId) {
  const [expenses, setExpenses] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const refetch = useCallback(() => {
    const hasReportId = reportId !== undefined
    const url = `/api/expenses/${reportId}/uncategorized`

    if (!hasReportId) {
      return
    }

    setIsLoading(true)
    return fetch(url, {
      method: 'GET'
    })
      .then(resp => resp.json())
      .then(resp => resp.map(transformDate))
      .then(resp => setExpenses(resp))
      .then(resp => {
        setIsLoading(false)
        return resp
      })
  }, [reportId])

  useEffect(() => {
    refetch()
  }, [reportId, refetch])

  return {expenses, refetch, isLoading}
}

function transformDate(expense) {
  const {date, ...rest} = expense
  const dateObj = new Date(date)

  const dto = {...rest, date: dateObj}
  return dto
}
