import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>Home Page</h1>
        <Link to="/getstarted">Get started</Link>
    </div>
  )
}

export default Home