import useNavigate from '@/hooks/useNavigate'
import useReports from '@/hooks/useReports.js'

export default function ViewModel() {
  const navigate = useNavigate()
  const {reports, remove} = useReports()

  const handleEditReport = reportId => {
    navigate.toEditReport(reportId)
  }
  
  const handleSummaryReport = reportId => {
    navigate.toReportSummary(reportId)
  }

  const handleRemoveReport = async reportId => {
    await remove(reportId)
  }

  return {
    reports,
    handleEditReport,
    handleSummaryReport,
    handleRemoveReport
  }
}