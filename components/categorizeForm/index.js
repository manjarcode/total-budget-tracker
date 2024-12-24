import React, {useCallback, useEffect, useState} from 'react'

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
import useFormatDate from '@/hooks/useFormatDate.js'

export default function CategorizeForm({
  expense,
  isOpen,
  onSave,
  onClose,
  categories
}) {
  const [category, setCategory] = useState(expense.category || '')
  const [subcategory, setSubcategory] = useState(expense.subcategory || '')
  const [subcategories, setSubcategories] = useState([])

  const formatDate = useFormatDate()

  const updateSubcategories = useCallback(
    category => {
      const found = categories.find(item => item.name === category)
      const foundSubcategories = found ? found.subcategories : []
      setSubcategories(foundSubcategories)
    },
    [categories]
  )

  const handleSubmit = event => {
    event.preventDefault()

    const updatedExpense = {
      ...expense,
      category,
      subcategory
    }

    onSave(updatedExpense)

    setCategory('')
    setSubcategory('')

    onClose()
  }

  const handleChangeCategory = value => {
    setCategory(value)
    updateSubcategories(value)
  }

  const {date, description, amount} = expense

  useEffect(() => {
    updateSubcategories(category)
  }, [category, updateSubcategories])

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Categorizar gasto</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Box>
            <Typography variant="h6">{description}</Typography>
          </Box>
          <Box>
            <Typography variant="body1">{`Fecha: ${formatDate(date)}`}</Typography>
          </Box>
          <Box>
            <Typography variant="body1">{`Cantidad: ${amount}`}</Typography>
          </Box>
          <Box>
            <CategorizeSelector
              categories={categories}
              value={category}
              onChange={handleChangeCategory}
            />
            <SubcategorySelector
              subcategories={subcategories}
              value={subcategory}
              onChange={setSubcategory}
            />
          </Box>

          <DialogActions>
            <Button onClick={onClose}>Cancelar</Button>
            <Button type="submit" variant="contained" color="primary">
              Guardar
            </Button>
          </DialogActions>
        </form>
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
