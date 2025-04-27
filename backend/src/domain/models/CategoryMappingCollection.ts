import CategoryMapping from "./CategoryMapping"

export default class CategoryMappingCollection {

  categoryMappings: Array<CategoryMapping>

  constructor(categoryMappings: Array<CategoryMapping>) {
    this.categoryMappings = categoryMappings
  }

  get(description: string): CategoryMapping | null {
    const mapping = this.categoryMappings.find(mapping => mapping.description === description)
    return mapping ? mapping : null
  }
}