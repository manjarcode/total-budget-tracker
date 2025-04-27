import "reflect-metadata"
import { injectable} from "inversify"
import CategoryMapping from "../../domain/models/CategoryMapping.js"
import CategoryMappingCollection from "../../domain/models/CategoryMappingCollection.js"


@injectable()
export default class CategoryMappingRepository {
  static tableName = 'tbt-category-mappings'

  async list() : Promise<CategoryMappingCollection> {
    const categories =  [
      new CategoryMapping('Lidl pavones', 'cbe51e91-c158-44af-8fa6-1bc978c34eec', 'Supermercado'),
      new CategoryMapping('Market ccaminos', 'cbe51e91-c158-44af-8fa6-1bc978c34eec', 'Supermercado'),
      new CategoryMapping('Adeudo hacienda de pavones 292 com prop', '20e08d21-305a-4890-8d29-3caf3672806c', 'Comunidad'),
      new CategoryMapping('Adeudo naturgy clientes, s.a.u.', '20e08d21-305a-4890-8d29-3caf3672806c', 'Electricidad'),
      new CategoryMapping('Cargo por amortizacion de prestamo/credito', '20e08d21-305a-4890-8d29-3caf3672806c', 'Alquiler / Hipoteca'),
      new CategoryMapping('Adeudo digi spain telecom sl', '20e08d21-305a-4890-8d29-3caf3672806c', 'Internet'),
    ]

    return new CategoryMappingCollection(categories)
  }
}