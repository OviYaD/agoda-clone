import React, { useState } from 'react'
import FormDivider from '../FormDivider/FormDivider'
import FormTitle from '../FormTitle/FormTitle'
import OtherLoginSignupOption from '../OtherLoginSignupOption/OtherLoginSignupOption'
import SwitchTab from '../SwitchTab/SwitchTab'
import './Signup.css'
import SignupEmail from './SignupEmail'
import SignupMobile from './SignupMobile'

function Signup({ setLoginPage }) {

  const [emailSignup, setEmailSignup] = useState(true)

  return (
    <div className='SignupWrapper'>
      <FormTitle title="Sign up" para={false} />
      <SwitchTab state={emailSignup} setState={setEmailSignup} />
      <div className='SignupFormWrapper'>
        {
          (emailSignup) ? (
            <SignupEmail emailSignup={emailSignup}/>
          ) : (
            <SignupMobile setLoginPage={setLoginPage} emailSignup={emailSignup}/>
          )
        }
        <FormDivider tag="or continue with" />
        <OtherLoginSignupOption SigninBtn={true} setLoginPage={setLoginPage} />
      </div>

    </div>
  )
}

export default Signup