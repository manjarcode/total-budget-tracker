import { injectable, inject } from "inversify"
import Types from "../types.js"

@injectable()
export default class ListReportsUseCase {
  private reportRepository: any //TODO usar el bueno

  constructor(
    @inject(Types.Repositories.ReportRepository) reportRepository
  ) {
    this.reportRepository = reportRepository
  }

  execute() {
    return this.reportRepository.list()
  }
}