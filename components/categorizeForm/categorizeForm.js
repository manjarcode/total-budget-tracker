import PropTypes from 'prop-types'

import {Box} from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Typography from '@mui/material/Typography'

import CategorizeSelector from '../categorySelector/index.js'
import SubcategorySelector from '../subcategorySelector/index.js'
import ViewModel from './categorizeForm.viewModel.js'

import style from './index.module.css'

export default function CategorizeForm({
  expense,
  isOpen,
  onSave,
  onClose,
  categories
}) {
 
  const viewModel = ViewModel({expense, categories, onSave, onClose})
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{expense.description}</DialogTitle>
      <DialogContent>
        <Box className={style.modal}>
          <form onSubmit={viewModel.handleSubmit}>
            <Box sx={{mb: 2}}>
              <Typography variant="body1">
                Fecha <strong>{viewModel.formatDate(expense.date)}</strong>
              </Typography>
            </Box>
            <Box sx={{mb: 2}}>
              <Typography variant="body1">
                Cantidad <strong>{expense.amount}</strong>€
              </Typography>
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
                onChange={viewModel.setSubcategory}
              />
            </Box>
            <DialogActions>
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

CategorizeForm.propTypes = {
  expense: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    category: PropTypes.string,
    subcategory: PropTypes.string
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      subcategories: PropTypes.arrayOf(PropTypes.string).isRequired
    })
  ).isRequired
}
