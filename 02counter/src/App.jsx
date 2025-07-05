import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(15);
  const [message, setMessage] = useState(" ");


  const addValue = () => {
    console.log("clicked",counter);
    if(counter < 20){
      setCounter(counter + 1);
      setMessage("");
     
    }else{
      setMessage("Maximum value reached");
    }

  }

 const removeValue = () => {
  console.log("clicked",counter);
  if(counter > 0 ) {
    setCounter(counter - 1);
  }else{
    setMessage("Minimum value reached");
  }
  
 }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value :{counter} </h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
      <p style={{ color: "red", fonWeight: "bold" }}>{message}</p>
    </>
  );
}

export default App
