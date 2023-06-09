import Expense from "../../domain/models/Expense.js";
import { DocumentRepository } from "./DocumentRepository.js";
import * as xlsx from "xlsx";

export default class ExcelDocumentRepository implements DocumentRepository {
  
  read(filePath: string): Promise<Expense[]> {
    const workbook = xlsx.readFile(filePath)
    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    const rows = xlsx.utils.sheet_to_json(worksheet, { header: 1 }) as any[][]

    const expenses: Expense[] = [];

    const initialRow = 6
    // Iterar sobre las filas y crear instancias de Expense
    for (let i = initialRow; i < rows.length; i++) {
      const row = rows[i]
      const description = row[3]
      const amount = parseFloat(row[6])
      const date = new Date(row[0])

      // Crear una nueva instancia de Expense y agregarla al arreglo
      const expense = new Expense(description, amount, date)
      expenses.push(expense)
    }


    return Promise.resolve(expenses)
  }
}