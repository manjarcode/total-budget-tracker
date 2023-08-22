const Types = {
  Mappers: {
    ExpenseMapper: Symbol("ExpenseMapper"),
  },
  Repositories: {
    ReportRepository: Symbol("ReportRepository"),
    ExcelDocumentRepository: Symbol("ExcelDocumentRepository"),
    ExpenseRepository: Symbol("ExpenseRepository"),
    CategoryRepository: Symbol("CategoryRepository"),
  },
  Services: {
    ReportService: Symbol("ReportService"),
  },
  UseCases: {
    CategorizeExpenseUseCase: Symbol("CategorizeExpenseUseCase"),
    ConsolidateReportUseCase: Symbol("ConsolidateReportUseCase"),
    ListCategoriesUseCase: Symbol("ListCategoriesUseCase"),
    ListCategorizedExpensesUseCase: Symbol("ListCategorizedExpensesUseCase"),
    ListReportsUseCase: Symbol("ListReportsUseCase"),
    ListUncategorizedExpensesUseCase: Symbol("ListUncategorizedExpensesUseCase"),
    SaveDocumentUseCase: Symbol("SaveDocumentUseCase"),
  },
  DynamoDbAdapterFactory: Symbol("DynamoDbAdapter"),
}

export default Types