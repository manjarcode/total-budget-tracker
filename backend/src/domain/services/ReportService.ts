import { injectable, inject } from 'inversify'
import Types from '../../types.js'
import ExpenseRepository from '../../infrastructure/expenses/ExpenseRepository.js'
import CategoryRepository from '../../infrastructure/categories/CategoryRepository.js'
import ExpenseItem from '../models/ExpenseItem.js'
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

    collection.formatAmmount()

      
    return {
      items: collection.items(),
      summary: {
        total: collection.totalAmmount()
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
      this.consolidateItem(category, amount)

      if (!hasSubcategory) {
        continue
      }

      const subcategoryGroup = category.items.getByName(subcategoryName)
      this.consolidateItem(subcategoryGroup, amount)      
    }

    return collection
  }

  private consolidateItem(item: ExpenseItem, amount: number) {
    item.total += amount
  }
}