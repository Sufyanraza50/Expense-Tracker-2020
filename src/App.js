import React from 'react';
import { Header } from './compnents/Header';
import { Balance } from './compnents/Balance';
import { IncomeExpenses } from './compnents/IncomeExpenses';
import { TransactionList } from './compnents/TransactionList';
import { AddTransaction } from './compnents/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import './App.css';


function App() {
  return (
    <GlobalProvider>
      <div>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
