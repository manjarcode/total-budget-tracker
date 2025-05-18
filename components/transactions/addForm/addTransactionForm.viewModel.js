import {useState} from 'react'

import useCategoriesFilter from '@/hooks/useCategoriesFilter'
import useSaveExpense from '@/hooks/useSaveExpense'
import useListCategories from '@/hooks/useListCategories.js'
import {parse} from 'date-fns'

export default function ViewModel({reportId, onClose}) {
  const [description, setDescription] = useState()
  const [ammount, setAmmount] = useState()
  const [date, setDate] = useState()
  const [type, setType] = useState('expense')

  const categories = useListCategories()
  const {createExpense} = useSaveExpense()
  const {category, subcategory, subcategories, setCategory, setSubcategory} =
    useCategoriesFilter({categories})

  const handleSubmit = async () => {
    await saveTransaction()
    onClose()
  }

  const handleExtra = async () => {
    await saveTransaction()
    setDescription('')
    setAmmount('')
    setDate('')
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

  const handleChangeType = ({value}) => {
    setType(value)
  }

  const saveTransaction = () => {
    const parsedDate = parse(date, 'dd/MM/yyyy', new Date())

    const transaction = {
      reportId,
      description,
      ammount,
      type,
      date: parsedDate,
      category,
      subcategory
    }

    return createExpense(transaction)
  }

  return {
    description,
    ammount,
    date,
    categories,
    subcategories,
    type,
    handleChangeCategory,
    handleChangeSubcategory,
    handleChangeDescription,
    handleChangeAmmount,
    handleChangeDate,
    handleChangeType,
    handleSubmit,
    handleExtra
  }
}
