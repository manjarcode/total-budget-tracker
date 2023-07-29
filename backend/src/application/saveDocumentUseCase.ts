import { injectable, inject } from "inversify"
import "reflect-metadata"
import Types from "../types.js"
import ExpenseRepository from "../infrastructure/expenses/ExpenseRepository.js"
import ExcelDocumentRepository from "../infrastructure/documents/ExcelDocumentRepository.js"
import ReportRepository from "../infrastructure/reports/ReportRepository.js"


@injectable()
export default class SaveDocumentUseCase {
  private excelRepository : ExcelDocumentRepository
  private expenseRepository : ExpenseRepository
  private reportRepository : ReportRepository

  constructor(
    @inject(Types.Repositories.ExcelDocumentRepository) excelRepository,
    @inject(Types.Repositories.ExpenseRepository) expenseRepository,
    @inject(Types.Repositories.ReportRepository) reportRepository
  ) {
    this.excelRepository = excelRepository
    this.expenseRepository = expenseRepository
    this.reportRepository = reportRepository
  }

  async execute(reportId: string, path: string, name: string, yermon: string) {
    await this.reportRepository.add(reportId, name, yermon)
    const expenses =  await this.excelRepository.read(reportId, path)
    await this.expenseRepository.save(expenses)

    return expenses
  }
}
