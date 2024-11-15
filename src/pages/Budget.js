import React, { useState, useEffect } from 'react';
import { useExpenses } from '../contexts/ExpenseContext';

const Budget = () => {
  const [budget, setBudget] = useState('');
  const { transactions } = useExpenses();
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [notification, setNotification] = useState('');

  // Calculate total expenses
  useEffect(() => {
    const total = transactions
      .filter((transaction) => transaction.type === 'expense')
      .reduce((sum, transaction) => sum + transaction.amount, 0);
    setTotalExpenses(total);

    // Check if total expenses exceed budget
    if (budget && total > budget) {
      setNotification('Warning: Your spending has exceeded your budget!');
    } else {
      setNotification('');
    }
  }, [transactions, budget]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!budget || budget <= 0) {
      alert('Please set a valid budget.');
      return;
    }
    alert(`Budget set to: ₹${budget.toLocaleString('en-IN')}`);
  };

  return (
    <div className="w-[80%] h-full bg-gray-100 mx-auto mt-8 p-8  rounded-lg shadow-lg ">
      <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Set Your Budget</h2>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Total Expenses So Far</h3>
        <p className="text-2xl font-bold text-red-600">{totalExpenses.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6">
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
            Set Your Monthly Budget
          </label>
          <input
            type="number"
            id="budget"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            placeholder="₹ Enter your budget"
            className="w-full p-4 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-xl"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gray-900 hover:bg-gray-700 text-white p-4 rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Save Budget
        </button>
      </form>

      {notification && (
        <div className="mt-6 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md">
          {notification}
        </div>
      )}
    </div>
  );
};

export default Budget;
