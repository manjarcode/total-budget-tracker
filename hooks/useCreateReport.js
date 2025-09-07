export default function useCreateReport() {
  const create = async (reportId, name, yermon, dateRange, expenses) => {
    const url = `/api/reports`
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({reportId, name, yermon, dateRange, expenses})
    })
    return response
  }

  return {create}
}
