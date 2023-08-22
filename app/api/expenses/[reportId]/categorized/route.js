import {NextResponse} from 'next/server'
import containerInstance, {Types} from 'total-budget-tracker-backend'

export async function GET(request, {params}) {
  const {reportId} = params

  const usecase = containerInstance().get(
    Types.UseCases.ListCategorizedExpensesUseCase
  )

  const data = await usecase.execute(reportId)

  return NextResponse.json(data)
}
