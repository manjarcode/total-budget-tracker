'use server'
import {NextResponse} from 'next/server'
import DI, {Types} from 'total-budget-tracker-backend'
import {v4 as uuid} from 'uuid'

export async function POST(request) {
  const data = await request.formData()
  const file = data.get('file')

  if (!file) {
    return NextResponse.json({success: false})
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const reportId = uuid()
  const useCase = DI.get(Types.UseCases.SaveDocumentUseCase)

  const expenses = await useCase.execute(reportId, buffer)

  return NextResponse.json({
    filename: file.name,
    expenses
  })
}
