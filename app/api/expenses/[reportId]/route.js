import { NextResponse } from 'next/server'
import containerInstance, {Types} from "total-budget-tracker-backend"
import { v4 as uuid } from 'uuid'

export async function GET(request, {params}) {
  const {reportId} = params

  const usecase = containerInstance().get(Types.UseCases.GetReportUseCase)

  const data = await usecase.execute(reportId)

  return NextResponse.json(data )
}