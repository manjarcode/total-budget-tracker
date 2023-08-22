import {useRouter} from 'next/router'

import CategorizeForm from '@/components/categorizeForm'
import ExpenseTable from '@/components/expenseTable'
import useListUncategorizedExpenses from '@/hooks/useListUncategorizedExpenses'

export default function ReportById() {
  const router = useRouter()
  const reportId = router.query.reportId
  const {expenses, refetch, isLoading} = useListUncategorizedExpenses(reportId)

  return (
    <ExpenseTable 
      expenses={expenses} 
      categorizeForm={CategorizeForm}
      isLoading={isLoading}
      onChange={() => {
        refetch()
      }} />
  )
}
