import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

const ExpenseTable = ({ expenses }) => {
  const columns = [
    { field: 'description', headerName: 'Description', flex: 8 },
    { field: 'amount', headerName: 'Amount', flex: 1 },
    { field: 'date', headerName: 'Date', flex: 1 },
  ];

  const getRowId = (row) => `${row.reportId}-${row.line}`
  return (
      <DataGrid 
      getRowId={getRowId}
      columns={columns} rows={expenses} />
  );
};

export default ExpenseTable
