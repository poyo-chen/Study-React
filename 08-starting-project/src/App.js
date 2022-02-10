import React, { useState } from "react";

import AddUser from "./component/Users/AddUser";
import UserList from "./component/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHanlder = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHanlder} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
