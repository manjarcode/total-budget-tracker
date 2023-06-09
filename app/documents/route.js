import { NextResponse } from 'next/server'
import SaveDocumentUseCase from "total-budget-tracker-backend"

export async function GET() {
  const useCase = new SaveDocumentUseCase()
  const path = `${process.cwd()}/temp/example.xls`
  const data = await useCase.execute({path})

  return NextResponse.json({ data })
}