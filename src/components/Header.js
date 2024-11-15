import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark', !darkMode);
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/mansi-sahu-352967266/', '_blank'); 
  };

  return (
    <header className="bg-black text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-3xl font-bold">MoneyMap💰</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-indigo-200">Home</Link></li>
          <li><Link to="/transactions" className="hover:text-indigo-200">Transactions</Link></li>
          <li><Link to="/budget" className="hover:text-indigo-200">Budget</Link></li>
          <li><Link to="/reports" className="hover:text-indigo-200">Reports</Link></li>
        </ul>
      </nav>

      <div className="flex items-center space-x-4">
       
        <button 
          onClick={openLinkedIn} 
          className="text-sm font-semibold bg-indigo-700 p-2 rounded-full hover:bg-indigo-500 focus:outline-none"
        >
          View LinkedIn Profile
        </button>

        
        <button 
          onClick={toggleDarkMode} 
          className={`p-2 rounded-full focus:outline-none ${darkMode ? 'bg-indigo-700' : 'bg-indigo-500'} 
            ${darkMode ? 'hover:bg-indigo-600' : 'hover:bg-indigo-400'} `}
        >
          {darkMode ? '🤕' : '💰'}
        </button>
      </div>
    </header>
  );
};

export default Header;

