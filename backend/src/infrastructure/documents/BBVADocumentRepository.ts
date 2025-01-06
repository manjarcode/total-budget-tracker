import "reflect-metadata";
import { injectable } from "inversify";
import * as xlsx from "xlsx";
import Expense from "../../domain/models/Expense.js";
import { parse } from 'date-fns';
import { es } from 'date-fns/locale';

@injectable()
export default class BBVADocumentRepository {
  private givenTimes: number[]

  constructor() {
    this.givenTimes = []
  }

  generateUniqueDate(dateString): Date {
    const date = parse(dateString, 'dd/MM/yyyy', new Date(), { locale: es });

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

      const description = row[2]
      const amount = parseFloat(row[4])
      const dateString = row[0]

      const date = this.generateUniqueDate(dateString)
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