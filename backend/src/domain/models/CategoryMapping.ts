export default class CategoryMapping {
  name: string
  category: string
  subcategory: string

  constructor(name: string, category: string, subcategory: string) {
    this.name = name
    this.category = category
    this.subcategory = subcategory
  }
}