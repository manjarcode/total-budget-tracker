import useConsolidatedReport from '@/hooks/useConsolidatedReport'
import useNavigate from '@/hooks/useNavigate'

export default function ViewModel() {
  const navigate = useNavigate()
  const reportId = navigate.query.reportId

  const reportSummary = useConsolidatedReport(reportId)

  return {
    reportSummary
  }
}
