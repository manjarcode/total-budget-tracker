export default class Category {
  categoryId: string
  name: string
  subcategories: string[]
  
  constructor(categoryId: string, name: string, subcategories: string[]) {
    this.categoryId = categoryId
    this.name = name
    this.subcategories = subcategories
  }
}
