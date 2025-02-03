import { useCallback, useEffect, useState } from "react"

export default function useCategoriesFilter({categories}) {
  
  const [category, setCategory] = useState()
  const [subcategory, setSubcategory] = useState()
  const [subcategories, setSubcategories] = useState([])

  const updateSubcategories = useCallback(
    category => {
      const found = categories.find(item => item.name === category)
      const foundSubcategories = found ? found.subcategories : []
      setSubcategories(foundSubcategories)
    },
    [categories]
  )

  useEffect(() => {
    updateSubcategories(category)
  }, [category, updateSubcategories])
  
  return {
    category,
    subcategory,
    subcategories,
    setCategory,
    setSubcategory
  }
}