import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'

const CategorizeForm = ({ expense, isOpen, onSave, onClose }) => {
  const [category, setCategory] = useState(expense.category || '');
  const [subcategory, setSubcategory] = useState(expense.subcategory || '')

  const handleSubmit = (event) => {
    event.preventDefault()

    const updatedExpense = {
      ...expense,
      category,
      subcategory,
    };

    onSave(updatedExpense)

    setCategory('')
    setSubcategory('')

    onClose()
  }

  const {date, description, amount} = expense

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Categorizar gasto</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Box>
            <Typography variant="body1"> 
              {`Fecha: ${date}`}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              {description}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              {`Cantidad: ${amount}`}
            </Typography>
          </Box> 
          <Box>
            <TextField
              label="Categoría"
              value={category}
              onChange={(e) => setCategory(e.target.value)}            
            />
          </Box>
          <Box>
            <TextField
              label="Subcategoría"
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}          
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

export default CategorizeForm
