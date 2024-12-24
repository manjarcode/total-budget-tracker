import {useState} from 'react'

import useSaveExpense from '@/hooks/useSaveExpense.js'
import useListCategories from '@/hooks/useListCategories.js'
import useFormatDate from '@/hooks/useFormatDate'

export default function ViewModel({onChange}) {
  const [showForm, setShowForm] = useState(false)
  const [updatingExpense, setUpdatingExpense] = useState(null)

  const categories = useListCategories()
  const formatDate = useFormatDate()
  const {saveExpense} = useSaveExpense()

  const handleSave = updatedExpense => {
    saveExpense(updatedExpense).then(onChange)
  }

  const handleClose = () => {
    setShowForm(false)
    setUpdatingExpense(null)
  }

  const handleRowClick = expense => () => {
    setShowForm(true)
    setUpdatingExpense(expense)
  }


  return {showForm, updatingExpense, categories, formatDate, handleSave, handleClose, handleRowClick}
}