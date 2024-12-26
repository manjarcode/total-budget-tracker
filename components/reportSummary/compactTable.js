import { Typography } from "@mui/material"
import style from './compactTable.module.css'
export default function CompactTable({reportSummary}) {

  return( 
    <table className={style.table}>
      <thead>
        <tr>
          <th><Typography variant="h6">Categoría</Typography></th>
          <th><Typography variant="h6">Total</Typography></th>
        </tr>
      </thead>
      <tbody>
        {reportSummary.map((item, index) => {
          return <tr key={index}>
            <td><Typography>{item.name}</Typography></td>
            <td><Typography>{item.total}</Typography></td>
          </tr>
        })}
      </tbody>
    </table>)
}

