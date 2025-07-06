import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card.jsx"

function App() {

  let myobj = {
    username: "Deepak",
    age: 21,
  };
  let newArr = [1, 2, 3];
 

  return (
    <>
      <h1 className="bg-green-400 text-orange-500 p-4 rounded-xl">
        Hello Tailwind!
      </h1>
      <Card username="chaiaurcode" someObj={myobj} />
      <Card username="chaiaurReact"/>

    </>
  );
}

export default App
