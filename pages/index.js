"use client";
import { Button } from '@mui/material'
import RootLayout from '@/app/layout'

import ReportList from '@/components/reportList/reportList';
import ViewModel from './index.viewModel'
import { Text } from 'manjark'

export default function Home() {
  const viewModel = ViewModel()
  
  return (
    <RootLayout>
      <Text.Title>Informes</Text.Title>
      <ReportList 
        reports={viewModel.reports} 
        onEdit={viewModel.handleEditReport} 
        onSummary={viewModel.handleSummaryReport}
        onDelete={viewModel.handleRemoveReport} />

      <Button href="/upload" variant="contained">Nuevo informe</Button>
    </RootLayout>
  )
}
