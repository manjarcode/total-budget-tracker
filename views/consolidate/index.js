import CategorizeForm from '@/components/categorizeForm/index.js'
import ExpenseTable from '@/components/expenseTable/index.js'
import useListExpenses from '@/hooks/useListExpenses.js'
import {Typography} from '@mui/material'
import useNavigate from '@/hooks/useNavigate'
import RootLayout from '@/app/layout'

export default function ConsolidateReport() {
  const navigate = useNavigate()
  const reportId = navigate.query.reportId

  const {expenses, refetch, isLoading} = useListExpenses(
    reportId,
    'uncategorized'
  )

  return (
    <RootLayout>
      <Typography variant="h4">Informe</Typography>
      <ExpenseTable
        expenses={expenses}
        categorizeForm={CategorizeForm}
        isLoading={isLoading}
        onChange={() => {
          refetch()
        }}
      />
    </RootLayout>
  )
}
