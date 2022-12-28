import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignupLogin from '../Pages/SignupLogin'

function Router() {

  const routerList = [
    {
        path : "/getstarted",
        component : <SignupLogin />
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