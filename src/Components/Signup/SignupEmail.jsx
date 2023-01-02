import React, { useRef, useState, useReducer } from 'react'
import Input from '../Input/Input'
import { useNavigate } from "react-router-dom";
import {reducerFunction} from '../../Helper/Reducer'
import EmailNotification from '../EmailNotification/EmailNotification'
import SubmitButton from '../SubmitButton/SubmitButton'


function SignupEmail({ emailSignup }) {

    const navigate = useNavigate();

    const btnRef = useRef()


    const INITIAL_STATE = {
        loading : false,
        data : {},
        error : false
    }

    const [state,dispatch] = useReducer(reducerFunction,INITIAL_STATE)

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

    const checkPassword = () => {
        if(passwordWrok.password === passwordWrok.confirmPassword){
            setSignupEData({...signupEData,password : passwordWrok.confirmPassword })
            passwordErrRef.current.innerText = ""
            btnRef.current.removeAttribute("disabled")
        }
        else {
            passwordErrRef.current.innerText = "Check Password and Confirm Password"
            console.log(passwordErrRef.current.value)
            btnRef.current.setAttribute("disabled", "disabled");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type : "FETCH_START"})
        fetch("http://192.168.1.76:8080/userInfo",{
            method : "POST",
            body : JSON.stringify(signupEData),
            headers: { 'Content-Type': 'application/json'}
        })
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                dispatch({type : "FETCH_SUCCESS", payload : data})
                if(state.data.status){
                    navigate('/getStarted', { replace: true })
                }  
            })
            .catch(()=>{
                dispatch({type : "FETCH_ERROR"})
            })

        }

    return (
        <form onSubmit={handleSubmit}>
            <div className='FormError'>{!state.data.status?state.data.msg:null}</div>
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
            <SubmitButton name={state.loading?"Loading...":"Sign up"} ref={btnRef}  otherOptions={false} />
        </form>
    )
}

export default SignupEmail