

import { NextResponse } from 'next/server'
import ExcelDocumentRepository from "total-budget-tracker-backend"
 
console.log('ExcelDocumentRepository', ExcelDocumentRepository)
export async function GET() {
  const repository = new ExcelDocumentRepository()
  const path = `${process.cwd()}/temp/example.xls`
  const data = await repository.read(path)

  return NextResponse.json({ data })
}