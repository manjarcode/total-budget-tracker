import "reflect-metadata"
import { injectable, inject } from "inversify"
import Types from "../../types.js"
import Category from "../../domain/models/Category.js"

@injectable()
export default class CategoryRepository {
  static tableName = 'tbt-categories'
  private client: any

  constructor(
    @inject(Types.DynamoDbAdapterFactory) dynamoDbAdapterFactory,
  ) {
    const partitionKey = 'id'
    this.client = dynamoDbAdapterFactory.instance(CategoryRepository.tableName, partitionKey)
  }

  async list() : Promise<Category[]> {
    const records = await this.client.scan()

    const entities = records.map(({categoryId, name, subcategories}) => 
      new Category(
        categoryId,
        name,
        subcategories
      )
    )
    
    return entities
  }
}