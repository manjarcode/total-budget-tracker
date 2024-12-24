import {useState} from 'react'

import PropTypes from 'prop-types'

import useListCategories from '@/hooks/useListCategories.js'
import useSaveExpense from '@/hooks/useSaveExpense.js'
import {Box} from '@mui/material'
import {DataGrid} from '@mui/x-data-grid'

import style from './index.module.css'

export default function ExpenseTable({
  expenses,
  categorizeForm: CategorizeForm,
  onChange,
  isLoading
}) {
  const [showForm, setShowForm] = useState(false)
  const [updatingExpense, setUpdatingExpense] = useState(null)

  const categories = useListCategories()

  const isModalOpen = Boolean(updatingExpense)

  const columns = [
    {
      field: 'date',
      headerName: 'Fecha',
      flex: 1,
      valueGetter: params => params.value.toLocaleDateString('en-GB')
    },
    {
      field: 'description',
      headerName: 'Descripción',
      flex: 8
    },
    {
      field: 'amount',
      headerName: 'Cantidad',
      flex: 1
    }
  ]

  const {saveExpense} = useSaveExpense()

  const getRowId = row => `${row.reportId}-${row.date}`

  const onRowClick = params => {
    setShowForm(true)
    setUpdatingExpense(params.row)
  }

  const handleSave = updatedExpense => {
    saveExpense(updatedExpense).then(onChange)
  }

  const handleClose = () => {
    setShowForm(false)
    setUpdatingExpense(null)
  }

  return (
    <Box className={style.container}>
      {showForm && (
        <CategorizeForm
          categories={categories}
          expense={updatingExpense}
          onSave={handleSave}
          isOpen={isModalOpen}
          onClose={handleClose}
        />
      )}

      <DataGrid
        loading={isLoading}
        getRowId={getRowId}
        onRowClick={onRowClick}
        columns={columns}
        rows={expenses}
        pagination={false}
      />
    </Box>
  )
}

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  categorizeForm: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
}
