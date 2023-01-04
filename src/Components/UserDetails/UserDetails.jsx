import React from 'react'
import NameComponent from './NameComponent'
import './UserDetails.css'

function UserDetails() {

  return (
    <section className='userDetailsWrapper'>
        <h1>User details</h1>
          <NameComponent />
    </section>
  )
}

export default UserDetails