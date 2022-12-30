import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Profile from '../Pages/Profile'
import SignupLogin from '../Pages/SignupLogin'

function Router() {

  const routerList = [
    // Public Route
    {
      path : "/",
      component : <Home />
    },
    {
        path : "/getstarted",
        component : <SignupLogin />
    },
    // Protected Routes
    {
      path : "/profile",
      component : <Profile />
  },
]

  return (
    <>
      <Routes>
        {
          routerList.map((val,index)=>{
            return (
              <Route key={index} path={val.path} element={val.component} />
            )
          })
        }
      </Routes>
    </>
  )
}

export default Router