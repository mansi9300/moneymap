import React from 'react';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';

const Home = () => {
  
  return (
    <div className='home w-[100%] h-full'>
     <TransactionForm/>
     <TransactionList/>
    </div>
  );
};

export default Home;
