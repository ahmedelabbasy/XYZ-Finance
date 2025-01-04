import { useMemo } from "react";
import { Transaction } from "../types/Transaction";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { COLORS } from "../constants/constants";

export interface GroupedTransaction {
  name: string;
  amount: number;
  color: string;
  legendFontColor: string;
  legendFontSize: number;
}

export const useGroupedTransactions = () => {
  const transactions = useSelector(
    (state: RootState) => state.transactions.transactions
  );

  const incomeData = useMemo(() => {
    return groupTransactions(transactions, "income");
  }, [transactions]);

  const expenseData = useMemo(() => {
    return groupTransactions(transactions, "expense");
  }, [transactions]);

  const totalIncome = useMemo(
    () =>
      transactions
        .filter((t) => t.type === "income")
        .reduce((acc, curr) => acc + curr.amount, 0),
    [transactions]
  );

  const TotalExpenses = useMemo(
    () =>
      transactions
        .filter((t) => t.type === "expense")
        .reduce((acc, curr) => acc + curr.amount, 0),
    [transactions]
  );

  return { incomeData, expenseData, totalIncome, TotalExpenses };
};

const groupTransactions = (
  transactions: Transaction[],
  type: string
): GroupedTransaction[] => {
  const filtered = transactions.filter(
    (transaction) => transaction.type === type
  );

  const grouped = filtered.reduce((acc, transaction) => {
    const { category, amount } = transaction;
    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category] += amount;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(grouped).map(([category, amount]) => ({
    name: category,
    amount,
    color: COLORS[category], // Cycle through COLORS array
    legendFontColor: "#091172",
    legendFontSize: 14,
  }));
};
