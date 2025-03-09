import {useRouter} from 'next/router'

export default function useNavigate() {
  const router = useRouter()

  const query = router.query

  const linkToConsolidateReport = (reportId) => {
    return `/report/${reportId}/consolidate`
  }
  const toConsolidateReport = (reportId) => {
    router.push(linkToConsolidateReport(reportId))
  }

  const toEditReport = (reportId) => {
    router.push(`/report/${reportId}/edit`)
  }

  const toReportSummary = (reportId) => {
    router.push(`/report/${reportId}/summary`)
  }

  return {query, linkToConsolidateReport, toConsolidateReport, toEditReport, toReportSummary}
}