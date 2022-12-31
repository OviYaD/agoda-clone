import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Protected from './Protected'
import Home from '../Pages/Home'
import Profile from '../Pages/Profile'
import SignupLogin from '../Pages/SignupLogin'

function Router() {

  const checkUser = () => {
    if(localStorage.getItem("token")===null){
      return false
    }
    return true
  }

  const [isSignedIn] = useState(checkUser)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/getStarted' element={<SignupLogin />} />
        <Route 
          path='/profile' 
          element={
          <Protected isSignedIn={isSignedIn}>
            <Profile /> 
          </Protected>
        } />
      </Routes>
    </>
  )
}

export default Router