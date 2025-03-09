import {Menu} from 'manjark'
import style from './reportList.module.css'
import EditIcon from '@mui/icons-material/Edit'
import VisibilityIcon from '@mui/icons-material/Visibility'
import DeleteIcon from '@mui/icons-material/Delete'
import PropTypes from 'prop-types'
import 'manjark/dist/index.css'

export default function ReportList({reports, onEdit, onSummary, onDelete}) {
  return (
    <ul className={style.list}>
      {reports &&
        reports.map(report => (
          <li className={style.item} key={report.id}>
            {report.name}
            <Menu>
              <Menu.Item
                value="Editar informe"
                onClick={() => onEdit(report.id)}
              >
                <EditIcon /> Editar
              </Menu.Item>
              <Menu.Item
                value="Ver resumen de informe"
                onClick={() => onSummary(report.id)}
              >
                <VisibilityIcon /> Ver resumen
              </Menu.Item>
              <Menu.Item
                value="Borrar informe"
                onClick={() => onDelete(report.id)}
              >
                <DeleteIcon /> Borrar
              </Menu.Item>
            </Menu>
          </li>
        ))}
    </ul>
  )
}

ReportList.propTypes = {
  reports: PropTypes.array,
  onEdit: PropTypes.func,
  onSummary: PropTypes.func,
  onDelete: PropTypes.func
}
