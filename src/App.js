import React, { useState } from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { Balance } from "./Components/Balance";
import { IncomeExpense } from "./Components/IncomeExpense";
import { TransactionList } from "./Components/TransactionList";
import { AddTransaction  } from "./Components/AddTransaction";
function App() {
  const [title, setTitle] = useState("Expense-Tracker");
  // setTitle('Expense-Tracker');

  document.title = title;
  return (
    <>
      <Header title={title} />
      <div className="container">
        <Balance />
        <IncomeExpense/>
        <TransactionList/>
       <AddTransaction/>
      </div>
    </>
  );
}

export default App;
