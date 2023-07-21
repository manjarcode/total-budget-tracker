import { NextResponse } from 'next/server'
import containerInstance, {Types} from "total-budget-tracker-backend"

export async function POST() {
  const usecase = containerInstance().get(Types.UseCases.SaveDocumentUseCase)

  const path = `${process.cwd()}/temp/example.xls`
  const reportId = 'bdf0dcc6-2f06-4cac-8dec-66a63fb96396'
  const data = await usecase.execute(reportId, path)

  return NextResponse.json({ data })
}


export async function GET(request, {params}) {
  const {reportId} = params

  const usecase = containerInstance().get(Types.UseCases.GetReportUseCase)

  const data = await usecase.execute(reportId)

  return NextResponse.json(data )
}