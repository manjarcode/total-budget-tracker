import { injectable, inject } from "inversify"
import Types from "../types.js"
import ReportRepository from "../infrastructure/reports/ReportRepository.js"
import Expense from "../domain/models/Expense.js"
import ExpenseRepository from "../infrastructure/expenses/ExpenseRepository.js"

@injectable()
export default class CreateReportUseCase {

  private reportRepository: ReportRepository
  private expenseReporitory: ExpenseRepository

  constructor(
    @inject(Types.Repositories.ReportRepository) reportRepository,
    @inject(Types.Repositories.ExpenseRepository) expenseRepository
  ) {
    this.reportRepository = reportRepository
    this.expenseReporitory = expenseRepository
  }

  async execute(reportId: string, name: string, yermon: string, expenses: Expense[]) {

    //TODO: Manejo de errores por aquí...

    await this.reportRepository.add(reportId, name, yermon)
    
    expenses.forEach(e => e.reportId = reportId)

    await this.expenseReporitory.save(expenses)    
  }
}