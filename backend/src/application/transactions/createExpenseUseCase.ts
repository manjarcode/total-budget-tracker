import { injectable, inject } from "inversify"
import Types from "../../types.js"
import ExpenseRepository from "../../infrastructure/expenses/ExpenseRepository.js"
import Expense from "../../domain/models/Expense.js"

@injectable()
export default class CreateExpenseUseCase {
  private expenseRepository: ExpenseRepository

  constructor(
    @inject(Types.Repositories.ExpenseRepository) expenseRepository
  ) {
    this.expenseRepository = expenseRepository
  }

  async execute(
    reportId: string, 
    date: Date, 
    description: string, 
    amount: number,
    category: string,
    subcategory: string): Promise<void> 
  {
    const expense = new Expense(reportId, date, description, amount, category, subcategory)
    await this.expenseRepository.create(expense)
  }
}