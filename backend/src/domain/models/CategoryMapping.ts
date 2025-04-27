export default class CategoryMapping {
  id: string
  description: string
  category: string
  subcategory: string

  constructor(id:string, description: string, category: string, subcategory: string) {
    this.id = id
    this.description = description
    this.category = category
    this.subcategory = subcategory
  }
}