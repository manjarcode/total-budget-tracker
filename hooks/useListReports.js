import {useEffect, useState} from 'react'

export default function useListReports() {
  const [reports, setReports] = useState([])

  useEffect(() => {
    const url = `/api/reports`
    fetch(url, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(response => setReports(response))
  }, [])

  return reports
}
