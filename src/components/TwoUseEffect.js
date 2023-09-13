import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // useEffect for component initialization
  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  // useEffect for count
  useEffect(() => {
    console.log(`Count changed: ${count}`);
  }, [count]);

  // useEffect for name
  useEffect(() => {
    console.log(`Name changed: ${name}`);
  }, [name]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default MyComponent;
