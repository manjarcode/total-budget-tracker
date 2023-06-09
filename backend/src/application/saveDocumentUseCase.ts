import ExcelDocumentRepository from "../infrastructure/documents/ExcelDocumentRepository.js"

export default class SaveDocumentUseCase {
  #repository 
  constructor() {
    this.#repository = new ExcelDocumentRepository()
  }

  async execute({ path }) {
    return await this.#repository.read(path)
  }
}
