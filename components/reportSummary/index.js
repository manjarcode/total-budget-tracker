import CompactTable from './compactTable'
import style from './index.module.css'
import PropTypes from 'prop-types'

export default function ReportSummary({reportSummary}) {
  return (
    <div className={style.container}>
      <CompactTable reportSummary={reportSummary} />
    </div>
  )
}

ReportSummary.propTypes = {
  reportSummary: PropTypes.object
}
