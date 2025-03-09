import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@mui/material'

import CategorizeSelector from '../../categorySelector/index.js'
import SubcategorySelector from '../../subcategorySelector/index.js'

import ViewModel from './addTransactionForm.viewModel.js'
import style from './addTransactionForm.module.css'
import PropTypes from 'prop-types'

export default function AddTransactionForm({reportId, isOpen, onClose}) {
  const viewModel = ViewModel({reportId, onClose})
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Añadir movimiento</DialogTitle>
      <DialogContent>
        <Box className={style.modal}>
          <form onSubmit={viewModel.handleSubmit}>
            <Box sx={{mt: 1, mb: 3}}>
              <TextField
                label="Nombre"
                variant="outlined"
                value={viewModel.description}
                onChange={viewModel.handleChangeDescription}
              />
              <TextField
                label="Cantidad"
                variant="outlined"
                value={viewModel.ammount}
                onChange={viewModel.handleChangeAmmount}
              />
              <TextField
                label="Fecha"
                variant="outlined"
                value={viewModel.date}
                onChange={viewModel.handleChangeDate}
              />
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
