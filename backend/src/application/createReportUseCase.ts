import { injectable, inject } from "inversify"
import Types, { DateRangeType } from "../types.js"
import ReportRepository from "../infrastructure/reports/ReportRepository.js"
import Expense from "../domain/models/Expense.js"
import ExpenseRepository from "../infrastructure/expenses/ExpenseRepository.js"
import CategoryMappingRepository from "../infrastructure/categoryMappings/CategoryMappingRepository.js"
import CategoryMappingCollection from "../domain/models/CategoryMappingCollection.js"
import DateRange from "../domain/models/DateRange.js"

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

  async execute(reportId: string, dateRangeType: DateRangeType, expenses: Expense[]) {
    const dateRange = new DateRange(dateRangeType)

    await this.reportRepository.add(reportId, dateRange.name(), dateRange.id())

    const categoryMappingCollection = await this.categoryMappingRepository.list()

    expenses = expenses.filter(expense => expense.date >= dateRangeType.start && expense.date <= dateRangeType.end)
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

      expense.category = mapping.category
      expense.subcategory = mapping.subcategory
    }
  }
}