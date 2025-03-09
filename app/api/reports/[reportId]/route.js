import {NextResponse} from 'next/server'
import DI, {Types} from 'total-budget-tracker-backend'

export async function GET(request, {params}) {
  const {reportId} = params
  const usecase = DI.get(Types.UseCases.ConsolidateReportUseCase)

  const consolidatedReport = await usecase.execute(reportId)
  return NextResponse.json(consolidatedReport)
}

export async function DELETE(request, {params}) {
  const {reportId} = params
  const usecase = DI.get(Types.UseCases.RemoveReportUseCase)

  await usecase.execute(reportId)

  return NextResponse.json(null, {status: 204})
}
