const Types = {
  Mappers: {
    ExpenseMapper: Symbol("ExpenseMapper"),
  },
  Repositories: {
    CategoryRepository: Symbol("CategoryRepository"),
    CategoryMappingRepository: Symbol("CategoryMappingRepository"),
    BBVADocumentRepository: Symbol("BBVADocumentRepository"),
    ExcelDocumentRepository: Symbol("ExcelDocumentRepository"),
    ExpenseRepository: Symbol("ExpenseRepository"),
    ReportRepository: Symbol("ReportRepository"),

  },
  Services: {
    ReportService: Symbol("ReportService"),
  },
  UseCases: {
    Transactions: {
      CreateExpenseUseCase: Symbol("CreateExpenseUseCase"),
    },
    CategorizeExpenseUseCase: Symbol("CategorizeExpenseUseCase"),
    CreateReportUseCase: Symbol("CreateReportUseCase"),
    ConsolidateReportUseCase: Symbol("ConsolidateReportUseCase"),
    ListCategoriesUseCase: Symbol("ListCategoriesUseCase"),
    ListCategorizedExpensesUseCase: Symbol("ListCategorizedExpensesUseCase"),
    ListReportsUseCase: Symbol("ListReportsUseCase"),
    ListUncategorizedExpensesUseCase: Symbol("ListUncategorizedExpensesUseCase"),
    RemoveExpenseUseCase: Symbol("RemoveExpenseUseCase"),
    RemoveReportUseCase: Symbol("RemoveReportUseCase"),
    SaveDocumentUseCase: Symbol("SaveDocumentUseCase"),
  },
  DynamoDbAdapterFactory: Symbol("DynamoDbAdapter"),
}

export type DateRangeType = {
  start: Date,
  end: Date
}

export default Types