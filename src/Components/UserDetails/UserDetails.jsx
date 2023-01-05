import React, { useEffect, useState, useReducer } from 'react'
import { reducerFunction } from '../../Helper/Reducer'
import { useNavigate } from 'react-router-dom'
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

function UserDetails() {

  const navigate = useNavigate();

  const INITIAL_STATE = {
    loading: false,
    data: {},
    error: false
  }

  const [state, dispatch] = useReducer(reducerFunction, INITIAL_STATE)

  useEffect(() => {
    dispatch({ type: "FETCH_START" })
    fetch(`${process.env.REACT_APP_API_KEY}/profile`, {
      method: "POST",
      body: {},
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "FETCH_SUCCESS", payload: data })
        if (!data.status) {
          navigate('/profile', { replace: true })
        }
      })
      .catch(()=>{
        dispatch({type : "FETCH_ERROR"})
      })
  }, [navigate])


  console.log(state)

  const [paymentInfo, setPaymentInfo] = useState(false)

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
      <Payment paymentInfo={paymentInfo} />
      <SaveCredit paymentInfo={paymentInfo} setPaymentInfo={setPaymentInfo} />
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