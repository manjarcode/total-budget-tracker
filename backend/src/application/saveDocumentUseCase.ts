import { injectable, inject } from "inversify"
import "reflect-metadata"
import Types from "../types.js"
import BBVADocumentRepository from "../infrastructure/documents/BBVADocumentRepository.js"


@injectable()
export default class SaveDocumentUseCase {
  private excelRepository : BBVADocumentRepository 

  constructor(
    @inject(Types.Repositories.BBVADocumentRepository) excelRepository,
  ) {
    this.excelRepository = excelRepository
  }

  async execute(reportId: string, buffer: any) {
    const expenses =  await this.excelRepository.read(reportId, buffer)
    return expenses
  }
}
