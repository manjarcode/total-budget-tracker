import "reflect-metadata"
import { injectable, inject } from "inversify"
import Expense from "../../domain/models/Expense"
import Types from "../../types.js"
import ExpenseMapper from "./ExpenseMapper"
import {FilterExpressionOperator} from "dynamodb-adapter/lib/types"

@injectable()
export default class ExpenseRepository {
  static tableName = 'tbt-expenses'
  private client: any
  private mapper: ExpenseMapper

  constructor(
    @inject(Types.DynamoDbAdapterFactory) dynamoDbAdapterFactory,
    @inject(Types.Mappers.ExpenseMapper) expenseMapper
  ) {
    const partitionKey = 'reportId'
    const sortKey = 'date'
    this.client = dynamoDbAdapterFactory.instance(ExpenseRepository.tableName, partitionKey, sortKey)
    this.mapper = expenseMapper
  }

  async save(expenses: Expense[]) : Promise<void> {
    const promises = expenses
      .map(e => this.mapper.toRecord(e))
      .map(e => this.client.add(e))
    
    await Promise.all(promises)

    return Promise.resolve()
  }

  async listCategorized(reportId: string) : Promise<Expense[]> {
    const filters = [{
      attribute: 'category',
      operator: FilterExpressionOperator.Exists
    }]

    const records = await this.client.query(reportId, null, filters)
    
    const entities = records.map(this.mapper.toDomain)
  
    return entities
  }

  async listUncategorized(reportId: string) : Promise<Expense[]> { 
    const filters = [{
      attribute: 'category',
      operator: FilterExpressionOperator.Equals,
      value: ''
    }]
    const records = await this.client.query(reportId, null, filters)
    
    const entities = records.map(this.mapper.toDomain)
  
    return entities
  }

  async update(expense: Expense) {
    const record = this.mapper.toRecord(expense)
    return await this.client.update(record)
  }
}