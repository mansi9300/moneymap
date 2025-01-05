import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode);
  };

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/mansi-sahu-352967266/", "_blank");
  };

  return (
    <header className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white p-4 shadow-md flex justify-between items-center flex-wrap">
      {/* Logo */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <h1 className="text-2xl md:text-3xl font-bold">MoneyMap💰</h1>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 transition-transform ${
              isMenuOpen ? "rotate-90" : "rotate-0"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } w-full md:flex md:w-auto bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 md:bg-transparent absolute md:static top-16 left-0 z-40 md:z-auto transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 p-4 md:p-0 text-center">
          <li>
            <Link
              to="/"
              className="hover:text-indigo-200 block text-lg md:text-base"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/transactions"
              className="hover:text-indigo-200 block text-lg md:text-base"
            >
              Transactions
            </Link>
          </li>
          <li>
            <Link
              to="/budget"
              className="hover:text-indigo-200 block text-lg md:text-base"
            >
              Budget
            </Link>
          </li>
          <li>
            <Link
              to="/reports"
              className="hover:text-indigo-200 block text-lg md:text-base"
            >
              Reports
            </Link>
          </li>
        </ul>
      </nav>

      {/* Action Buttons */}
      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <button
          onClick={openLinkedIn}
          className="text-sm font-semibold bg-indigo-700 p-2 rounded-full hover:bg-indigo-500 focus:outline-none"
        >
          View LinkedIn Profile
        </button>
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full focus:outline-none ${
            darkMode ? "bg-indigo-700" : "bg-indigo-500"
          } ${darkMode ? "hover:bg-indigo-600" : "hover:bg-indigo-400"} `}
        >
          {darkMode ? "🤕" : "💰"}
        </button>
      </div>
    </header>
  );
};

export default Header;
