import "reflect-metadata"
import { injectable, inject } from "inversify"
import Expense from "../../domain/models/Expense"
import Types from "../../types.js"

@injectable()
export default class ExpenseRepository {
  static tableName = 'tbt-expenses'
  private client: any

  constructor(
    @inject(Types.DynamoDbAdapterFactory) dynamoDbAdapterFactory
  ) {
    this.client = dynamoDbAdapterFactory.instance(ExpenseRepository.tableName)
  }

  save(expenses: Expense[]) : Promise<void> {    
    for (const expense of expenses) {      
      this.client.add(expense)    
    }
    return Promise.resolve()
  }


  list(reportId: string) : Promise<Expense[]> { 
    return this.client.query("reportId", reportId)
  }

  async update(expense: Expense) {
    const partitionKey = "reportId"
    const sortKey = "line"

    return await this.client.update(expense, partitionKey, sortKey)    
  }
}