import { injectable, inject } from "inversify"
import Types from "../types.js"

@injectable()
export default class ListCategoriesUseCase {
  private categoryRepository: any 

  constructor(
    @inject(Types.Repositories.CategoryRepository) categoryRepository
  ) {
    this.categoryRepository = categoryRepository
  }

  async execute() {
    return this.categoryRepository.list()
  }
}