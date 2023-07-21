import { NextResponse } from 'next/server'
import containerInstance, {Types} from "total-budget-tracker-backend"
import { v4 as uuid } from 'uuid'

export async function POST() {
  const usecase = containerInstance().get(Types.UseCases.SaveDocumentUseCase)

  const path = `${process.cwd()}/temp/example.xls`
  const reportId = uuid()
  const data = await usecase.execute(reportId, path)

  return NextResponse.json(data)
}
