import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enterUsername, setEnterUsername] = useState("");
  const [enterAge, setEnterAge] = useState("");

  const addUserHanlder = (event) => {
    event.preventDefault();
    if (enterUsername.trim().length === 0 || enterAge.trim().length === 0) {
      return;
    }
    //保證enterAge為數字
    if (+enterAge < 1) {
      return;
    }
    console.log(enterUsername, enterAge);
    setEnterUsername("");
    setEnterAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnterUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnterAge(event.target.value);
  };

  return (
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
  );
};

export default AddUser;
