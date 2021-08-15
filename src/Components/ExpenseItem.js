import React from "react";
//all the React hooks start with the word 'use' in their name
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css";
//by using our components as JSX code we make React aware of the component functions
//useState is nothing but a React Hook
function ExpenseItem(props) {
  // //therefore for every instance call useState gets invoked everytime
  // const [title, setTitle] = useState(props.title); //constant destructuring
  // console.log("Expense Item evaluated by React");
  // //useState basically returns an array {initial variable, final variable}
  // const clickHandler = () => {
  //   setTitle("Updated!"); //so after the initial state is updated, the final React state remains unchanged
  //   //now once this function is called
  //   //it not just updates the variable
  //   //it also re-calls the function and the entire gets executed
  //   console.log(title);
  // };
  return (
    //so the state is really updated on a per component instance basis
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        {" "}
        <h2>{props.title}</h2>{" "}
      </div>
      <div className="expense-item__price"> ₹ {props.amount} </div>
    </Card>
  ); //React exposes all the default events and they start with on
  //so all these event handler props (on-props) essentially want a value
  //which is nothing but a function

  //we can either add an
}
export default ExpenseItem;
//its state that adds reactivity to our application
