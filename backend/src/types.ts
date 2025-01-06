const Types = {
  Mappers: {
    ExpenseMapper: Symbol("ExpenseMapper"),
  },
  Repositories: {
    ReportRepository: Symbol("ReportRepository"),
    ExcelDocumentRepository: Symbol("ExcelDocumentRepository"),
    BBVADocumentRepository: Symbol("BBVADocumentRepository"),
    ExpenseRepository: Symbol("ExpenseRepository"),
    CategoryRepository: Symbol("CategoryRepository"),
  },
  Services: {
    ReportService: Symbol("ReportService"),
  },
  UseCases: {    
    CategorizeExpenseUseCase: Symbol("CategorizeExpenseUseCase"),
    CreateReportUseCase: Symbol("CreateReportUseCase"),
    ConsolidateReportUseCase: Symbol("ConsolidateReportUseCase"),
    ListCategoriesUseCase: Symbol("ListCategoriesUseCase"),
    ListCategorizedExpensesUseCase: Symbol("ListCategorizedExpensesUseCase"),
    ListReportsUseCase: Symbol("ListReportsUseCase"),
    ListUncategorizedExpensesUseCase: Symbol("ListUncategorizedExpensesUseCase"),
    RemoveReportUseCase: Symbol("RemoveReportUseCase"),
    SaveDocumentUseCase: Symbol("SaveDocumentUseCase"),
  },
  DynamoDbAdapterFactory: Symbol("DynamoDbAdapter"),
}

export default Types