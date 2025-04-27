import { injectable, inject } from "inversify"
import Types from "../types.js"
import ReportRepository from "../infrastructure/reports/ReportRepository.js"
import Expense from "../domain/models/Expense.js"
import ExpenseRepository from "../infrastructure/expenses/ExpenseRepository.js"
import CategoryMappingRepository from "../infrastructure/categoryMappings/CategoryMappingRepository.js"
import CategoryMappingCollection from "../domain/models/CategoryMappingCollection.js"

@injectable()
export default class CreateReportUseCase {

  private reportRepository: ReportRepository
  private expenseReporitory: ExpenseRepository
  private categoryMappingRepository: CategoryMappingRepository

  constructor(
    @inject(Types.Repositories.ReportRepository) reportRepository,
    @inject(Types.Repositories.ExpenseRepository) expenseRepository,
    @inject(Types.Repositories.CategoryMappingRepository) categoryMappingRepository
  ) {
    this.reportRepository = reportRepository
    this.expenseReporitory = expenseRepository
    this.categoryMappingRepository = categoryMappingRepository
  }

  async execute(reportId: string, name: string, yermon: string, expenses: Expense[]) {

    //TODO: Manejo de errores por aquí...

    await this.reportRepository.add(reportId, name, yermon)

    const categoryMappingCollection = await this.categoryMappingRepository.list()
   
    expenses.forEach(e => e.reportId = reportId)

    this.mapCategories(expenses, categoryMappingCollection)

    await this.expenseReporitory.save(expenses)    
  }

  private mapCategories(expenses: Expense[], categoryMappingCollection: CategoryMappingCollection) {
    for (const expense of expenses) {
      const mapping = categoryMappingCollection.get(expense.description)

      if (!mapping) {
        continue
      }

      console.log('FOUND MAPPING', mapping)
      expense.category = mapping.category
      expense.subcategory = mapping.subcategory
    }
  }
}