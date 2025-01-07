import { injectable, inject } from "inversify"
import "reflect-metadata"
import Types from "../types.js"
import ExpenseRepository from "../infrastructure/expenses/ExpenseRepository.js"

@injectable()
export default class RemoveExpenseUseCase {
  private expenseRepository : ExpenseRepository 

  constructor(
    @inject(Types.Repositories.ExpenseRepository) expenseRepository,
  ) {
    this.expenseRepository = expenseRepository
  }

  async execute(reportId: string, expenseId: number) {
    const expenses =  await this.expenseRepository.remove(reportId, expenseId)
    return expenses
  }
}
