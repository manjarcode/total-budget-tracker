import { NextResponse } from 'next/server'
import container, {Types} from "total-budget-tracker-backend"

export async function GET() {
  const usecase = container.get(Types.SaveDocumentUseCase)

  const path = `${process.cwd()}/temp/example.xls`
  const data = await usecase.execute(path)

  return NextResponse.json({ data })
}