import "reflect-metadata";
import { injectable } from "inversify";
import * as xlsx from "xlsx";

import Expense from "../../domain/models/Expense.js";

@injectable()
export default class ExcelDocumentRepository {
  private givenTimes: number[]

  constructor() {
    this.givenTimes = []
  }

  generateUniqueDate(days): Date {
    const date = new Date(0, 0, days - 1)

    let time = date.getTime()

    while (this.givenTimes.includes(time)) {
      date.setSeconds(date.getSeconds() + 1)
      time = date.getTime()
    }

    this.givenTimes.push(time)

    return date
  }

  read(reportId:string, buffer: any): Promise<Expense[]> {
    const workbook = xlsx.read(buffer)
    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    
    return this.parse(worksheet, reportId)
  }

  parse(worksheet: any, reportId: string): Promise<Expense[]> {
    const rows = xlsx.utils.sheet_to_json(worksheet, { header: 1 }) as any[][]

    const expenses: Expense[] = [];

    const initialRow = 6

    for (let i = initialRow; i < rows.length; i++) {
      
      const row = rows[i]

      const description = row[3]
      const amount = parseFloat(row[6])
      const days = row[0]
      const date = this.generateUniqueDate(days)
      const emptyCategory = ''
      const emptySubcategory = ''
      const expense = new Expense(
        reportId,
        date,
        description,
        amount,
        emptyCategory,
        emptySubcategory
      )
      expenses.push(expense)
    }
    return Promise.resolve(expenses)
  }
}