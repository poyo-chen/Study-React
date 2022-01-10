import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnterTitle] = useState("");
  const [enteredAmount, setEnterAmount] = useState("");
  const [enteredDate, setEnterDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHanlder = (event) => {
    setEnterTitle(event.target.value);
    //   // setUserInput({
    //   //   ...userInput,
    //   //   enteredTitle: event.target.value,
    //   // });
    //   setUserInput((prevState) => {
    //     return { ...prevState, enteredTitle: event.target.value };
    //   });
  };

  const amountChangeHanlder = (event) => {
    setEnterAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dataChangeHanlder = (event) => {
    setEnterDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHanlder}
          ></input>
        </div>
        <div className="new-expense__controls">
          <label>amount</label>
          <input
            value={enteredAmount}
            type="number"
            min="0.01"
            stop="0.01"
            onChange={amountChangeHanlder}
          ></input>
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            value={enteredDate}
            type="date"
            min="2019-01-01"
            stop="2022-12-31"
            onChange={dataChangeHanlder}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions"></div>
      <button type="submit">Add Exponse</button>
    </form>
  );
};

export default ExpenseForm;
