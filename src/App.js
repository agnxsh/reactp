import React, { useState } from "react";
import Expenses from "./Components/Expenses.js";
import NewExpense from "./Components/NewExpense.js";
//now we can use this expense item like a html tag
//react understands that lower case components are html components and upper case components are React Components
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]; //4 objects inside this expenses array !
//using the props concept the data doesn't stay
//inside anymore it is received from outside
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    }); //updating the state to add the new expenses
    //at the same time using the spread operator to populate the existing expenses.
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />{" "}
    </div>
  ); //now in order to retrieve this data into the expenseitem function we need something called 'props'
};
export default App;
