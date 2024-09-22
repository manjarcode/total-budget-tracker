import {Box} from '@mui/material'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { ViewModel } from './reportForm.viewModel'

export default function ReportForm(props) {
  const {expenseCount} = ViewModel(props)
  return (
    <form>
      <Box>
        <p>Se han cargado {expenseCount} gastos</p>
      </Box>
      <Box>
        <TextField id="outlined-basic" label="Nombre del informe" variant="outlined" />           
      </Box>
      <Box>
        <Button variant="contained">Continuar</Button>
      </Box>
    </form>
  )

}