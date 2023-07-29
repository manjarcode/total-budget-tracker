export default class ExpenseRecord {
  reportId: string
  line: number
  description: string
  amount: number
  date: number

  constructor(reportId: string, line: number, description: string, amount: number, date: number) {
    this.reportId = reportId
    this.line = line
    this.description = description
    this.amount = amount
    this.date = date
  }
}
