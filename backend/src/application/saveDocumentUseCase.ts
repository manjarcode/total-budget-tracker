import { injectable } from "inversify";
import "reflect-metadata";

import Expense from "../domain/models/Expense.js";

export default interface SaveDocumentUseCase {
  execute(path: string): Promise<Expense[]>;
}