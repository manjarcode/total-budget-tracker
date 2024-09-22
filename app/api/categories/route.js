import {NextResponse} from 'next/server'
import DI, {Types} from 'total-budget-tracker-backend'

export async function GET() {
  const usecase = DI.get(Types.UseCases.ListCategoriesUseCase)

  const categories = await usecase.execute()
  return NextResponse.json(categories)
}
