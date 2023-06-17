import { useState, useEffect} from "react";

export default function useGetExpenses() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch("/api/expenses", {
      method: "GET"    
    })
    .then(resp => resp.json())
    .then(response => setExpenses(response.data))
  }, [])


  return { expenses }
}