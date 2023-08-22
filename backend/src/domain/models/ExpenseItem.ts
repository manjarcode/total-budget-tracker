export default interface ExpenseItem {
  name: string,
  total: number,
  items: ExpenseItem[]
}