import React from 'react'
import {Navigate} from 'react-router-dom'

function Protected({ children}) {

  const checkUser = () => {
    if(!localStorage.getItem("token")){
      return false
    }
    return true
  }

  if(!checkUser()) {
    return <Navigate to="/getStarted" replace />
  }
  return children
}

export default Protected