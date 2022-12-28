import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'

function Router() {

  const routerList = [
    {
        path : "/login",
        component : <Login />
    },
    {
        path : "/signup",
        component : <Signup />
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