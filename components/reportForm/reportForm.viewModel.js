import useCreateReport from '@/hooks/useCreateReport'
import useNavigate from '@/hooks/useNavigate'
import {v4 as uuid} from 'uuid'
import {useState} from 'react'
import {initialDateRange} from 'manjark/dist/index.es'

export function ViewModel({expenses}) {
  const {create} = useCreateReport()

  const [dateRange, setDateRange] = useState(initialDateRange())

  const navigate = useNavigate()

  const [name, setName] = useState('patata')
  const [yermon, setYermon] = useState('202409')

  const expenseCount = expenses?.length || 0

  const handleNameChange = event => {
    setName(event.target.value)
  }
  const handleYermonChange = event => {
    setYermon(event.target.value)
  }

  const handleDateRangeChange = newDateRange => {
    setDateRange(newDateRange)
  }

  const createReport = async () => {
    const reportId = uuid()

    await create(reportId, name, yermon, dateRange, expenses)

    navigate.toConsolidateReport(reportId)
  }

  return {
    expenseCount,
    createReport,
    name,
    handleNameChange,
    yermon,
    handleYermonChange,
    dateRange,
    handleDateRangeChange
  }
}
