import React, { useRef } from "react";

function UncontrolledComponent() {
  const inputRef = useRef();

  const handleClick = () => {
    alert(`Input value: ${inputRef.current.value}`);
  };

  return (
    <div>
      <p>UncontrolledComponent -- Not need onChange and useRef
        
      </p>
      <input type="text" ref={inputRef} placeholder="UncontrolledComponent" />
      <button onClick={handleClick}>Get Value</button>
    </div>
  );
}

export default UncontrolledComponent;
