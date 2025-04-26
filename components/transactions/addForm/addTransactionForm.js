import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material'

import CategorizeSelector from '../../categorySelector/index.js'
import SubcategorySelector from '../../subcategorySelector/index.js'

import ViewModel from './addTransactionForm.viewModel.js'
import style from './addTransactionForm.module.css'
import PropTypes from 'prop-types'
import {Textbox, ToggleGroup} from 'manjark'

export default function AddTransactionForm({reportId, isOpen, onClose}) {
  const viewModel = ViewModel({reportId, onClose})
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Añadir movimiento</DialogTitle>
      <DialogContent>
        <Box className={style.modal}>
          <form onSubmit={viewModel.handleSubmit}>
            <Box sx={{mt: 1, mb: 3}}>
              <Textbox
                label="Nombre:"
                variant="outlined"
                value={viewModel.description}
                onChange={viewModel.handleChangeDescription}
              />
              <Textbox
                label="Cantidad:"
                variant="outlined"
                suffix="€"
                value={viewModel.ammount}
                onChange={viewModel.handleChangeAmmount}
              />
              <Textbox
                label="Fecha:"
                variant="outlined"
                value={viewModel.date}
                onChange={viewModel.handleChangeDate}
              />
              <ToggleGroup
                label="Tipo:"
                onChange={viewModel.handleChangeType}
                value={viewModel.type}
              >
                <ToggleGroup.Item value="expense">Gasto</ToggleGroup.Item>
                <ToggleGroup.Item value="income">Ingreso</ToggleGroup.Item>
              </ToggleGroup>
            </Box>
            <Box>
              <CategorizeSelector
                categories={viewModel.categories}
                value={viewModel.category}
                onChange={viewModel.handleChangeCategory}
              />
              <SubcategorySelector
                subcategories={viewModel.subcategories}
                value={viewModel.subcategory}
                onChange={viewModel.handleChangeSubcategory}
              />
            </Box>
            <DialogActions className={style.actions}>
              <Button onClick={onClose}>Cancelar</Button>
              <Button type="submit" variant="contained" color="primary">
                Guardar
              </Button>
            </DialogActions>
          </form>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

AddTransactionForm.propTypes = {
  reportId: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
}
