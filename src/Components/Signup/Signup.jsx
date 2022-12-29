import React, { useState } from 'react'
import EmailNotification from '../EmailNotification/EmailNotification'
import FormDivider from '../FormDivider/FormDivider'
import FormTitle from '../FormTitle/FormTitle'
import Input from '../Input/Input'
import OtherLoginSignupOption from '../OtherLoginSignupOption/OtherLoginSignupOption'
import SubmitButton from '../SubmitButton/SubmitButton'
import SwitchTab from '../SwitchTab/SwitchTab'
import './Signup.css'

function Signup({ setLoginPage }) {


  const [signupEData, setSignupEData] = useState({ firstName: "", lastName: "", email: "", password: "" })

  const [signupMData, setSignupMData] = useState({phone : "", password : ""})

  const [emailSignup, setEmailSignup] = useState(true)

  const onChangeFunction = (e) => { 
    if (emailSignup) {
      let {name, value} = e.target
      setSignupEData({...signupEData, [name]: value});
  }
  else {
      let {name, value} = e.target
      setSignupMData({...signupMData, [name]: value});
  }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (emailSignup) console.log(signupEData)
    if (!emailSignup) console.log(signupMData)

}

  return (
    <div className='SignupWrapper'>
      <FormTitle title="Sign up" para={false} />
      <SwitchTab state={emailSignup} setState={setEmailSignup} />
      <div className='SignupFormWrapper'>
        {
          (emailSignup) ? (
            <form onSubmit={handleSubmit}>
              <Input value={signupEData.firstName} title="First name" name="firstName" type="text" onchange={onChangeFunction} />
              <Input value={signupEData.lastName} title="Last name" name="lastName" type="text" onchange={onChangeFunction} />
              <Input value={signupEData.email} title="Email" name="email" type="email" onchange={onChangeFunction} />
              <Input value={signupEData.password} title="Password" name="password" type="password" onchange={onChangeFunction} />
              <Input title="Confirm Password" name="password" type="password" onchange={onChangeFunction} />
              <EmailNotification />
              <SubmitButton name="Sign up" otherOptions={false} />
            </form>
          ) : (
            <form onSubmit={handleSubmit}>
              <Input value={signupMData.phone} title="Mobile number" name="phone" type="tel" onchange={onChangeFunction} />
              <Input value={signupMData.password} title="Password" name="password" type="password" onchange={onChangeFunction} />
              <SubmitButton name="Sign in" otherOptions={false} setLoginPage={setLoginPage} />
            </form>
          )
        }
        <FormDivider tag="or continue with" />
        <OtherLoginSignupOption SigninBtn={true} setLoginPage={setLoginPage} />
      </div>

    </div>
  )
}

export default Signup