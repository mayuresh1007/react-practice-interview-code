import React, { useState } from "react";

function ControlledComponent() {
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <p>ControlledComponent -- used useState and onChange, value={text}</p>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="ControlledComponent"
      />
    </>
  );
}
export default ControlledComponent;
