import { Container } from "inversify";
import Types from "./types.js"
export {default as Types} from "./types.js"
import DynamoDbAdapterFactory from "./infrastructure/dynamoDbAdapterFactory.js"
import ExpenseRepository from "./infrastructure/expenses/ExpenseRepository.js"
import ExcelDocumentRepository from "./infrastructure/documents/ExcelDocumentRepository.js"
import SaveDocumentUseCase from "./application/saveDocumentUseCase.js"
import ReportRepository from "./infrastructure/reports/ReportRepository.js"
import ListReportsUseCase from "./application/listReportsUseCase.js"
import ListCategorizedExpenses from "./application/listCategorizedExpensesUseCase.js"
import CategorizeExpenseUseCase from "./application/categorizeExpenseUseCase.js"
import ExpenseMapper from "./infrastructure/expenses/ExpenseMapper.js"
import CategoryRepository from "./infrastructure/categories/CategoryRepository.js";
import ListCategoriesUseCase from "./application/listCategoriesUseCase.js";
import ListUncategorizedExpensesUseCase from "./application/listUncategorizedExpensesUseCase.js";

let container : Container;

function initContainer() {
  container = new Container()
  container.bind<DynamoDbAdapterFactory>(Types.DynamoDbAdapterFactory).to(DynamoDbAdapterFactory)
  container.bind<ExpenseMapper>(Types.Mappers.ExpenseMapper).to(ExpenseMapper)
  container.bind<CategoryRepository>(Types.Repositories.CategoryRepository).to(CategoryRepository)
  container.bind<ExcelDocumentRepository>(Types.Repositories.ExcelDocumentRepository).to(ExcelDocumentRepository)
  container.bind<ExpenseRepository>(Types.Repositories.ExpenseRepository).to(ExpenseRepository)
  container.bind<ReportRepository>(Types.Repositories.ReportRepository).to(ReportRepository)
  container.bind<CategorizeExpenseUseCase>(Types.UseCases.CategorizeExpenseUseCase).to(CategorizeExpenseUseCase)
  container.bind<ListCategoriesUseCase>(Types.UseCases.ListCategoriesUseCase).to(ListCategoriesUseCase)
  container.bind<ListCategorizedExpenses>(Types.UseCases.ListCategorizedExpensesUseCase).to(ListCategorizedExpenses)
  container.bind<ListReportsUseCase>(Types.UseCases.ListReportsUseCase).to(ListReportsUseCase)
  container.bind<ListUncategorizedExpensesUseCase>(Types.UseCases.ListUncategorizedExpensesUseCase).to(ListUncategorizedExpensesUseCase)
  container.bind<SaveDocumentUseCase>(Types.UseCases.SaveDocumentUseCase).to(SaveDocumentUseCase)
}

export default function containerInstance()  {
  if (!container) {
    initContainer()
  }

  return container
}
