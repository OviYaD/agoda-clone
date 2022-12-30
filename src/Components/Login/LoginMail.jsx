import React, {useState} from 'react'
import Input from '../Input/Input'
import SubmitButton from '../SubmitButton/SubmitButton'

function LoginMail({setLoginPage,emailLogin}) {

    const [loginEData, setLoginEData] = useState({email : "", password : ""})

    const handleChange = (e) => {
        if (emailLogin) {
            let {name, value} = e.target
            setLoginEData({...loginEData, [name]: value});
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(loginEData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" value={loginEData.email} title="Email" name="email" type="email" onchange={handleChange} />
            <Input pattern=".{8,}" value={loginEData.password} title="Password" name="password" type="password" onchange={handleChange} />
            <SubmitButton name="Sign in" otherOptions={true} setLoginPage={setLoginPage} />
        </form>
    )
}

export default LoginMail