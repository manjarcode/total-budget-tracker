import CategoryTable from "./categoryTable"
import style from './index.module.css'

export default function ReportSummary({reportSummary}) {
  return (
    <div className={style.container}>
      {reportSummary.map((item, index) => {
        return <CategoryTable key={index} category={item} />
      })} 
    </div>
  )
}