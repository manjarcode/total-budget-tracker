import {NextResponse} from 'next/server'
import DI, {Types} from 'total-budget-tracker-backend'

export async function GET() {
  const usecase = DI.get(Types.UseCases.ListReportsUseCase)

  const reports = await usecase.execute()
  return NextResponse.json(reports)
}
