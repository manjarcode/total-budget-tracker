import ExpenseTable from "@/components/expenseTable"
import useGetExpensesByReportId from "@/hooks/useGetExpensesByReportId"
import { useRouter } from 'next/router'
import CategorizeForm from "@/components/categorizeForm"

export default function ReportById() {
  const router = useRouter()
  const reportId = router.query.reportId
  const {expenses} = useGetExpensesByReportId(reportId)
  
  return (
    <div>
      <ExpenseTable expenses={expenses} categorizeForm={CategorizeForm} />
    </div>
  )
}