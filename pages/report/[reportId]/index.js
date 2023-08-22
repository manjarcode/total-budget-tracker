import {useRouter} from 'next/router'

import CategorizeForm from '@/components/categorizeForm/index.js'
import ExpenseTable from '@/components/expenseTable/index.js'
import useListUncategorizedExpenses from '@/hooks/useListUncategorizedExpenses.js'

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
      }}
    />
  )
}
