import {NextResponse} from 'next/server'
import DI, {Types} from 'total-budget-tracker-backend'

export async function POST(request) {
  const dto = await request.json()
  const {reportId, name, yermon} = dto
  const useCase = DI.get(Types.UseCases.SaveDocumentUseCase)

  const path = `${process.cwd()}/temp/example.xls`
  const data = await useCase.execute(reportId, path, name, yermon)

  return NextResponse.json(data)
}

export async function PUT(request) {
  const useCase = DI.get(
    Types.UseCases.CategorizeExpenseUseCase
  )

  const expenseDto = await request.json()
  expenseDto.date = new Date(expenseDto.date)

  await useCase.execute(expenseDto)
  return NextResponse.json({})
}
