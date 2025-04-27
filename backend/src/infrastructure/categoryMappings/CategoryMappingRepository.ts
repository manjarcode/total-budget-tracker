import "reflect-metadata"
import { inject, injectable} from "inversify"
import CategoryMapping from "../../domain/models/CategoryMapping.js"
import CategoryMappingCollection from "../../domain/models/CategoryMappingCollection.js"
import Types from "../../types.js"


@injectable()
export default class CategoryMappingRepository {
  static tableName = 'tbt-category-mappings'
  private client: any

  constructor(
    @inject(Types.DynamoDbAdapterFactory) dynamoDbAdapterFactory,
  ) {
    const partitionKey = 'id'
    this.client = dynamoDbAdapterFactory.instance(CategoryMappingRepository.tableName, partitionKey)
  }

  async list() : Promise<CategoryMappingCollection> {
    const records = await this.client.scan()
    
    const entities = records.map(({id, description, category, subcategory}) => 
      new CategoryMapping(
        id, 
        description,
        category,
        subcategory
      )
    )

    return new CategoryMappingCollection(entities)
  }
}