import { injectable, inject } from "inversify"
import "reflect-metadata"
import Types from "../types.js"
import ExpenseRepository from "../infrastructure/expenses/ExpenseRepository.js"

@injectable()
export default class ListUncategorizedExpensesUseCase {

  private expenseRepository : ExpenseRepository

  constructor(
    @inject(Types.Repositories.ExpenseRepository) expenseRepository
  ) {
    this.expenseRepository = expenseRepository
  }

  async execute(reportId: string) {
    const expenses = await this.expenseRepository.listUncategorized(reportId)
    return expenses
  }
}