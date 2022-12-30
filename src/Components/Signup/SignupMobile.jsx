import React, {useState} from 'react'
import Input from '../Input/Input'
import SubmitButton from '../SubmitButton/SubmitButton'

function SignupMobile({setLoginPage,emailSignup}) {

    const [signupMData, setSignupMData] = useState({phone : "", password : ""})

    const handleChange = (e) => {
        if(!emailSignup){
            let {name, value} = e.target
            setSignupMData({...signupMData, [name]: value});
        }
    }

    const handleSubmit = (e) => {
        if(!emailSignup){
            e.preventDefault()
            if (!emailSignup) console.log(signupMData)
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <Input pattern="[0-9]{10}" value={signupMData.phone} title="Mobile number" name="phone" type="tel" onchange={handleChange} />
            <Input pattern=".{8,}" value={signupMData.password} title="Password" name="password" type="password" onchange={handleChange} />
            <SubmitButton name="Sign in" otherOptions={false} setLoginPage={setLoginPage} />
        </form>
    )
}

export default SignupMobile