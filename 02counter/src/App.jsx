import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(15);
  


  const addValue = () => {
    console.log("clicked",counter);
    setCounter(counter + 1);
    

  }

 const removeValue = () => {
  console.log("clicked",counter);
  setCounter(counter - 1);
  
 }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : </h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
      <p style={{ color: "red", fonWeight: "bold" }}></p>
    </>
  );
}

export default App
