import {NextResponse} from 'next/server'
import DI, {Types} from 'total-budget-tracker-backend'

export async function GET() {
  const usecase = DI.get(Types.UseCases.ListReportsUseCase)

  const reports = await usecase.execute()
  return NextResponse.json(reports)
}

export async function POST(request) {
  const usecase = DI.get(Types.UseCases.CreateReportUseCase)

  const {reportId, name, yermon, expenses} = await request.json()

  expenses.forEach(expense => {
    expense.date = new Date(expense.date)
  })

  await usecase.execute(reportId, name, yermon, expenses)

  return NextResponse.json({})
}
