import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
 const dispatch =  useDispatch()
 const inputVAl = useRef();
 
 const handleIncrement = () => {
  dispatch({ type : "INCREMENT" });
 }

 const handleDecrement = () => {
 dispatch ( { type : "DECREMRNT"});
 }
 const handleAddition = () => {
 dispatch ( { type : "ADD" , payload : {
  num : inputVAl.current.value
 }
 });
 inputVAl.current.value = ""
 };
 const handleSubstraction = () => {
 dispatch ( { type : "SUB", payload : {
  num : inputVAl.current.value
 }});
 inputVAl.current.value = ""
 }

  return (
      <>
       <input type="text"
      placeholder="Enter Number"
      className="text"
      ref={inputVAl}
       /> 
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button 
        type="button" 
        className="btn btn-primary btn-lg px-4 gap-3"
        onClick={handleIncrement}>
       +1
      </button>

      <button 
        type="button" 
        className="btn btn-outline-secondary btn-lg px-4"
       onClick={handleDecrement} >
      -1
      </button>

      <button 
        type="button" 
        className="btn btn-primary btn-lg px-4 gap-3"
        onClick={handleAddition}>
       ADD
      </button>

      <button 
        type="button" 
        className="btn btn-outline-secondary btn-lg px-4"
       onClick={handleSubstraction} >
      SUB
      </button>
    </div>
    </>
  )
}

export default Controls;