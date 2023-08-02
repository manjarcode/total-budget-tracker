export default class ExpenseRecord {
  reportId: string
  description: string
  amount: number
  date: number
  category: string

  constructor(reportId: string, date: number, description: string, amount: number, category: string) {
    this.reportId = reportId
    this.date = date
    this.description = description
    this.amount = amount
    this.category = category
  }
}
