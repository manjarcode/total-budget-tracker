import {Box} from '@mui/material'
import {Text, Textbox} from 'manjark'
import Button from '@mui/material/Button'
import {ViewModel} from './reportForm.viewModel'

export default function ReportForm(props) {
  const viewModel = ViewModel(props)
  return (
    <form>
      <Box>
        <Text>Se han cargado {viewModel.expenseCount} gastos</Text>
      </Box>
      <Box>
        <Textbox
          label="Nombre del informe"
          value={viewModel.name}
          onChange={viewModel.handleNameChange}
        />
      </Box>
      <Box>
        <Textbox
          label="Identificador"
          value={viewModel.yermon}
          onChange={viewModel.handleYermonChange}
        />
      </Box>
      <Box>
        <Button variant="contained" onClick={viewModel.createReport}>
          Guardar
        </Button>
      </Box>
    </form>
  )
}
