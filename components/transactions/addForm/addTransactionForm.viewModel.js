import { useState } from 'react'

import useCategoriesFilter from '@/hooks/useCategoriesFilter'
import useSaveExpense from '@/hooks/useSaveExpense'
import useListCategories from '@/hooks/useListCategories.js'
import { parse } from 'date-fns'

export default function ViewModel({reportId, onClose}) {
  const [description, setDescription] = useState()
  const [ammount, setAmmount] = useState()
  const [date, setDate] = useState()

  const categories = useListCategories()
  const {createExpense} = useSaveExpense()
  const {category, subcategory, subcategories, setCategory, setSubcategory } = useCategoriesFilter({categories})

  const handleSubmit = () => {
    const parsedDate = parse(date, 'dd/MM/yyyy', new Date())

    const expense = {
      reportId,
      description,
      ammount,
      date: parsedDate,
      category,
      subcategory
    }

    createExpense(expense).then(onClose)
  }

  const handleChangeCategory = value => {
    setCategory(value)
  }

  const handleChangeSubcategory = value => {
    setSubcategory(value)
  }

  const handleChangeDescription = event => {
    setDescription(event.target.value)
  }

  const handleChangeAmmount = event => {
    setAmmount(event.target.value)
  }

  const handleChangeDate = event => {
    setDate(event.target.value)
  }

  return {
    name: description,
    ammount,
    date,
    categories,
    subcategories,
    handleChangeCategory,
    handleChangeSubcategory,
    handleChangeDescription,
    handleChangeAmmount,
    handleChangeDate,
    handleSubmit
  }
}