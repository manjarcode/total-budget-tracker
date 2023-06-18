import { Container } from "inversify";
import Types from "./types.js"
export {default as Types} from "./types.js"
import DynamoDbAdapterFactory from "./infrastructure/dynamoDbAdapter.js"
import ExpenseRepository from "./infrastructure/expenses/ExpenseRepository.js"
import ExcelDocumentRepository from "./infrastructure/documents/ExcelDocumentRepository.js"
import SaveDocumentUseCase from "./application/saveDocumentUseCase.js"

let container : Container;

function initContainer() {
  container = new Container()
  container.bind<DynamoDbAdapterFactory>(Types.DynamoDbAdapterFactory).to(DynamoDbAdapterFactory)
  container.bind<ExpenseRepository>(Types.ExpenseRepository).to(ExpenseRepository)
  container.bind<ExcelDocumentRepository>(Types.ExcelDocumentRepository).to(ExcelDocumentRepository)
  container.bind<SaveDocumentUseCase>(Types.SaveDocumentUseCase).to(SaveDocumentUseCase)  
}


export default function containerInstance()  {
  if (!container) {
    initContainer()
  }

  return container
}

