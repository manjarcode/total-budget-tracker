import {NextResponse} from 'next/server'
import containerInstance, {Types} from 'total-budget-tracker-backend'

export async function GET() {
  const usecase = containerInstance().get(Types.UseCases.ListCategoriesUseCase)

  const categories = await usecase.execute()
  return NextResponse.json(categories)
}
