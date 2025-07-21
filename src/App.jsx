import { useState } from "react"
import Headline from "./components/headline"
import Input from "./components/Input"
import Strength from "./components/strenghtArea"

function App() {
  const [curVal ,setCurVal] = useState("");
    const [level, setLevel] = useState('');

const input = (event) => {
  setCurVal(event.target.value); 
};



const submitPassword = () => {
  const strength = checkStrength(curVal); 
  setLevel(strength);
  setCurVal(""); 
};


  const checkStrength = (password) => {
       let strength = 0;

      if(password.lenght < 6){
        return "Weak Password"
       } 
       
      if (/[a-z]/.test(password)) strength++;
      if (/[A-Z]/.test(password)) strength++;
      if (/[0-9]/.test(password)) strength++;
      if (/[^a-zA-Z0-9]/.test(password)) strength++;
      
      if(password.lenght >= 8 && strength >= 3){
        return "Strong Password"
      }
      else if(strength >= 2){
        return "meduim Password"
      }
      else {
        return "weak Password"
      }

  }
 
return (
  <>
   <div className="conatiner">
   <Headline/>
   <Input submitPassword = {submitPassword} input = {input} curVal={curVal}/>
   <Strength level = {level}/>
   </div>
  </>
  
  )
}

export default App
