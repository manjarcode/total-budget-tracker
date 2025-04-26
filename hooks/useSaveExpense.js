export default function useExpenses() {
  const createExpense = expense => {
    const url = `/api/expenses`
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(expense)
    })
  }

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

  const removeExpense = (reportId, expenseId) => {
    const url = `/api/reports/${reportId}/expense/${expenseId}`

    return fetch(url, {
      method: 'DELETE'
    })
  }

  return {createExpense, saveExpense, removeExpense}
}
