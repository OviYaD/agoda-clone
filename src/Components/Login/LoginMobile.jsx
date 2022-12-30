import React, {useState} from 'react'
import Input from '../Input/Input'
import SubmitButton from '../SubmitButton/SubmitButton'

function LoginMobile({setLoginPage,emailLogin}) {

    const [loginMData, setLoginMData] = useState({phone : "", password : ""})

    const handleChange = (e) => {
        if (!emailLogin) {
            let {name, value} = e.target
            setLoginMData({...loginMData, [name]: value});
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!emailLogin) console.log(loginMData)
    }


    return (
        <form onSubmit={handleSubmit}>
            <Input pattern="[0-9]{10}" value={loginMData.phone} title="Mobile number" name="phone" type="tel" onchange={handleChange} />
            <Input pattern=".{8,}" value={loginMData.password} title="Password" name="password" type="password" onchange={handleChange} />
            <SubmitButton name="Sign in" otherOptions={true} setLoginPage={setLoginPage} />
        </form>
    )
}

export default LoginMobile