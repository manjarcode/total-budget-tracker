export default class Expense {
  reportId: string
  line: number
  description: string
  amount: number
  date: Date

  constructor(reportId: string, line: number, description: string, amount: number, date: Date) {
    this.reportId = reportId
    this.line = line
    this.description = description
    this.amount = amount
    this.date = date
  }
}
