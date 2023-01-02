import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

function Profile() {
  
  return (
    <main>
        <Navbar showProfile={true}/>
        <h1>Profile Page</h1>
    </main>
  )
}

export default Profile