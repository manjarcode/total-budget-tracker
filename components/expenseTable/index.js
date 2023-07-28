import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import useSaveExpense from '../../hooks/useSaveExpense.js'

const ExpenseTable = ({ expenses, categorizeForm: CategorizeForm }) => {
  
  const [showForm, setShowForm] = useState(false)
  const [updatingExpense, setUpdatingExpense] = useState(null)

  const isModalOpen = Boolean(updatingExpense)

  const columns = [
    { field: 'description', headerName: 'Description', flex: 8 },
    { field: 'amount', headerName: 'Amount', flex: 1 },
    { field: 'date', headerName: 'Date', flex: 1 },
  ];

  const { saveExpense } = useSaveExpense()

  const getRowId = (row) => `${row.reportId}-${row.line}`

  const onRowClick = (params) => {
    setShowForm(true)
    setUpdatingExpense(params.row)
  }

  const handleSave = (updatedExpense) => {    
    saveExpense(updatedExpense)
  }

  const handleClose = () => {
    setShowForm(false)
    setUpdatingExpense(null)
  }

  return (
    <>
      { showForm && 
        <CategorizeForm 
          expense={updatingExpense}
          onSave={handleSave}
          isOpen={isModalOpen} 
          onClose={handleClose}
        />          
      }
      <DataGrid 
        getRowId={getRowId}
        onRowClick={onRowClick}
        columns={columns} rows={expenses} 
      />
    </>
  );
};

export default ExpenseTable
