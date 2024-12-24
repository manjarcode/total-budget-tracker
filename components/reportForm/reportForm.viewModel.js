import useCreateReport from "@/hooks/useCreateReport"
import useNavigate from "@/hooks/useNavigate"
import {v4 as uuid} from 'uuid'
import {useState} from 'react'


export function ViewModel({expenses}) {
  const {create} = useCreateReport()

  const navigate = useNavigate()

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

    await create(reportId, name, yermon, expenses)

    navigate.toConsolidateReport(reportId)
  }
  
  return {expenseCount, createReport, name, handleNameChange, yermon, handleYermonChange}
}