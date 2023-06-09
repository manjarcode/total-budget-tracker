import ExcelDocumentRepository from "../../backend/lib/infrastructure/documents/ExcelDocumentRepository"

import { NextResponse } from 'next/server'
 
export async function GET() {
  const repository = new ExcelDocumentRepository()
  const path = `${process.cwd()}/temp/example.xls`
  const data = await repository.read(path)

  return NextResponse.json({ data })
}