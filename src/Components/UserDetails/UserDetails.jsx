import React from 'react'
import EmailComponent from './EmailComponent'
import NameComponent from './NameComponent'
import Newsletter from './Newsletter'
import Offers from './Offers'
import PasswordComponent from './PasswordComponent'
import PhoneNumber from './PhoneNumber'
import Promotions from './Promotions'
import Reminders from './Reminders'
import SaveCredit from './SaveCredit'
import './UserDetails.css'

function UserDetails() {

  return (
    <section className='userDetailsWrapper'>
        <h1>User details</h1>
          <NameComponent />
          <EmailComponent />
          <PhoneNumber />
          <PasswordComponent />
          <section className='paymentMethods'>
            <h1>Payment methods</h1>
          </section>
          <SaveCredit />
          <section className='paymentMethods'>
            <h1>Email subscriptions</h1>
          </section>
          <Newsletter />
          <Reminders />
          <Promotions />
          <Offers />
    </section>
  )
}

export default UserDetails