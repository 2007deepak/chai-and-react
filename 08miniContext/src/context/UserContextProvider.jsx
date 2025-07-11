import React from 'react'
import UserContext from './Usercontext'



const UserContextProvider = ({children}) => {


  return (
    <UserContext.Provider value={{user,setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
