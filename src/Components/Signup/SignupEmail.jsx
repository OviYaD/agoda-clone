import React, { useRef, useState } from 'react'
import Input from '../Input/Input'
import EmailNotification from '../EmailNotification/EmailNotification'
import SubmitButton from '../SubmitButton/SubmitButton'


function SignupEmail({ emailSignup }) {

    const passwordErrRef = useRef(null)

    const [signupEData, setSignupEData] = useState({ firstName: "", lastName: "", email: "", password: "" })

    const [passwordWrok, setPasswordWrok] = useState({password : "",confirmPassword:""})

    const handlePassword = (e) =>{
        let { name, value } = e.target
        setPasswordWrok({ ...passwordWrok, [name]: value });
    }
    
    const handleChange = (e) => {
        if (emailSignup) {
            let { name, value } = e.target
            setSignupEData({ ...signupEData, [name]: value });
        }
    }

    const checkPassword = (e) => {
        if(passwordWrok.password === passwordWrok.confirmPassword){
            setSignupEData({...signupEData,password : passwordWrok.confirmPassword })
            passwordErrRef.current.innerText = ""
        }
        else {
            passwordErrRef.current.innerText = "Check Password and Confirm Password"
            console.log(passwordErrRef.current.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (emailSignup) console.log(signupEData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input pattern="[A-Za-z]{4,32}" value={signupEData.firstName} title="First name" name="firstName" type="text" onchange={handleChange} />
            <Input pattern="[A-Za-z]{4,32}" value={signupEData.lastName} title="Last name" name="lastName" type="text" onchange={handleChange} />
            <Input pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" value={signupEData.email} title="Email" name="email" type="email" onchange={handleChange} />
            <div className='inputFieldWrapper'>
                <div>Password</div>
                <input pattern=".{8,}" name="password" value={passwordWrok.password} placeholder="Password" type="password" onChange={handlePassword} required />
            </div>
            <div className='inputFieldWrapper'>
                <div>Confirm Password</div>
                <input pattern=".{8,}" name="confirmPassword" onBlur={checkPassword} value={passwordWrok.confirmPassword} placeholder="Password" onChange={handlePassword} type="password" required />
                <span className='errorMsg' ref={passwordErrRef}></span>
            </div>
            <EmailNotification />
            <SubmitButton name="Sign up" otherOptions={false} />
        </form>
    )
}

export default SignupEmail