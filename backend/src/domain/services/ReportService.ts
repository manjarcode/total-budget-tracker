import { injectable, inject } from 'inversify'
import Types from '../../types.js'
import ExpenseRepository from '../../infrastructure/expenses/ExpenseRepository.js'
import CategoryRepository from '../../infrastructure/categories/CategoryRepository.js'
import ExpenseGroup from '../models/ExpenseGroup.js'
import ExpenseGroupCollection from '../models/ExpenseGroupCollection.js'

@injectable()
export default class ReportService {
  private expenseRepository: ExpenseRepository 
  private categoryRepository: CategoryRepository

  constructor(
    @inject(Types.Repositories.ExpenseRepository) expenseRepository,
    @inject(Types.Repositories.CategoryRepository) categoryRepository,
  ) {
    this.expenseRepository = expenseRepository
    this.categoryRepository = categoryRepository
  }

  async consolidate(reportId: string) {
    const [categories, movements] = await Promise.all([
      this.categoryRepository.list(),
      this.expenseRepository.listCategorized(reportId)
    ])

    const expenses = movements.filter(item => item.amount < 0)

    const collection = this.groupByCategory(expenses)

    this.applyBudgets(categories, collection)

    return {
      items: collection.toDto(),
      summary: {
        total: collection.totalAmmount(),
        budget: collection.totalBudget()
      }
    }
  }

  private groupByCategory(expenses) : ExpenseGroupCollection {
    const collection = new ExpenseGroupCollection()

    for (const expense of expenses) {
      const categoryName = expense.category
      const subcategoryName = expense.subcategory
      const amount = -expense.amount
      const hasSubcategory = subcategoryName !== null      

      const category = collection.getByName(categoryName)
      category.addAmount(amount)
      
      if (!hasSubcategory) {
        continue
      }

      const subcategoryGroup = category.getSubgroups().getByName(subcategoryName)      
      subcategoryGroup.addAmount(amount)
    }

    return collection
  }

  private applyBudgets(categories, collection) {
    for (const category of categories) {
      const categoryName = category.name
      const categoryGroup = collection.getByName(categoryName)

      categoryGroup.setBudget(category.budget)
    }
  }
}