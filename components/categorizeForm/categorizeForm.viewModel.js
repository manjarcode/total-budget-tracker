import {useCallback, useEffect, useState} from 'react'
import useFormatDate from '@/hooks/useFormatDate.js'

export default function ViewModel({expense, categories, onSave, onClose}) {
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

  useEffect(() => {
    updateSubcategories(category)
  }, [category, updateSubcategories])

  return {
    categories,
    subcategories,
    formatDate,
    setSubcategory,
    handleChangeCategory,
    handleSubmit,
  }
}