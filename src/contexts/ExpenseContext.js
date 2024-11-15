import React, { createContext, useContext, useState } from 'react';

const ExpenseContext = createContext();

export const useExpenses = () => {
  return useContext(ExpenseContext);
};

export const ExpenseProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    // Load transactions from localStorage if available
    const storedTransactions = localStorage.getItem('transactions');
    return storedTransactions ? JSON.parse(storedTransactions) : [];
  });

  const addTransaction = (newTransaction) => {
    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);
    localStorage.setItem('transactions', JSON.stringify(updatedTransactions)); // Save to localStorage
  };

  const removeTransaction = (id) => {
    const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
    setTransactions(updatedTransactions);
    localStorage.setItem('transactions', JSON.stringify(updatedTransactions)); // Save to localStorage
  };

  return (
    <ExpenseContext.Provider value={{ transactions, addTransaction, removeTransaction }}>
      {children}
    </ExpenseContext.Provider>
  );
};
