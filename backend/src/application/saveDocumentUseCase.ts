import { injectable, inject } from "inversify"
import "reflect-metadata"
import Types from "../types.js"
import ExpenseRepository from "../infrastructure/expenses/ExpenseRepository.js"
import ExcelDocumentRepository from "../infrastructure/documents/ExcelDocumentRepository.js"


@injectable()
export default class SaveDocumentUseCase {
  private excelRepository : ExcelDocumentRepository
  private expenseRepository : ExpenseRepository

  constructor(
    @inject(Types.Repositories.ExcelDocumentRepository) excelRepository,
    @inject(Types.Repositories.ExpenseRepository) expenseRepository, 
  ) {
    this.excelRepository = excelRepository
    this.expenseRepository = expenseRepository
  }

  async execute(reportId: string, path: string) {
    const expenses =  await this.excelRepository.read(path)    
    await this.expenseRepository.save(reportId, expenses)

    return expenses   
  }
}
