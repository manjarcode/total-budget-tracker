import {useEffect, useState} from 'react'

export default function useReports() {
  const [reports, setReports] = useState([])

  useEffect(() => {
    getReports()
  }, [])

  const getReports = async () => {
    const url = `/api/reports`
    fetch(url, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(response => setReports(response))
  }

  const remove = async reportId => {
    const response = await fetch(`/api/reports/${reportId}`, {
      method: 'DELETE'
    }).then(getReports)

    return response
  }

  return {reports, remove}
}
