import ExpenseGroupCollection from "./ExpenseGroupCollection";

//TODO: Refactor rename to ExpenseGroup
export default interface ExpenseItem {
  name: string,
  total: number,
  items: ExpenseGroupCollection
}