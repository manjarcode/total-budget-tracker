export function ViewModel({expenses}) {
  console.log('expenses', expenses)
  const expenseCount = expenses?.length || 0
  return {expenseCount}
}