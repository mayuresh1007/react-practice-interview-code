import { useState } from "react";

const Todo = () => {
  const [tasks, setTask] = useState([]);
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim() !== "") {
      setTask([...tasks, text]);
      setText("");
    }
  };
  const clearList = () => {
    setTask([]);
  };
  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>Add task</button>
        <button onClick={clearList}>Clear</button>
        {tasks.map((item, index) => (
          <ul key={index}>
            <li>{item}</li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default Todo;
