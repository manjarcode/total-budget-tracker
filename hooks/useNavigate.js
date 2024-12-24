import {useRouter} from 'next/router'

export default function useNavigate() {
  const router = useRouter()

  const toConsolidateReport = (reportId) => {
    router.push(`/report/${reportId}`)
  }

  return {toConsolidateReport}
}