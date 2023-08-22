import { injectable, inject } from "inversify"
import Types from "../types.js"
import ReportService from "../domain/services/ReportService.js"

@injectable()
export default class ConsolidateReportUseCase {
  private reportService: ReportService

  constructor(
    @inject(Types.Services.ReportService) reportService
  ) {
    this.reportService = reportService
  }

  execute(reportId: string) {

    console.log('ConsolidateReportUseCase.execute', reportId)
    return this.reportService.consolidate(reportId)    
  }
}