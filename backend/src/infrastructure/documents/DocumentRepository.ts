import Expense from "../../domain/models/Expense"

export default interface DocumentRepository {
  read(filePath: string): Promise<Expense[]>; 
}
