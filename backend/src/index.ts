import DocumentRepository from "./infrastructure/documents/DocumentRepository.js";
import ExcelDocumentRepository from "./infrastructure/documents/ExcelDocumentRepository.js"
import SaveDocumentUseCaseImpl from "./application/saveDocumentUseCaseImpl.js"
import SaveDocumentUseCase from "./application/saveDocumentUseCase.js"

import { Container } from "inversify";
export {default as Types} from "./types.js"
import Types from "./types.js"

const container = new Container();
container.bind<DocumentRepository>(Types.DocumentRepository).to(ExcelDocumentRepository)
container.bind<SaveDocumentUseCase>(Types.SaveDocumentUseCase).to(SaveDocumentUseCaseImpl)

export default container;
