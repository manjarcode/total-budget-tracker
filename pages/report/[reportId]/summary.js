import ReportSummary from "@/components/reportSummary"
import useConsolidatedReport from "@/hooks/useConsolidatedReport"
import { useRouter } from "next/router"

export default function ReportSummay() {
  const router = useRouter()
  const reportId = router.query.reportId

  const reportSummary = useConsolidatedReport(reportId)

  return (<>
    <h1>Resumen del informe</h1>
    <ReportSummary reportSummary={reportSummary} />
  </>)
}

