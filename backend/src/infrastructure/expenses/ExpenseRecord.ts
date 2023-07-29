export default class ExpenseRecord {
  reportId: string
  description: string
  amount: number
  date: number

  constructor(reportId: string, date: number, description: string, amount: number) {
    this.reportId = reportId
    this.date = date
    this.description = description
    this.amount = amount
  }
}
