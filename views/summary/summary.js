import RootLayout from '@/app/layout'
import ReportSummary from '@/components/reportSummary'
import ViewModel from './summary.viewModel'
import ReportChart from '@/components/reportChart/reportChart'
import {Box} from '@mui/material'

export default function ReportSummay() {
  const {reportSummary} = ViewModel()

  return (
    <RootLayout title="Resumen del informe">
      <h1>Resumen del informe</h1>
      <ReportSummary reportSummary={reportSummary} />
      <Box sx={{mt: 4}}>
        <ReportChart reportSummary={reportSummary?.items} />
      </Box>
    </RootLayout>
  )
}
