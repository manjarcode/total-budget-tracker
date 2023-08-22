import { injectable, inject } from 'inversify'
import Types from '../../types.js'
import ExpenseRepository from '../../infrastructure/expenses/ExpenseRepository.js'
import ExpenseItem from '../models/ExpenseItem.js'

@injectable()
export default class ReportService {
  private expenseRepository: ExpenseRepository 

  constructor(
    @inject(Types.Repositories.ExpenseRepository) expenseRepository
  ) {
    this.expenseRepository = expenseRepository
  }

  async consolidate(reportId: string) {
    const expenses = await this.expenseRepository.listCategorized(reportId)

    const dictionary: ExpenseItem[] = []

    for (const expense of expenses) {
      const category = expense.category
      const subcategory = expense.subcategory
      const amount = expense.amount
      const hasSubcategory = subcategory !== null      

      const categoryItem = this.retrieveItem(dictionary, category)
      this.consolidateItem(categoryItem, amount)

      if (!hasSubcategory) {
        continue
      }

      const subcategoryItem = this.retrieveItem(categoryItem.items, subcategory)
      this.consolidateItem(subcategoryItem, amount)      
    }

    return dictionary
  }


  private retrieveItem(items: ExpenseItem[], name: string) : ExpenseItem {
    const itemFound = items.find(item => item.name === name)

    if (itemFound) {
      return itemFound
    }

    const item: ExpenseItem = {
      name,
      total:0,
      items: []
    }

    items.push(item)

    return item
  }

  private consolidateItem(item: ExpenseItem, amount: number) {
    item.total += amount
  }
}