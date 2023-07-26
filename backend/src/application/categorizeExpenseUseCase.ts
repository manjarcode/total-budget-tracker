import { injectable, inject } from "inversify"
import Types from "../types.js"
import Expense from "../domain/models/Expense"
import ExpenseRepository from "../infrastructure/expenses/ExpenseRepository"

@injectable()
export default class CategorizeExpenseUseCase {
  private expenseRepository: ExpenseRepository

  constructor(
    @inject(Types.Repositories.ExpenseRepository) expenseRepository) {
    this.expenseRepository = expenseRepository
  }

  async execute(expense: Expense) {    
    await this.expenseRepository.update(expense)
  }
}