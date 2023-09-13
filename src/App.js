import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Greeting from "./components/GreetingProp";
import Todo from "./components/PracticeTodo";
import NewsList from "./components/NewsList";
import DropDown from "./components/DropdownDepends";
import Passwordgenerator from "./components/Passwordgenerator";

function App() {
  const [obj, setObj] = useState({
    id: 1,
    username: "john_doe",
    email: "john@example.com",
    firstName: "John",
    lastName: "Doe",
    age: 30,
    location: "New York",
  });
  // const obj = {
  //   id: 1,
  //   username: "john_doe",
  //   email: "john@example.com",
  //   firstName: "John",
  //   lastName: "Doe",
  //   age: 30,
  //   location: "New York",
  // };
  const changeAgeArrowFun = () => {
    const updateUser = { ...obj, age: obj.age + 5 };
    setObj(updateUser);
  };
  function NormalchangeAgeFunction() {
    const updatedUser = { ...obj, age: obj.age + 2 };
    setObj(updatedUser);
  }
  function ChangeAddress() {
    const updateAdd = { ...obj, location: (obj.location = "maharashtra") };
    setObj(updateAdd);
  }
  // const changeAge = () => {
  //   // Create a copy of the user object with the age updated
  //   const updatedUser = { ...obj, age: obj.age + 1 };
  //   setObj(updatedUser);
  // };
  return (
    <div className="App">
      <Greeting name="Mayuresh" />
      <Greeting />
      <Greeting name={"Akshata"} />
      <hr />
      {/* parenthesis doubt cleared */}
      <h3>Pactice session for coding round</h3>
      {/* how to render all object value in dom using the map function */}
      <div>
        <p>{obj.firstName}</p>
        <p>{obj.age}</p>
        <p>{obj.location}</p>
        <button onClick={changeAgeArrowFun}>changeAgeArrowFun</button>
        <button onClick={NormalchangeAgeFunction}>
          NormalchangeAgeFunction
        </button>
        <button onClick={ChangeAddress}>changeAddress</button>
      </div>

      <hr />
      <Counter />
      <br />
      <Todo />
      <br />
      <NewsList />
      <br />
      <DropDown />
      <br />
      <Passwordgenerator/>
    </div>
  );
}

export default App;
