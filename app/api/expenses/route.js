import { NextResponse } from 'next/server'
import containerInstance, {Types} from "total-budget-tracker-backend"
import { v4 as uuid } from 'uuid'

export async function POST() {
  const useCase = containerInstance().get(Types.UseCases.SaveDocumentUseCase)

  const path = `${process.cwd()}/temp/example.xls`
  const reportId = uuid()
  const data = await useCase.execute(reportId, path)

  return NextResponse.json(data)
}


export async function PUT(request) {
  const useCase = containerInstance().get(Types.UseCases.CategorizeExpenseUseCase)

  const expenseDto = await request.json()
  await useCase.execute(expenseDto)
  return NextResponse.json({})
}
