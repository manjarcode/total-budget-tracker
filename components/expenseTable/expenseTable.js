import PropTypes from 'prop-types'

import cx from 'classnames'
import {Box, Typography} from '@mui/material'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete'

import style from './index.module.css'
import ViewModel from './expenseTable.viewModel'

import LinearProgress from '@mui/material/LinearProgress'

export default function ExpenseTable({
  expenses,
  categorizeForm: CategorizeForm,
  onChange,
  isLoading
}) {

  const viewModel = ViewModel({onChange})

  const isModalOpen = Boolean(viewModel.updatingExpense)

  const hasExpenses = expenses && expenses.length > 0
  return (
    <Box>
      {viewModel.showForm && (
        <CategorizeForm
          categories={viewModel.categories}
          expense={viewModel.updatingExpense}
          onSave={viewModel.handleSave}
          isOpen={isModalOpen}
          onClose={viewModel.handleClose}
        />
      )}
      {isLoading && <LinearProgress />}
      {hasExpenses && 
        <table className={cx(style.table, {[style.loading]: isLoading})}>
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
