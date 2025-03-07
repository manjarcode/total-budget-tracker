import { Menu } from "manjark";
import style from './reportList.module.css';
import DeleteIcon from '@mui/icons-material/Delete'

export default function ReportList({reports, onDelete}) {
  
  return (
    <ul className={style.list}>
      {reports.map(report => (
        <li className={style.item} key={report.id}>
          {report.name}
            <Menu>
              <Menu.Item value="Borrar informe" onClick={() => onDelete(report.id)}>
                <DeleteIcon/> Borrar informe
              </Menu.Item> 
            </Menu>
        </li>
      ))}
    </ul>
  )
}