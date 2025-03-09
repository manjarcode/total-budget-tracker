import {Typography} from '@mui/material'
import style from './compactTable.module.css'
import PropTypes from 'prop-types'
export default function CompactTable({reportSummary}) {
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>
            <Typography variant="h6">Categoría</Typography>
          </th>
          <th>
            <Typography variant="h6">Total</Typography>
          </th>
          <th>
            <Typography variant="h6">Presupuesto</Typography>
          </th>
        </tr>
      </thead>
      <tbody>
        {reportSummary.items?.map((item, index) => {
          return (
            <tr key={index}>
              <Td>{item.name}</Td>
              <Td>{item.total}</Td>
              <Td>{item.budget}</Td>
            </tr>
          )
        })}
        <tr>
          <Td>Total</Td>
          <Td>{reportSummary.summary?.total}</Td>
          <Td>{reportSummary.summary?.budget}</Td>
        </tr>
      </tbody>
    </table>
  )
}

const Td = props => {
  return (
    <td>
      <Typography {...props} />
    </td>
  )
}

CompactTable.propTypes = {
  reportSummary: PropTypes.shape({
    items: PropTypes.array,
    summary: PropTypes.shape({
      total: PropTypes.number,
      budget: PropTypes.number
    })
  })
}
