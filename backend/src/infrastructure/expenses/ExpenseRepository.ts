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

  save(reportId: string, expenses: Expense[]) : Promise<void> {
    let line = 0
    for (const expense of expenses) {
      const hydratedExpense = { reportId, line , ...expense,  }
      this.client.add(hydratedExpense)
      line++
    }
    return Promise.resolve()
  }


  list(reportId: string) : Promise<Expense[]> { 
    return this.client.query("reportId", reportId)
  }
}