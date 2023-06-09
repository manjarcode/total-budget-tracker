import { injectable, inject } from "inversify"
import "reflect-metadata"
import Types from "../types.js"
import SaveDocumentUseCase from "./saveDocumentUseCase.js"

@injectable()
export default class SaveDocumentUseCaseImpl implements SaveDocumentUseCase {
  #repository 
  constructor(
    @inject(Types.DocumentRepository) repository
  ) {
    this.#repository = repository
  }

  async execute(path: string) {
    return await this.#repository.read(path)
  }
}
