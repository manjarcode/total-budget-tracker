import ExpenseGroupCollection from "./ExpenseGroupCollection";

export default class ExpenseGroup {
  private name: string
  private total: number
  private subgroups: ExpenseGroupCollection

  public constructor(name: string) {
    this.name = name
    this.total = 0
    this.subgroups = new ExpenseGroupCollection()
  }

  public getName() {
    return this.name
  }

  public getTotal() {
    return this.total
  }

  public getSubgroups() {
    return this.subgroups
  }

  public addAmount(amount: number) {
    this.total += amount
    this.total = Math.round(this.total * 100) / 100
  }

  public toDto() {
    return {
      name: this.name,
      total: this.total,
      subgroups: this.subgroups.toDto()
    }
  }  
}