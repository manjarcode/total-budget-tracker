import { NextResponse } from 'next/server'
import containerInstance, {Types} from "total-budget-tracker-backend"

export async function GET() {
  const usecase = containerInstance().get(Types.UseCases.SaveDocumentUseCase)

  const path = `${process.cwd()}/temp/example.xls`
  const reportId = 'bdf0dcc6-2f06-4cac-8dec-66a63fb96396'
  const data = await usecase.execute(reportId, path)

  return NextResponse.json({ data })
}