export default function useCreateReport() {
  const create = async (reportId, dateRange, expenses) => {
    const url = `/api/reports`
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({reportId, dateRange, expenses})
    })
    return response
  }

  return {create}
}
