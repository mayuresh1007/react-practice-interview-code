import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Greeting from "./components/GreetingProp";
import Todo from "./components/PracticeTodo";

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
      <h2>Pactice session for coding round</h2>
      {/* how to render all object value in dom using the map function */}

      <p>{obj.firstName}</p>
      <p>{obj.age}</p>
      <p>{obj.location}</p>
      <button onClick={changeAgeArrowFun}>changeAgeArrowFun</button>
      <button onClick={NormalchangeAgeFunction}>NormalchangeAgeFunction</button>
      <hr />
      <Counter />
      <br />
      <Todo />
    </div>
  );
}

export default App;
