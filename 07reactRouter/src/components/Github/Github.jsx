import React, { useEffect, useState, } from 'react'

function Github() {

  const [data, setData] = useState([]);
  //ab ham Api Call karana chate hai tab usake lye ham UseEffect ka use karenge

useEffect (() => {

  
  fetch("https://api.github.com/users/2007deepak")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    setData(data)
    
  })
   
},[])

  return (
    <div className="text-center m-4 bg-gray-600  text-white p-4 text-3xl">
      Github followers: {data.followers}
      <div className="flex justify-center mt-4 ">
        <img
          className="rounded-full  cursor-pointer"
          src={data.avatar_url}
          alt="Git Picture"
          width={300}
        />
      </div>
    </div>
  );
}

export default Github
