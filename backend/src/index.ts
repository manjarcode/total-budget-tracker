import { Container } from "inversify";
import Types from "./types.js"
export {default as Types} from "./types.js"
import DynamoDbAdapterFactory from "./infrastructure/dynamoDbAdapter.js"
import ExpenseRepository from "./infrastructure/expenses/ExpenseRepository.js"
import ExcelDocumentRepository from "./infrastructure/documents/ExcelDocumentRepository.js"
import SaveDocumentUseCase from "./application/saveDocumentUseCase.js"
import ReportRepository from "./infrastructure/reports/ReportRepository.js"
import ListReportsUseCase from "./application/listReportsUseCase.js"
import GetReportUseCase from "./application/getReportUseCase.js"
import CategorizeExpenseUseCase from "./application/categorizeExpenseUseCase.js"

let container : Container;

function initContainer() {
  container = new Container()
  container.bind<DynamoDbAdapterFactory>(Types.DynamoDbAdapterFactory).to(DynamoDbAdapterFactory)
  container.bind<ExpenseRepository>(Types.Repositories.ExpenseRepository).to(ExpenseRepository)
  container.bind<ExcelDocumentRepository>(Types.Repositories.ExcelDocumentRepository).to(ExcelDocumentRepository)
  container.bind<SaveDocumentUseCase>(Types.UseCases.SaveDocumentUseCase).to(SaveDocumentUseCase)
  container.bind<ReportRepository>(Types.Repositories.ReportRepository).to(ReportRepository)
  container.bind<ListReportsUseCase>(Types.UseCases.ListReportsUseCase).to(ListReportsUseCase)
  container.bind<GetReportUseCase>(Types.UseCases.GetReportUseCase).to(GetReportUseCase)
  container.bind<CategorizeExpenseUseCase>(Types.UseCases.CategorizeExpenseUseCase).to(CategorizeExpenseUseCase)
}


export default function containerInstance()  {
  if (!container) {
    initContainer()
  }

  return container
}

