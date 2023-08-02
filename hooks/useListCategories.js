import {useEffect, useState} from 'react'

export default function useListCategories() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const url = `/api/categories`
    fetch(url, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(response => setCategories(response))
  }, [])

  return categories
}
