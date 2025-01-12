import ExpenseGroupCollection from "./ExpenseGroupCollection";

export default interface ExpenseGroup {
  name: string,
  total: number,
  items: ExpenseGroupCollection
}