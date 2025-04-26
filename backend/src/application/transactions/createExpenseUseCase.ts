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
    type: string,
    category: string,
    subcategory: string): Promise<void> 
  {
    const realAmount = type === "expense" ? -Math.abs(amount) : Math.abs(amount)
    const expense = new Expense(reportId, date, description, realAmount, category, subcategory)
    await this.expenseRepository.create(expense)
  }
}