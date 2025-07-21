
import { useState } from "react";
import './input.css'

const Input = ({input, submitPassword , curVal}) => {
  return (
    <>
    <div className="input-container">
      <input
        type="text"
        placeholder="Check Password"
        onChange={input}
        value={curVal}
      />
      <button onClick={submitPassword}>Submit</button>
    </div>    
    </>
  );
};

export default Input;
