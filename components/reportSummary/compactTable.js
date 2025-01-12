import { Typography } from "@mui/material"
import style from './compactTable.module.css'
export default function CompactTable({reportSummary}) {
  return( 
    <table className={style.table}>
      <thead>
        <tr>
          <th><Typography variant="h6">Categoría</Typography></th>
          <th><Typography variant="h6">Total</Typography></th>
          <th><Typography variant="h6">Presupuesto</Typography></th>
        </tr>
      </thead>
      <tbody>
        {reportSummary.items?.map((item, index) => {
          return <tr key={index}>
            <Td>{item.name}</Td>
            <Td>{item.total}</Td>
          </tr>
        })}
        <tr>
          <Td>Total</Td>
          <Td>{reportSummary.summary?.total}</Td>
        </tr>
      </tbody>
    </table>)
}

const Td = ({children}) => {
  return <td><Typography>{children}</Typography></td>
}