import Expense from "../../domain/models/Expense"
import * as xlsx from "xlsx"

export default class ExcelDocumentRepository {
    read(filePath) {
        const workbook = xlsx.readFile(filePath)
        const worksheet = workbook.Sheets[workbook.SheetNames[0]]
        const rows = xlsx.utils.sheet_to_json(worksheet, { header: 1 })
        const expenses = [];
        const initialRow = 6;
        console.log('probando')
        // Iterar sobre las filas y crear instancias de Expense
        for (let i = initialRow; i < rows.length; i++) {
            const row = rows[i]
            const description = row[3]
            const amount = parseFloat(row[6])
            const date = new Date(row[0])
            console.log(JSON.stringify(row))
            // Crear una nueva instancia de Expense y agregarla al arreglo
            const expense = new Expense(description, amount, date)
            expenses.push(expense)
        }
        console.log(JSON.stringify(expenses))
        return Promise.resolve(expenses);
    }
}
