import PropTypes from 'prop-types'

import cx from 'classnames'
import {Box, Typography} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

import style from './index.module.css'
import ViewModel from './expenseTable.viewModel'

import LinearProgress from '@mui/material/LinearProgress'

export default function ExpenseTable({
  categorizeForm: CategorizeForm,
  ...props
}) {
  const viewModel = ViewModel(props)

  return (
    <Box>
      {viewModel.showForm && (
        <CategorizeForm
          categories={viewModel.categories}
          expense={viewModel.updatingExpense}
          onSave={viewModel.handleSave}
          isOpen={viewModel.isModalOpen}
          onClose={viewModel.handleClose}
        />
      )}
      {viewModel.displayLoader && <LinearProgress />}
      {viewModel.hasExpenses && 
        <table className={cx(style.table, {[style.loading]: viewModel.displayLoader})}>
          {viewModel.expenses && viewModel.expenses.map(expense => (
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
              <td>
                <IconButton >
                  <DeleteIcon onClick={viewModel.handleRemove(expense)} />
                </IconButton>
              </td>
            </tr>
          ))}
      </table>}
    </Box>
  )
}

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  categorizeForm: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
}
