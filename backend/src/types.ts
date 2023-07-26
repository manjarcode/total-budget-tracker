const Types = {
  Repositories: {
    ReportRepository: Symbol("ReportRepository"),
    ExcelDocumentRepository: Symbol("ExcelDocumentRepository"),
    ExpenseRepository: Symbol("ExpenseRepository"),
  },
  UseCases: {
    ListReportsUseCase: Symbol("ListReportsUseCase"),
    SaveDocumentUseCase: Symbol("SaveDocumentUseCase"),
    GetReportUseCase: Symbol("GetReportUseCase"),
    CategorizeExpenseUseCase: Symbol("CategorizeExpenseUseCase"),
  },
  DynamoDbAdapterFactory: Symbol("DynamoDbAdapter"),
}

export default Types