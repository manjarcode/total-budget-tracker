"use client";
import { Button } from '@mui/material'
import RootLayout from '@/app/layout'

import ReportList from '@/components/reportList/reportList';
import ViewModel from './index.viewModel';


export default function Home() {
  const viewModel = ViewModel()
  
  return (
    <RootLayout>
      <h1>Informes</h1>
      <ReportList reports={viewModel.reports} onDelete={viewModel.handleRemoveReport} />

      <Button href="/upload" variant="contained">Nuevo informe</Button>
    </RootLayout>
  )
}
