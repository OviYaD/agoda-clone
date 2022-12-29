import React, { useState } from 'react'
import OtherLoginSignupOption from '../OtherLoginSignupOption/OtherLoginSignupOption'
import FormDivider from '../FormDivider/FormDivider'
import SwitchTab from '../SwitchTab/SwitchTab'
import SubmitButton from '../SubmitButton/SubmitButton'
import Input from '../Input/Input'
import FormTitle from '../FormTitle/FormTitle'
import './Login.css'

function Login({setLoginPage}) {

    const [loginEData, setLoginEData] = useState({email : "", password : ""})

    const [loginMData, setLoginMData] = useState({phone : "", password : ""})

    const [emailLogin, setEmailLogin] = useState(true)

    const onChangeFunction = (e) => {
        if (emailLogin) {
            let {name, value} = e.target
            setLoginEData({...loginEData, [name]: value});
        }
        else {
            let {name, value} = e.target
            setLoginMData({...loginMData, [name]: value});
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (emailLogin) console.log(loginEData)
        if (!emailLogin) console.log(loginMData)

    }

  return (
    <div className='LoginWrapper'>
        <FormTitle title="Sign in" para={true} />
        <SwitchTab state={emailLogin} setState={setEmailLogin}/>
        <div className='loginFormWrapper'>
            {
                (emailLogin)?(
                    <form onSubmit={handleSubmit}>
                        <Input value={loginEData.email} title="Email" name="email" type="email" onchange={onChangeFunction} />
                        <Input value={loginEData.password} title="Password" name="password" type="password" onchange={onChangeFunction}/>
                        <SubmitButton name="Sign in" otherOptions={true} setLoginPage={setLoginPage}/> 
                    </form>
                ):(
                    <form onSubmit={handleSubmit}>
                        <Input value={loginMData.phone} title="Mobile number" name="phone" type="tel" onchange={onChangeFunction}/>
                        <Input value={loginMData.password} title="Password" name="password" type="password" onchange={onChangeFunction}/>
                        <SubmitButton name="Sign in" otherOptions={true} setLoginPage={setLoginPage}/>
                    </form>
                )
            }
            <FormDivider tag="or sign in with"/>
            <OtherLoginSignupOption SigninBtn={false}/>
        </div>
    </div>
  )
}

export default Login