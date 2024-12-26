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

  return {query, linkToConsolidateReport, toConsolidateReport}
}