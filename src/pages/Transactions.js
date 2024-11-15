import React, { useEffect, useState } from 'react';
import { useExpenses } from '../contexts/ExpenseContext';

const Transactions = () => {
  const { transactions, removeTransaction } = useExpenses();
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);
  const [filter, setFilter] = useState('all'); // Filter by 'all', 'income', or 'expense'

  // Update filtered transactions whenever filter or transactions change
  useEffect(() => {
    if (filter === 'all') {
      setFilteredTransactions(transactions);
    } else {
      setFilteredTransactions(
        transactions.filter((transaction) => transaction.type === filter)
      );
    }
  }, [transactions, filter]);

  const handleDelete = (id) => {
    removeTransaction(id); // Call removeTransaction from context
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-8 bg-gray-100 rounded-lg shadow-lg w-[100%] ">
      <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Transaction History</h2>

      {/* Filter Dropdown */}
      <div className="mb-6 flex justify-end">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="all">All Transactions</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {/* Transaction List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        {filteredTransactions.length > 0 ? (
          <ul>
            {filteredTransactions.map((transaction) => (
              <li key={transaction.id} className="flex justify-between items-center p-4 border-b border-gray-200">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-800">{transaction.description}</h3>
                  <p className="text-sm text-gray-600">Category: {transaction.category}</p>
                  <p className="text-sm text-gray-600">Date: {new Date(transaction.id).toLocaleDateString()}</p>
                </div>
                <div className="text-right">
                  <p
                    className={`text-lg font-bold ${
                      transaction.type === 'expense' ? 'text-red-600' : 'text-green-600'
                    }`}
                  >
                    ₹{transaction.amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                  </p>
                  <button
                    onClick={() => handleDelete(transaction.id)}
                    className="mt-2 text-sm text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 text-center">No transactions available.</p>
        )}
      </div>
    </div>
  );
};

export default Transactions;
