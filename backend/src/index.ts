import ExcelDocumentRepository from "./infrastructure/documents/ExcelDocumentRepository.js"

const expenses = new ExcelDocumentRepository().read('../../data/temp/example.xls')

console.log(JSON.stringify(expenses))