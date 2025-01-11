import CategorizeForm from '@/components/categorizeForm/index.js'
import ExpenseTable from '@/components/expenseTable/index.js'
import useListUncategorizedExpenses from '@/hooks/useListUncategorizedExpenses.js'
import { Box, Typography } from '@mui/material'
import style from './index.module.css'
import useNavigate from '@/hooks/useNavigate'
import RootLayout from '@/app/layout'


export default function ReportById() {
  const navigate = useNavigate()
  const reportId = navigate.query.reportId

  const {expenses, refetch, isLoading} = useListUncategorizedExpenses(reportId)


  return (
    <RootLayout> 
      <Typography className={style.title} variant="h4">Informe</Typography>
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
