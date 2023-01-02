import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Protected from './Protected'
import Home from '../Pages/Home'
import Profile from '../Pages/Profile'
import SignupLogin from '../Pages/SignupLogin'

function Router() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/getStarted' element={<SignupLogin />} />
        <Route 
          path='/profile' 
          element={
          <Protected>
            <Profile /> 
          </Protected>
        } />
      </Routes>
    </>
  )
}

export default Router