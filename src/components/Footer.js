import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} MoneyMap. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a 
            href="https://github.com/mansi9300" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm hover:underline flex items-center space-x-2"
          >
            <img 
              src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" 
              alt=" Logo" 
              className="w-6 h-6" 
            />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
