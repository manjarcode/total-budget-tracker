import Expense from "../../domain/models/Expense"

export interface DocumentRepository {

  read(filePath: string): Promise<Expense[]>; 
}