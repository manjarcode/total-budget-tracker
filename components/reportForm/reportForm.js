import {Box} from '@mui/material'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { ViewModel } from './reportForm.viewModel'

export default function ReportForm(props) {
  const viewModel = ViewModel(props)
  return (
    <form>
      <Box>
        <p>Se han cargado {viewModel.expenseCount} gastos</p>
      </Box>
      <Box>
        <TextField id="outlined-basic" label="Nombre del informe" variant="outlined" value={viewModel.name} onChange={viewModel.handleNameChange} />           
      </Box>
      <Box>
        <TextField id="outlined-basic" label="Yermon" variant="outlined" value={viewModel.yermon} onChange={viewModel.handleYermonChange} />
      </Box>
      <Box>
        <Button variant="contained" onClick={viewModel.createReport}>Continuar</Button>
      </Box>
    </form>
  )

}