//use case for remove a report will inject the expense repository and the report repository
//and will have a method to remove the report
import { injectable, inject } from "inversify"
import "reflect-metadata"
import Types from "../types.js"
import ReportRepository from "../infrastructure/reports/ReportRepository.js"
import ExpenseRepository from "../infrastructure/expenses/ExpenseRepository.js"

@injectable()
export default class RemoveReportUseCase {

  private reportRepository : ReportRepository
  private expenseRepository : ExpenseRepository

  constructor(
    @inject(Types.Repositories.ReportRepository) reportRepository,
    @inject(Types.Repositories.ExpenseRepository) expenseRepository
  ) {
    this.reportRepository = reportRepository
    this.expenseRepository = expenseRepository
  }

  async execute(reportId: string) {
    await this.expenseRepository.removeByReportId(reportId)
    await this.reportRepository.remove(reportId)
  }
}