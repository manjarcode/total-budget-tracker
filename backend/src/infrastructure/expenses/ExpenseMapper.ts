import { injectable } from 'inversify';
import Expense from '../../domain/models/Expense';
import ExpenseRecord from './ExpenseRecord';

@injectable()
export default class ExpenseMapper {
  constructor() {}

  toRecord(expense: Expense): ExpenseRecord {
    return new ExpenseRecord(
      expense.reportId,
      expense.date.getTime(),
      expense.description,
      expense.amount,
    )
  }

  toDomain(expenseRecord: ExpenseRecord): Expense {
    return new Expense(
      expenseRecord.reportId,
      new Date(expenseRecord.date),
      expenseRecord.description,
      expenseRecord.amount,
    )
  }
}