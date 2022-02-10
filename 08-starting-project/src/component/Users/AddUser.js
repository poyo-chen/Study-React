import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enterUsername, setEnterUsername] = useState("");
  const [enterAge, setEnterAge] = useState("");
  const [error, setError] = useState();

  const addUserHanlder = (event) => {
    event.preventDefault();
    if (enterUsername.trim().length === 0 || enterAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    //保證enterAge為數字
    if (+enterAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(enterUsername, enterAge);
    setEnterUsername("");
    setEnterAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnterUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnterAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModel>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHanlder}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enterUsername}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enterAge}
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
