
import React from 'react';
import { useExpenses } from '../contexts/ExpenseContext';

const TransactionList = () => {
  const { transactions } = useExpenses();

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Transaction List</h2>
      <ul className="divide-y divide-gray-200">
        {transactions.map((transaction) => (
          <li key={transaction.id} className="py-4 flex justify-between items-center">
            <div>
              <p className="text-lg font-medium">{transaction.description}</p>
              <p className="text-sm text-gray-500">{transaction.category} - {transaction.date}</p>
            </div>
            <p className={`text-lg {transaction.type === 'expense' ? 'text-red-500' : 'text-green-500'}`}>
              {transaction.type === 'expense' ? '-' : '+'} {transaction.amount.toFixed(2)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
