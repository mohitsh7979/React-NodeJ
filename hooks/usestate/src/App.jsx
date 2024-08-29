import { useState } from "react";
import "./App.css";

function App() {
  
  let [counter,setcounter] = useState(0)

  function inc(){
    setcounter(counter++)
  }

  function dec(){
    setcounter(counter--)
  }
  return (
    <>
      <button onClick={inc}>+</button>
      <span>{counter}</span>
      <button onClick={dec}>-</button>
    </>
  );
}

export default App;
