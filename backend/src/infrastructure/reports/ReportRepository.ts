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
    const partitionKey = 'id'
    this.client = dynamoDbAdapterFactory.instance(ReportRepository.tableName, partitionKey)
  }

  async add(reportId: string, name: string, yermon: string) {
    return await this.client.add({id: reportId, name, yermon})
  }

  list() : Promise<Report[]> { 
    return this.client.scan()
  }
}