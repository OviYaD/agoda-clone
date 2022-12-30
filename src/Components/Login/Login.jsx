import React, { useState } from 'react'
import OtherLoginSignupOption from '../OtherLoginSignupOption/OtherLoginSignupOption'
import FormDivider from '../FormDivider/FormDivider'
import SwitchTab from '../SwitchTab/SwitchTab'
import FormTitle from '../FormTitle/FormTitle'
import './Login.css'
import LoginMail from './LoginMail'
import LoginMobile from './LoginMobile'

function Login({setLoginPage}) {

    const [emailLogin, setEmailLogin] = useState(true)

  return (
    <div className='LoginWrapper'>
        <FormTitle title="Sign in" para={true} />
        <SwitchTab state={emailLogin} setState={setEmailLogin}/>
        <div className='loginFormWrapper'>
            {
                (emailLogin)?(
                    <LoginMail setLoginPage={setLoginPage} emailLogin={emailLogin}/>
                ):(
                    <LoginMobile setLoginPage={setLoginPage} emailLogin={emailLogin}/>
                )
            }
            <FormDivider tag="or sign in with"/>
            <OtherLoginSignupOption SigninBtn={false}/>
        </div>
    </div>
  )
}

export default Login