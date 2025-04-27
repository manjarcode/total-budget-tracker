import CategorizeForm from '@/components/categorizeForm/index.js'
import ExpenseTable from '@/components/expenseTable/index.js'
import useListExpenses from '@/hooks/useListExpenses.js'
import useNavigate from '@/hooks/useNavigate'
import RootLayout from '@/app/layout'
import Heading from '@/components/heading/heading'

export default function ConsolidateReport() {
  const navigate = useNavigate()
  const reportId = navigate.query.reportId

  const {expenses, refetch, isLoading} = useListExpenses(
    reportId,
    'uncategorized'
  )

  return (
    <RootLayout title="Gastos pendientes de categorizar">
      <Heading>
        <Heading.Title>Gastos pendientes de categorizar</Heading.Title>
      </Heading>
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
