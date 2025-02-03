import CategorizeForm from '@/components/categorizeForm/index.js'
import ExpenseTable from '@/components/expenseTable/index.js'
import useListExpenses from '@/hooks/useListExpenses.js'
import { Box, Button, Typography } from '@mui/material'
import useNavigate from '@/hooks/useNavigate'
import RootLayout from '@/app/layout'
import ViewModel from './edit.viewModel'
import AddTransactionForm from '@/components/transactions/addForm'
import style from './edit.module.css'

export default function EditReport() {
  const viewModel = ViewModel()
  const navigate = useNavigate()
  const reportId = navigate.query.reportId

  const {expenses, refetch, isLoading} = useListExpenses(reportId, 'categorized')

  return (
    <RootLayout title="Editar Informe">
      <Box className={style.header}>
        <Typography variant="h4">Informe</Typography>
        <Button variant="outlined" onClick={viewModel.handleOpenModal}>
          Añadir movimiento
        </Button>
      </Box>
      <ExpenseTable
        expenses={expenses}
        categorizeForm={CategorizeForm}
        isLoading={isLoading}
        onChange={() => {
          refetch()
        }}
      />
      <AddTransactionForm 
        reportId={reportId}
        isOpen={viewModel.isModalOpen} 
        onClose= {viewModel.onCloseModal}        
      />
    </RootLayout>
  )
}
