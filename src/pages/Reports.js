import React, { useState, useEffect } from 'react';
import { useExpenses } from '../contexts/ExpenseContext';

const Report = () => {
  const { transactions } = useExpenses();
  const [expenseReport, setExpenseReport] = useState({});
  const [incomeReport, setIncomeReport] = useState({});
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    // Group transactions by category and calculate totals
    const expenses = {};
    const income = {};
    let expenseSum = 0;
    let incomeSum = 0;

    transactions.forEach((transaction) => {
      if (transaction.type === 'expense') {
        expenses[transaction.category] = (expenses[transaction.category] || 0) + transaction.amount;
        expenseSum += transaction.amount;
      } else if (transaction.type === 'income') {
        income[transaction.category] = (income[transaction.category] || 0) + transaction.amount;
        incomeSum += transaction.amount;
      }
    });

    setExpenseReport(expenses);
    setIncomeReport(income);
    setTotalExpenses(expenseSum);
    setTotalIncome(incomeSum);
  }, [transactions]);

  return (
    <div className="w-[100%] h-full max-w-5xl mx-auto mt-8 p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Expense and Income Report</h2>

      <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-lg shadow-sm">
        <div className="flex-1 text-center">
          <h3 className="text-lg font-semibold text-gray-600">Total Income</h3>
          <p className="text-2xl font-bold text-green-600 mt-1">{totalIncome.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
        </div>
        <div className="w-px h-16 bg-gray-300 mx-4"></div>
        <div className="flex-1 text-center">
          <h3 className="text-lg font-semibold text-gray-600">Total Expenses</h3>
          <p className="text-2xl font-bold text-red-600 mt-1">{totalExpenses.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Expenses by Category</h3>
        {Object.keys(expenseReport).length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(expenseReport).map(([category, amount]) => (
              <li key={category} className="bg-red-100 p-4 rounded-lg shadow-sm">
                <p className="text-lg font-semibold text-gray-800">{category}</p>
                <p className="text-xl font-bold text-red-600 mt-1">{amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No expense transactions recorded.</p>
        )}
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Income by Category</h3>
        {Object.keys(incomeReport).length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(incomeReport).map(([category, amount]) => (
              <li key={category} className="bg-green-100 p-4 rounded-lg shadow-sm">
                <p className="text-lg font-semibold text-gray-800">{category}</p>
                <p className="text-xl font-bold text-green-600 mt-1">{amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No income transactions recorded.</p>
        )}
      </div>
    </div>
  );
};

export default Report;
