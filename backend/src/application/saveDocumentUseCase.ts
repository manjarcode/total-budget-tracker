import { injectable, inject } from "inversify"
import "reflect-metadata"
import Types from "../types.js"

@injectable()
export default class SaveDocumentUseCase {
  #repository 
  constructor(
    @inject(Types.ExcelDocumentRepository) repository
  ) {
    this.#repository = repository
  }

  async execute(path: string) {
    return await this.#repository.read(path)
  }
}
