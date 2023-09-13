import React, { useEffect, useState, useCallback, useRef } from "react";

const Passwordgenerator = () => {
  const [pass, setPass] = useState("");
  const [passlength, setPassLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [specAllow, setSpecAllow] = useState(false);

  const passwordInput = useRef(pass);

  const PassGenerator = useCallback(() => {
    let alphabet =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcchdefghijklllmnñopqrrrstuvwxyz";
    let num = "1234567890";
    let Schar = "~!@#$%^&*";

    if (numAllow) alphabet += num;
    if (specAllow) alphabet += Schar;

    let pass = "";
    for (let i = 1; i <= passlength; i++) {
      let char = Math.floor(Math.random() * alphabet.length + 1);
      pass += alphabet.charAt(char);
      // console.log(pass);
    }
    // console.log(pass);
    setPass(pass);
  }, [passlength, numAllow, specAllow, setPass]);

  const CopyToClipBoard =useCallback(() => {
    passwordInput.current?.select();
    passwordInput.current?.setSelectionRange(0, 999);// setSelectionRange default method of window object in browser
    window.navigator.clipboard.writeText(pass)
    console.log(window.navigator)
    console.log(passwordInput.current)
  }, [pass])

  useEffect(() => {
    PassGenerator();
  }, [passlength, numAllow, specAllow]);
  return (
    <div>
      <h3>Passwordgenerator</h3>
      <p>useCallBack, useEffect, logic, type of input</p>

      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label htmlFor="pass">Password</label>
        <input
          readOnly
          type="text"
          ref={passwordInput}
          value={pass}
          id="pass"
          style={{ width: "25%" }}
        />
        <input
          type="range"
          value={passlength}
          min={8}
          max={25}
          onChange={(e) => {
            setPassLength(e.target.value);
          }}
          id="pass"
          style={{ width: "25%" }}
        />
        <span>Password Length:-({passlength})</span>
        <div>
          <label htmlFor="number">Number</label>
          <input
            type="checkbox"
            id="number"
            defaultChecked={numAllow}
            onChange={() => {
              setNumAllow((prev) => !prev);
            }}
          />
          <label htmlFor="specialcharacter">Specialcharacter</label>
          <input
            type="checkbox"
            id="specialcharacter"
            defaultChecked={specAllow}
            onChange={() => {
              setSpecAllow((prev) => !prev);
            }}
          />
          <button
            onClick={() => {
              PassGenerator();
            }}
          >
            Regenerate
          </button>
          <button  onClick={CopyToClipBoard}>
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Passwordgenerator;
