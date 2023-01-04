import React from 'react'
import EmailComponent from './EmailComponent'
import NameComponent from './NameComponent'
import PhoneNumber from './PhoneNumber'
import './UserDetails.css'

function UserDetails() {

  return (
    <section className='userDetailsWrapper'>
        <h1>User details</h1>
          <NameComponent />
          <EmailComponent />
          <PhoneNumber />
    </section>
  )
}

export default UserDetails