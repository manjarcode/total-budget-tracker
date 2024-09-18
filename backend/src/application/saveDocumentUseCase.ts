import { injectable, inject } from "inversify"
import "reflect-metadata"
import Types from "../types.js"
import ExpenseRepository from "../infrastructure/expenses/ExpenseRepository.js"
import ExcelDocumentRepository from "../infrastructure/documents/ExcelDocumentRepository.js"


@injectable()
export default class SaveDocumentUseCase {
  private excelRepository : ExcelDocumentRepository

  constructor(
    @inject(Types.Repositories.ExcelDocumentRepository) excelRepository,
  ) {
    this.excelRepository = excelRepository
  }

  async execute(reportId: string, buffer: any) {
    const expenses =  await this.excelRepository.read(reportId, buffer)
    return expenses
  }
}
