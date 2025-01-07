import {useState} from 'react'

import useExpenses from '@/hooks/useSaveExpense.js'
import useListCategories from '@/hooks/useListCategories.js'
import useFormatDate from '@/hooks/useFormatDate'

export default function ViewModel({onChange}) {
  const [showForm, setShowForm] = useState(false)
  const [updatingExpense, setUpdatingExpense] = useState(null)

  const categories = useListCategories()
  const formatDate = useFormatDate()
  const {saveExpense, removeExpense} = useExpenses()

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

  const handleRemove = expense => async ev => {
    ev.stopPropagation()
    const {reportId, id} = expense
    await removeExpense(reportId, id)
    onChange()
  }

  return {
    showForm, 
    updatingExpense, 
    categories,
    formatDate,
    handleSave,
    handleClose,
    handleRowClick,
    handleRemove
  }
}