import {NextResponse} from 'next/server'
import DI, {Types} from 'total-budget-tracker-backend'

export async function PUT(request) {
  const useCase = DI.get(Types.UseCases.CategorizeExpenseUseCase)

  const expenseDto = await request.json()
  expenseDto.date = new Date(expenseDto.date)

  await useCase.execute(expenseDto)
  return NextResponse.json({})
}

export async function POST(request) {
  const {reportId, date, description, ammount, category, subcategory} =
    await request.json()

  const useCase = DI.get(Types.UseCases.Transactions.CreateExpenseUseCase)

  await useCase.execute(
    reportId,
    new Date(date),
    description,
    ammount,
    category,
    subcategory
  )

  return NextResponse.json({})
}
