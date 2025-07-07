import { useEffect, useState, useCallback,useRef } from "react";

import './App.css'

function App() {
const [length, setlenght] = useState(8)
const [numberAllowed, setNumberAllowed] = useState(false);
const [charAllowed, setCharAllowed] = useState(false)
const [password, setPassword] = useState("")
const [copied , setCopied] = useState(false);


//useRef hook
const passwordRef = useRef(null)

const passwordGenerator = useCallback(() => {
  //line 15 se 19 tak function deffination  hai
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (numberAllowed) str += "0123456789";
  if (charAllowed) str += "`!@#$%^&*_+-[]{}~";

  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }

  setPassword(pass);
}, [length, numberAllowed, charAllowed, setPassword]);



// copyPasswordtoClipboard using callref ye kya karta hai refarence leta hai

//const copyPasswordtoClipboard = useCallback(() => {
 // passwordRef.current?.select();
 // passwordRef.current?.setSelectionRange(0,99);

 // window.navigator.clipboard.writeText(password)

//},[password])

 const handleCopy = () =>{
  navigator.clipboard.writeText(password);
  setCopied(true);
  console.log("Copied set to true");
  
  setTimeout(() => setCopied(false),2000);
 };
// run karne ka goal hamara yaha se achive ho raha hai
useEffect(() => {
  passwordGenerator();
},[length , numberAllowed, charAllowed, passwordGenerator])



  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-2
         text-yellow-600  bg-gray-800"
      >
        <h1 className=" text-center font-bold text-3xl   mb-10 mt-10 text-fuchsia-500  uppercase">
          Password generator
        </h1>
        <div className="flex  shadow rounded-lg overflow-visible mb-4 relative ">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-3 px-3 bg-violet-950 border-b-4 border-blue-800 font-semibold text-xl rounded-lg "
            placeholder="password"
            readOnly
            // ye dyan den check karan hai  outline-none bg-blue-700
            //text-white px-3 py-0.5 shrink-0 hover:bg-blue-500   //{copyPasswordtoClipboard}
            ref={passwordRef}
          />

          <button
            onClick={handleCopy}
            className=" text-cyan-200  text-sm bg-blue-600 hover:bg-blue-500  font-bold text- rounded-lg px-2"
            //onClick={handleCopy}
            //className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition "
          >
            copy
          </button>
          {copied && (
            <>
              {console.log("Copied span rendered")}
              <span className="absolute -top-6 right-0 bg-purple-600 text-yellow-300 px-1 py-1 rounded-3xl text-sm font-semibold shadow-lg transition-all duration-300 z-50">
                copied
              </span>
            </>
          )}
        </div>

        <div className="flex flex-col text-sm gap-x-2 mt-10 mb-10 ">
          <div className="flex items-center gap-x-1 text-lg">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-slider mt-4 mb-4 cursor-pointer w-64 rounded-md "
              step={1}
              onChange={(e) => {
                setlenght(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>

          <div className="flex item-center gap-x-1 text-lg">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput"> Includes Numbers</label>
          </div>

          <div className="flex item-center gap-x-1 text-lg ">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charcterInput"> Includes Charcters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
