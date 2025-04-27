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
import ConsolidateReportUseCase from "./application/consolidateReportUseCase.js";
import ReportService from "./domain/services/ReportService.js";
import CreateReportUseCase from "./application/createReportUseCase.js";
import RemoveReportUseCase from "./application/removeReportUseCase.js";
import BBVADocumentRepository from "./infrastructure/documents/BBVADocumentRepository.js";
import RemoveExpenseUseCase from "./application/removeExpenseUseCase.js";
import CreateExpenseUseCase from "./application/transactions/createExpenseUseCase.js";
import CategoryMappingRepository from "./infrastructure/categoryMappings/CategoryMappingRepository.js";

const DI = new Container()

DI.bind<DynamoDbAdapterFactory>(Types.DynamoDbAdapterFactory).to(DynamoDbAdapterFactory)
DI.bind<ExpenseMapper>(Types.Mappers.ExpenseMapper).to(ExpenseMapper)

DI.bind<CategoryRepository>(Types.Repositories.CategoryRepository).to(CategoryRepository)
DI.bind<CategoryMappingRepository>(Types.Repositories.CategoryMappingRepository).to(CategoryMappingRepository)
DI.bind<ExcelDocumentRepository>(Types.Repositories.ExcelDocumentRepository).to(ExcelDocumentRepository)
DI.bind<BBVADocumentRepository>(Types.Repositories.BBVADocumentRepository).to(BBVADocumentRepository)
DI.bind<ExpenseRepository>(Types.Repositories.ExpenseRepository).to(ExpenseRepository)
DI.bind<ReportRepository>(Types.Repositories.ReportRepository).to(ReportRepository)

DI.bind<ReportService>(Types.Services.ReportService).to(ReportService)


DI.bind<CategorizeExpenseUseCase>(Types.UseCases.CategorizeExpenseUseCase).to(CategorizeExpenseUseCase)
DI.bind<CreateExpenseUseCase>(Types.UseCases.Transactions.CreateExpenseUseCase).to(CreateExpenseUseCase)
DI.bind<CreateReportUseCase>(Types.UseCases.CreateReportUseCase).to(CreateReportUseCase)
DI.bind<ConsolidateReportUseCase>(Types.UseCases.ConsolidateReportUseCase).to(ConsolidateReportUseCase)
DI.bind<ListCategoriesUseCase>(Types.UseCases.ListCategoriesUseCase).to(ListCategoriesUseCase)
DI.bind<ListCategorizedExpenses>(Types.UseCases.ListCategorizedExpensesUseCase).to(ListCategorizedExpenses)
DI.bind<ListReportsUseCase>(Types.UseCases.ListReportsUseCase).to(ListReportsUseCase)
DI.bind<ListUncategorizedExpensesUseCase>(Types.UseCases.ListUncategorizedExpensesUseCase).to(ListUncategorizedExpensesUseCase)
DI.bind<RemoveExpenseUseCase>(Types.UseCases.RemoveExpenseUseCase).to(RemoveExpenseUseCase)
DI.bind<RemoveReportUseCase>(Types.UseCases.RemoveReportUseCase).to(RemoveReportUseCase)
DI.bind<SaveDocumentUseCase>(Types.UseCases.SaveDocumentUseCase).to(SaveDocumentUseCase)

export default DI
