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
  UseCases: {
    ListReportsUseCase: Symbol("ListReportsUseCase"),
    SaveDocumentUseCase: Symbol("SaveDocumentUseCase"),
    GetReportUseCase: Symbol("GetReportUseCase"),
    CategorizeExpenseUseCase: Symbol("CategorizeExpenseUseCase"),
    ListCategoriesUseCase: Symbol("ListCategoriesUseCase"),
  },
  DynamoDbAdapterFactory: Symbol("DynamoDbAdapter"),
}

export default Types