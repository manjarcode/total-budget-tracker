import "reflect-metadata"
import { injectable} from "inversify"
import CategoryMapping from "../../domain/models/CategoryMapping.js"
import CategoryMappingCollection from "../../domain/models/CategoryMappingCollection.js"


@injectable()
export default class CategoryMappingRepository {
  static tableName = 'tbt-category-mappings'

  async list() : Promise<CategoryMappingCollection> {
    const categories =  [
      new CategoryMapping('Lidl pavones', 'Alimentación', 'Supermercado'),
      new CategoryMapping('Market ccaminos', 'Alimentación', 'Supermercado'),
      new CategoryMapping('Adeudo hacienda de pavones 292 com prop', 'Vivienda', 'Comunidad'),
      new CategoryMapping('Adeudo naturgy clientes, s.a.u.', 'Vivienda', 'Electricidad'),
      new CategoryMapping('Cargo por amortizacion de prestamo/credito', 'Vivienda', 'Alquiler / Hipoteca'),
      new CategoryMapping('Adeudo digi spain telecom sl', 'Vivienda', 'Internet'),
    ]

    return new CategoryMappingCollection(categories)
  }
}