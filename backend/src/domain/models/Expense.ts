export default class Expense {
  description: string;
  amount: number;
  date: Date;

  constructor(description: string, amount: number, date: Date) {
    this.description = description;
    this.amount = amount;
    this.date = date;
  }
}
