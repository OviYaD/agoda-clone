import React, {useState, useReducer} from 'react'
import Input from '../Input/Input'
import { useNavigate } from "react-router-dom";
import {reducerFunction} from '../../Helper/Reducer'
import SubmitButton from '../SubmitButton/SubmitButton'

function SignupMobile({setLoginPage,emailSignup}) {

    const navigate = useNavigate();


    const INITIAL_STATE = {
        loading : false,
        data : {},
        error : false
    }

    const [state,dispatch] = useReducer(reducerFunction,INITIAL_STATE)

    const [signupMData, setSignupMData] = useState({mobileNo : "", password : ""})

    const handleChange = (e) => {
        if(!emailSignup){
            let {name, value} = e.target
            setSignupMData({...signupMData, [name]: value});
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type : "FETCH_START"})
        fetch("http://192.168.1.76:8080/mobileUser",{
            method : "POST",
            body : JSON.stringify(signupMData),
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
        console.log(state.data)


    return (
        <form onSubmit={handleSubmit}>
            <div className='FormError'>{!state.data.status?state.data.msg:null}</div>
            <Input pattern="[0-9]{10}" value={signupMData.mobileNo} title="Mobile number" name="mobileNo" type="tel" onchange={handleChange} />
            <Input pattern=".{8,}" value={signupMData.password} title="Password" name="password" type="password" onchange={handleChange} />
            <SubmitButton name={state.loading?"Loading...":"Sign up"} otherOptions={false} setLoginPage={setLoginPage} />
        </form>
    )
}

export default SignupMobile