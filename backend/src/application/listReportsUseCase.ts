import { injectable, inject } from "inversify"
import Types from "../types.js"
import ReportRepository from "../infrastructure/reports/ReportRepository.js"

@injectable()
export default class ListReportsUseCase {
  private reportRepository: ReportRepository

  constructor(
    @inject(Types.Repositories.ReportRepository) reportRepository
  ) {
    this.reportRepository = reportRepository
  }

  execute() {
    return this.reportRepository.list()
  }
}