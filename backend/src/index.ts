import ExcelDocumentRepository from "./infrastructure/documents/ExcelDocumentRepository.js"
import SaveDocumentUseCase from "./application/saveDocumentUseCase.js"

import { Container } from "inversify";
export {default as Types} from "./types.js"
import Types from "./types.js"

const container = new Container();
container.bind<ExcelDocumentRepository>(Types.ExcelDocumentRepository).to(ExcelDocumentRepository)
container.bind<SaveDocumentUseCase>(Types.SaveDocumentUseCase).to(SaveDocumentUseCase)

export default container;
