import "reflect-metadata"
import { injectable, inject } from "inversify"
import Expense from "../../domain/models/Expense"
import Types from "../../types.js"
import ExpenseMapper from "./ExpenseMapper"

@injectable()
export default class ExpenseRepository {
  static tableName = 'tbt-expenses'
  private client: any
  private mapper: ExpenseMapper

  constructor(
    @inject(Types.DynamoDbAdapterFactory) dynamoDbAdapterFactory,
    @inject(Types.Mappers.ExpenseMapper) expenseMapper
  ) {
    this.client = dynamoDbAdapterFactory.instance(ExpenseRepository.tableName)
    this.mapper = expenseMapper
  }

  async save(expenses: Expense[]) : Promise<void> {
    const promises = expenses
      .map(e => this.mapper.toRecord(e))
      .map(e => this.client.add(e))
    
    await Promise.all(promises)

    return Promise.resolve()
  }

  async list(reportId: string) : Promise<Expense[]> { 
    const records = await this.client.query("reportId", reportId)
    
    const entities = records.map(this.mapper.toDomain)
  
    return entities
  }

  async update(expense: Expense) {
    const partitionKey = "reportId"
    const sortKey = "date"

    const record = this.mapper.toRecord(expense)

    return await this.client.update(record, partitionKey, sortKey)    
  }
}