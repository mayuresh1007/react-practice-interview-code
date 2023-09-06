import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIn = () => {
    setCount(count + 5);
  };
  const handleDe = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div>{count}</div>
      <button onClick={handleIn}>Increment</button>
      <br />
      <button onClick={handleDe}>Decrement</button>
    </>
  );
};

export default Counter;
