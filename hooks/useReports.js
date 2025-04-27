import {useEffect, useState} from 'react'

export default function useReports() {
  const [reports, setReports] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getReports()
  }, [])

  const getReports = async () => {
    setIsLoading(true)
    const url = `/api/reports`
    fetch(url, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(response => setReports(response))
      .finally(() => setIsLoading(false))
  }

  const remove = async reportId => {
    const response = await fetch(`/api/reports/${reportId}`, {
      method: 'DELETE'
    }).then(getReports)

    return response
  }

  return {isLoading, reports, remove}
}
