import useCreateReport from "@/hooks/useCreateReport"
import {v4 as uuid} from 'uuid'
import {useState} from 'react'

export function ViewModel({expenses}) {
  const {create} = useCreateReport()

  const [name, setName] = useState('patata')
  const [yermon, setYermon] = useState('202409')
  
  const expenseCount = expenses?.length || 0

  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  const handleYermonChange = (event) => {
    setYermon(event.target.value)
  }

  const createReport = async () => {
    const reportId = uuid()

    return create(reportId, name, yermon, expenses)    
  }
  return {expenseCount, createReport, name, handleNameChange, yermon, handleYermonChange}
}