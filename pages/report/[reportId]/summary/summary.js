import RootLayout from "@/app/layout"
import ReportSummary from "@/components/reportSummary"
import ViewModel from "./summary.viewModel"
import ReportChart from "@/components/reportChart/reportChart"
import { Box } from "@mui/material"

export default function ReportSummay() {
  const viewModel = ViewModel()

  return (
    <RootLayout title="Resumen del informe">
      <h1>Resumen del informe</h1>
      <ReportSummary reportSummary={viewModel.reportSummary} />
      <Box sx={{ mt: 4 }}>
        <ReportChart reportSummary={viewModel.reportSummary?.items} />
      </Box>
    </RootLayout>
  )
}

