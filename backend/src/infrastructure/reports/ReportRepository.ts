import "reflect-metadata"
import { injectable, inject } from "inversify"
import Types from "../../types.js"
import Report from "../../domain/models/Report"

@injectable()
export default class ReportRepository {
  static tableName = 'tbt-reports'
  private client: any

  constructor(
    @inject(Types.DynamoDbAdapterFactory) dynamoDbAdapterFactory
  ) {
    this.client = dynamoDbAdapterFactory.instance(ReportRepository.tableName)
  }

  list() : Promise<Report[]> { 
    return this.client.scan()
  }
}