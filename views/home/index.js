'use client'
import {Button} from '@mui/material'
import RootLayout from '@/app/layout'

import ReportList from '@/components/reportList/reportList'
import ViewModel from './index.viewModel'
import {Text} from 'manjark'
import Spinner from '@/components/spinner'
import Heading from '@/components/heading/heading'

export default function Home() {
  const viewModel = ViewModel()

  return (
    <RootLayout>
      <Heading>
        <Heading.Title>Informes</Heading.Title>
        <Heading.Action href="/upload">Nuevo informe</Heading.Action>
      </Heading>

      {viewModel.isLoading && <Spinner />}
      <ReportList
        reports={viewModel.reports}
        onEdit={viewModel.handleEditReport}
        onSummary={viewModel.handleSummaryReport}
        onDelete={viewModel.handleRemoveReport}
      />
    </RootLayout>
  )
}
