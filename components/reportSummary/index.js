import CompactTable from "./compactTable"
import style from './index.module.css'

export default function ReportSummary({reportSummary}) {
  return (
    <div className={style.container}>
      <CompactTable reportSummary={reportSummary} />
    </div>
  )
}