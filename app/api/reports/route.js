import {NextResponse} from 'next/server'
import DI, {Types} from 'total-budget-tracker-backend'

export async function GET() {
  const usecase = DI.get(Types.UseCases.ListReportsUseCase)

  const reports = await usecase.execute()
  return NextResponse.json(reports)
}

export async function POST(request) {
  const usecase = DI.get(Types.UseCases.CreateReportUseCase)

  const body = await request.json()

  const {reportId, dateRange, expenses} = body

  console.log('Creating report with ID:', reportId, dateRange)
  console.log('Number of expenses:', expenses.length)
  expenses.forEach(expense => {
    expense.date = new Date(expense.date)
  })

  dateRange.start = new Date(dateRange.start)
  dateRange.end = new Date(dateRange.end)

  await usecase.execute(reportId, dateRange, expenses)

  return NextResponse.json({})
}
