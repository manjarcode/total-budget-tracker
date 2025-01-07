import {NextResponse} from 'next/server'

import DI, {Types} from 'total-budget-tracker-backend'

export async function DELETE(request, {params}) {

  const {reportId, expenseId} = params
  const usecase = DI.get(
    Types.UseCases.RemoveExpenseUseCase
  )

  await usecase.execute(reportId, Number(expenseId))

  return NextResponse.json(null, {status: 200})
}