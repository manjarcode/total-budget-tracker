import { useState, useEffect} from "react";

export default function useGetExpensesByReportId(reportId) {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const hasReportId = reportId !== undefined
    const url = `/api/expenses/${reportId}`
    if (!hasReportId) {
      return
    }
    fetch(url, {
      method: "GET"    
    })
    .then(resp => resp.json())
    .then(response => setExpenses(response))
  }, [reportId])


  return { expenses }
}