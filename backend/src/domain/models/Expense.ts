export default class Expense {
  reportId: string
  description: string
  amount: number
  date: Date

  constructor(reportId: string, date: Date, description: string, amount: number) {
    this.reportId = reportId
    this.date = date
    this.description = description
    this.amount = amount
  }
}
