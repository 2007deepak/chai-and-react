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
