import React from 'react'
import { useParams } from 'react-router-dom'
function User() {

    //costum hook 

    const {userid} = useParams()
  return (
    
    <div className='bg-gray-400 px-4 py-4'>
      User:{userid}
    </div>
  )
}

export default User

// context ek provider hai jo saare  me ek wrapper laggyenge
//Provider  kyuki ye hame iske ander ke components ko provide karega jisase ki vo componant context ke through statest ka context le  sakte hai 
// Children yani jo bhi props aa rahe hia use as it is use karlo jai se div h2 
//