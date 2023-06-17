import { v4 as uuid } from 'uuid'

export default class Expense {
  id: string
  description: string
  amount: number
  date: Date

  constructor(description: string, amount: number, date: Date) {
    this.id = uuid()
    this.description = description
    this.amount = amount
    this.date = date
  }
}
