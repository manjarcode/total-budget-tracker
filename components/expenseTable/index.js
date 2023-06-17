import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

const ExpenseTable = ({ expenses }) => {
  const columns = [
    { field: 'description', headerName: 'Description', flex: 8 },
    { field: 'amount', headerName: 'Amount', flex: 1 },
    { field: 'date', headerName: 'Date', flex: 1 },
  ];

  return (
      <DataGrid columns={columns} rows={expenses} />
  );
};

export default ExpenseTable
