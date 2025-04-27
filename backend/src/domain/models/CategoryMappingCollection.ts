import CategoryMapping from "./CategoryMapping"

export default class CategoryMappingCollection {

  categoryMappings: Array<CategoryMapping>

  constructor(categoryMappings: Array<CategoryMapping>) {
    this.categoryMappings = categoryMappings
  }

  get(description: string): CategoryMapping | null {
    console.log('BUSCANDO: DESCRIPTION', description, 'MAPPINGS', this.categoryMappings)
    const mapping = this.categoryMappings.find(mapping => mapping.name === description)
    return mapping ? mapping : null
  }
}