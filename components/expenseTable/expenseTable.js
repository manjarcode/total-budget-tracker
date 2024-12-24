import PropTypes from 'prop-types'

import {Box, Typography} from '@mui/material'

import style from './index.module.css'
import ViewModel from './expenseTable.viewModel'

export default function ExpenseTable({
  expenses,
  categorizeForm: CategorizeForm,
  onChange,
  isLoading
}) {

  const viewModel = ViewModel({onChange})

  const isModalOpen = Boolean(viewModel.updatingExpense)

  return (
    <Box className={style.container}>
      {viewModel.showForm && (
        <CategorizeForm
          categories={viewModel.categories}
          expense={viewModel.updatingExpense}
          onSave={viewModel.handleSave}
          isOpen={isModalOpen}
          onClose={viewModel.handleClose}
        />
      )}

      <table className={style.table}>
        {expenses.map(expense => (
          <tr key={expense.id} onClick={viewModel.handleRowClick(expense)}>
            <td>
              <Typography variant="body1">
                {viewModel.formatDate(expense.date)}
              </Typography>
            </td>
            <td>
              <Typography variant="body1">
                {expense.description}
              </Typography>    
            </td>
            <td>
              <Typography variant="body1">
                {expense.amount}
              </Typography>
            </td> 
          </tr>
        ))}
      </table>
    </Box>
  )
}

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  categorizeForm: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
}
