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
    CategorizeExpenseUseCase: Symbol("CategorizeExpenseUseCase"),
    ListCategoriesUseCase: Symbol("ListCategoriesUseCase"),
    ListCategorizedExpensesUseCase: Symbol("ListCategorizedExpensesUseCase"),
    ListReportsUseCase: Symbol("ListReportsUseCase"),
    ListUncategorizedExpensesUseCase: Symbol("ListUncategorizedExpensesUseCase"),
    SaveDocumentUseCase: Symbol("SaveDocumentUseCase"),
  },
  DynamoDbAdapterFactory: Symbol("DynamoDbAdapter"),
}

export default Types