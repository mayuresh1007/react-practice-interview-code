import React, { useState, useMemo } from "react";

function Usememoexample() {
  // State variables // link to study https://www.youtube.com/watch?v=5uiv8MFD1rc
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  // Expensive computation function
  const computeExpensiveValue = (num) => {
    console.log('called memoization')
    // Imagine this is a costly calculation
    for(let i=0; i<=1000000000;i++){}
    return num ;
  };

  // Memoize the result of the expensive computation
  const memoizedValue = useMemo(() => { return computeExpensiveValue(count)}, [count]);
  return (
    <div>
      <h1>useMemo Example</h1>
      <p>we can return any value from useMemo in useEffect not any return the value</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
      <p>Expensive Value: {memoizedValue}</p>
      <p>without useMemo its take timr to toggle button there is no any dependancy on any but there is lag in that </p>
      <p>we can improve preformance of that useing usememo </p>
      <button onClick={()=>{setShow(!show)}}>{show ?"click me ":'click me again'} </button>
    </div>
  );
}

export default Usememoexample;
  /**
   * We have a state variable count and a function setCount to update it.
    We define an computeExpensiveValue function that simulates an expensive calculation based on an input value.

    We use the useMemo hook to memoize the result of computeExpensiveValue(count). The second argument [count] specifies the dependencies. When count changes, computeExpensiveValue will be recalculated, but it will remain the same if count hasn't changed since the last render.

    In the render, we display the current count and the memoized memoizedValue.
    When the "Increment Count" button is clicked, it updates the count state, and the memoized value is recalculated only if count changes.


    // Expensive computation function
  const computeExpensiveValue = (num) => {
    console.log('called memoization')
    // Imagine this is a costly calculation
    for(let i=0; i<=1000000000;i++){}
    return num ;
  };

  // Memoize the result of the expensive computation
  const memoizedValue = useMemo(() => { return computeExpensiveValue(count)}, [count]);
  //We use the useMemo hook to memoize the result of computeExpensiveValue(count). The second argument [count] specifies the dependencies. When count changes, computeExpensiveValue will be recalculated, but it will remain the same if count hasn't changed since the last render.

  return (
    <div>
      <h1>useMemo Example</h1>
      <p>we can return any value from useMemo in useEffect not any return the value</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
      <p>Expensive Value: {memoizedValue}</p>
      <p>without useMemo its take timr to toggle button there is no any dependancy on any but there is lag in that </p>
      <p>we can improve preformance of that useing usememo </p>
      <button onClick={()=>{setShow(!show)}}>{show ?"click me ":'click me again'} </button>
    </div>
  );
   */