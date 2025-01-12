export default class Category {
  categoryId: string
  name: string
  subcategories: string[]
  budget: number
  
  constructor(categoryId: string, name: string, subcategories: Set<string>, budget: number) {
    this.categoryId = categoryId
    this.name = name
    this.subcategories = Array.from(subcategories)
    this.budget = budget
  }
}
