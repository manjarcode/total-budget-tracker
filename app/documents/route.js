import { NextResponse } from 'next/server'
import container, {Types} from "total-budget-tracker-backend"

export async function GET() {

  console.log('container',container)
  const usecase = container.get(Types.SaveDocumentUseCase)
  console.log('usecase',usecase)

  const path = `${process.cwd()}/temp/example.xls`
  const data = await usecase.execute(path)

  return NextResponse.json({ data })
}