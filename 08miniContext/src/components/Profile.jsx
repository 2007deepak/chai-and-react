import React from 'react'

function Profile() {
  
     const { user } = useContext(UseContext);

     if(!user) return <div>Pleas Login</div>

     return <div>Welcome {user.username}</div>
}

export default Profile
