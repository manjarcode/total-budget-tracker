import { NextResponse } from 'next/server'
import containerInstance, {Types} from "total-budget-tracker-backend"

export async function GET() {
  const usecase = containerInstance().get(Types.SaveDocumentUseCase)

  const path = `${process.cwd()}/temp/example.xls`
  const data = await usecase.execute(path)

  return NextResponse.json({ data })
}