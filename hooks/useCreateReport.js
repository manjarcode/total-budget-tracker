import {useEffect, useState} from 'react'

export default function useCreateReport(reportId) {
  const create = async (reportId, name, yermon, expenses) => {
    const url = `/api/reports`
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({reportId, name, yermon, expenses})
    })
    return response
  }

  return {create}
}
