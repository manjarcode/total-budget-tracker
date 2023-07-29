import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import useSaveExpense from '../../hooks/useSaveExpense.js'

import style from './index.module.css'
import { Box } from '@mui/material';

const ExpenseTable = ({ expenses, categorizeForm: CategorizeForm }) => {
  
  const [showForm, setShowForm] = useState(false)
  const [updatingExpense, setUpdatingExpense] = useState(null)

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
    },
  ];

  const { saveExpense } = useSaveExpense()

  const getRowId = (row) => `${row.reportId}-${row.date}`

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
    <Box class ={style.container}>
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
    </Box>
  );
};

export default ExpenseTable
