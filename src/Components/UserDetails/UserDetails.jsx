import React, { useState } from 'react'
import EmailComponent from './EmailComponent'
import NameComponent from './NameComponent'
import Newsletter from './Newsletter'
import Offers from './Offers'
import PasswordComponent from './PasswordComponent'
import Payment from './Payment'
import PhoneNumber from './PhoneNumber'
import Promotions from './Promotions'
import Reminders from './Reminders'
import SaveCredit from './SaveCredit'
import './UserDetails.css'

function UserDetails({data}) {

  const [paymentInfo, setPaymentInfo] = useState(data.toSave)


  return (
    <section className='userDetailsWrapper'>
      <h1>User details</h1>
      <NameComponent firstName={data.firstName} lastName={data.lastName} isVerified={data.isVerified} />
      <EmailComponent isVerified={data.isVerified} email={data.email}/>
      <PhoneNumber mobileNo={data.mobileNo}/>
      <PasswordComponent />
      <section className='paymentMethods'>
        <h1>Payment methods</h1>
      </section>
      <Payment paymentInfo={paymentInfo}  />
      <SaveCredit paymentInfo={paymentInfo} setPaymentInfo={setPaymentInfo} />
      <section className='paymentMethods'>
        <h1>Email subscriptions</h1>
      </section>
      <Newsletter newsLetter={data.newsLetter}/>
      <Reminders remainder={data.remainder} />
      <Promotions Promotion={data.Promotion}/>
      <Offers Trip={data.Trip} />
    </section>
  )
}

export default UserDetails