import { injectable } from 'inversify';
import Expense from '../../domain/models/Expense';
import ExpenseRecord from './ExpenseRecord';

@injectable()
export default class ExpenseMapper {
  constructor() {}
  
  toRecord(expense: Expense): ExpenseRecord {
    console.log('toRecord, date:', expense.date)
    return new ExpenseRecord(
      expense.reportId,
      expense.line,
      expense.description,
      expense.amount,
      expense.date.getTime()
    )
  }

  toDomain(expenseRecord: ExpenseRecord): Expense {
    return new Expense(
      expenseRecord.reportId,
      expenseRecord.line,
      expenseRecord.description,
      expenseRecord.amount,
      new Date(expenseRecord.date)
    )
  }
}