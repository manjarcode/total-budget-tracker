import ExpenseGroup from "./ExpenseGroup"

const DEFAULT_UNCATEGORIZED_NAME = 'Otros'

export default class ExpenseGroupCollection {
  private collection: ExpenseGroup[]
  
  public constructor() {
    this.collection = []
  }

  public getByName(name: string = DEFAULT_UNCATEGORIZED_NAME) : ExpenseGroup {
    const groupFound = this.collection.find(group => group.getName() === name)

    if (groupFound) {
      return groupFound
    }

    const group = this.addEmptyGroup(name)

    return group
  }

  private addEmptyGroup(name) {
    const group: ExpenseGroup = new ExpenseGroup(name)

    this.collection.push(group)

    return group
  }

  public totalAmmount() {
    let total = 0

    for (const group of this.collection) {
      total += group.getTotal()
    }

    return total
  }

  public totalBudget() {
    let total = 0

    for (const group of this.collection) {
      total += group.getBugget()
    }

    return total
  }

  public toDto() {
    return this.collection.map(group => group.toDto())
  }
}