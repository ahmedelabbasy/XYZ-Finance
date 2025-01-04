export enum TransactionType {
  Income = "income",
  Expense = "expense",
}

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  category: string;
  date: string;
  description: string;
}
