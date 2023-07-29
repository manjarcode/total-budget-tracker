import {NextResponse} from 'next/server'
import containerInstance, {Types} from 'total-budget-tracker-backend'

export async function GET() {
  const usecase = containerInstance().get(Types.UseCases.ListReportsUseCase)

  const reports = await usecase.execute()
  return NextResponse.json(reports)
}
