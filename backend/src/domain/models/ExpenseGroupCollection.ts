import ExpenseGroup from "./ExpenseGroup"

const DEFAULT_UNCATEGORIZED_NAME = 'Otros'

export default class ExpenseGroupCollection {
  private collection: ExpenseGroup[]
  
  public constructor() {
    this.collection = []
  }

  public getByName(name: string = DEFAULT_UNCATEGORIZED_NAME) : ExpenseGroup {
    if (!name) {
      name = '(Sin categoría)'
    }
    
    const groupFound = this.collection.find(item => item.name === name)

    if (groupFound) {
      return groupFound
    }

    const group = this.addEmptyGroup(name)

    return group
  }

  private addEmptyGroup(name) {
    const group: ExpenseGroup = {
      name,
      total:0,
      items: new ExpenseGroupCollection()
    }

    this.collection.push(group)

    return group
  }


  public formatAmmount() {
    for (const group of this.collection) {
      //TODO: ESTO SE PUEDE METER EN EL EXPENSE GROUP
      group.total = Math.round(group.total * 100) / 100

      // TODO arreglar
      for (const subcategory of group.items.collection) {
        subcategory.total = Math.round(subcategory.total*100) / 100
      }
    }
  }

  public totalAmmount() {
    let total = 0

    for (const category of this.collection) {
      total += category.total
    }

    return total
  }

  public items() {
    return this.collection
  }
}