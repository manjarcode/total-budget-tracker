export default function useSaveExpense() {
  const saveExpense = expense => {
    const url = `/api/expenses`
    return fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(expense)
    })
  }

  return {saveExpense}
}
