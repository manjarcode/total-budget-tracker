export default class Expense {
  id: Number
  reportId: string
  description: string
  amount: number
  date: Date
  category: string
  subcategory: string

  constructor(
    reportId: string, 
    date: Date,
    description: string,
    amount: number,
    category: string,
    subcategory: string
  ) {
    this.id = Number(date)
    this.reportId = reportId
    this.date = date
    this.description = description
    this.amount = amount
    this.category = category
    this.subcategory = subcategory
  }
}
