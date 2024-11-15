import React, { useState } from 'react';
import { useExpenses } from '../contexts/ExpenseContext';

const TransactionForm = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('food');
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));
  const { addTransaction } = useExpenses();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount || parseFloat(amount) <= 0) {
      alert("Please provide a valid description and a positive amount.");
      return;
    }

    const newTransaction = {
      id: new Date().getTime(),
      description,
      amount: parseFloat(amount),
      type,
      category,
      date,
    };

    addTransaction(newTransaction);

    setDescription('');
    setAmount('');
    setType('expense');
    setCategory('food');
    setDate(new Date().toISOString().substr(0, 10));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[100%] h-full max-w-2xl mx-auto p-8 rounded-2xl shadow-2xl mt-8 bg-gray-50 transform transition-all duration-500 "
    >
      <h2 className="text-5xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-black animate__animated animate__fadeIn animate__delay-1s">
  Add Transactions
</h2>


     
      <div className="mb-6">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
          required
          placeholder="Enter a brief description"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
          required
          placeholder="Enter amount"
        />
      </div>

      
      <div className="mb-6">
        <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">Transaction Type:</label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
      </div>

      {/* Category Field */}
      <div className="mb-6">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
        >
          <option value="food">Food</option>
          <option value="transport">Transportation</option>
          <option value="entertainment">Entertainment</option>
          <option value="shopping">Shopping</option>
          <option value="others">Others</option>
        </select>
      </div>

      {/* Date Field */}
      <div className="mb-6">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
