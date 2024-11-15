
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ExpenseProvider } from './contexts/ExpenseContext';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Header from './components/Header';
import Home from './pages/Home'; 
import Transactions from './pages/Transactions'; 
import Budget from './pages/Budget'; 
import Reports from './pages/Reports';
import Footer from './components/Footer';

const App = () => {
  return (
    
    <ExpenseProvider>
      <Router>
        <div className="App bg-gradient-to-r from-blue-100 via-purple-100 to-gray-200 min-h-screen flex flex-col ">
          <Header />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/expenses" element={<><TransactionForm /><TransactionList /></>} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    </ExpenseProvider>
  );
};

export default App;
