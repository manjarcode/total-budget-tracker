import CompactTable from "./compactTable"
import style from './index.module.css'

export default function ReportSummary({reportSummary}) {
  console.table(reportSummary)
  return (
    <div className={style.container}>
      <CompactTable reportSummary={reportSummary} />
    </div>
  )
}