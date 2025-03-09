import {useState} from 'react'

import useExpenses from '@/hooks/useSaveExpense.js'
import useListCategories from '@/hooks/useListCategories.js'
import useFormatDate from '@/hooks/useFormatDate'

export default function ViewModel({expenses, isLoading, onChange}) {
  const [showForm, setShowForm] = useState(false)
  const [updatingExpense, setUpdatingExpense] = useState(null)
  const [internalLoading, setInternalLoading] = useState(false)

  const categories = useListCategories()
  const formatDate = useFormatDate()
  const {saveExpense, removeExpense} = useExpenses()

  const displayLoader = isLoading || internalLoading
  const isModalOpen = Boolean(updatingExpense)
  const hasExpenses = Array.isArray(expenses) && expenses.length > 0

  const handleSave = async updatedExpense => {
    setInternalLoading(true)
    await saveExpense(updatedExpense)
    onChange()
    setInternalLoading(false)
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
    setInternalLoading(true)
    await removeExpense(reportId, id)
    onChange()
    setInternalLoading(false)
  }

  return {
    expenses,
    showForm,
    updatingExpense,
    categories,
    displayLoader,
    isModalOpen,
    hasExpenses,
    formatDate,
    handleSave,
    handleClose,
    handleRowClick,
    handleRemove
  }
}
