import {Box} from '@mui/material'
import {DateRange, Text} from 'manjark'
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
        <DateRange
          value={viewModel.dateRange}
          onChange={viewModel.handleDateRangeChange}
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
