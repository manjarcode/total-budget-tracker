export default class Expense {
  reportId: string
  description: string
  amount: number
  date: Date
  category: string

  constructor(reportId: string, date: Date, description: string, amount: number, category: string) {
    this.reportId = reportId
    this.date = date
    this.description = description
    this.amount = amount
    this.category = category
  }
}
