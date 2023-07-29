import { NextResponse } from 'next/server'
import containerInstance, {Types} from "total-budget-tracker-backend"
import { v4 as uuid } from 'uuid'

export async function POST(request) {
  const dto = await request.json()
  const {reportId, name, yermon} = dto
  const useCase = containerInstance().get(Types.UseCases.SaveDocumentUseCase)

  const path = `${process.cwd()}/temp/example.xls`
  const data = await useCase.execute(reportId, path, name, yermon)

  return NextResponse.json(data)
}


export async function PUT(request) {
  const useCase = containerInstance().get(Types.UseCases.CategorizeExpenseUseCase)

  const expenseDto = await request.json()
  await useCase.execute(expenseDto)
  return NextResponse.json({})
}
