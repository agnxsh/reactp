import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  //for allowing the users to enter data into the expense form
  //the users shall enter :
  //title
  //date
  //amount
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); //this would represent that the title is changed for every keystroke of the user input
    // setUserInput({
    //   ...userInput, //by doing this we make sure that the other values are not thrown away and therefore they get overriden
    //   enteredTitle: "event.target.value",
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: "event.target.value" };
    //react schedules their state updates, which is why if we use the previous approach, we might end up with the incorrect state snapshot
    // });//the prevState function assures that react gives us the latest state snapshot
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   // enteredTitle: 'event.target.value',
    //   // enteredAmount: 'event.target.value',
    //   // enteredDate: '' we can use this or we have to use the spread operator
    //   //a moodern-day javascript operator
    //   ...userInput,
    //   enteredAmount: "event.target.value",
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: "event.target.value", //in this approach we're greatly relying upon copying back the values of the other objects of the state
    // });
  };
  // in order to prevent a web development server to show deafult
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate), //this constructor will parse the date string and convert it into the date object
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle(""); //we do this in order to override what the user entered in order to clear the input
    setEnteredAmount("");
    setEnteredDate("");
  };
  

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        {/* adding onSubmit event listener */}
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle} //so here we have our data collected and stored inside the object
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
