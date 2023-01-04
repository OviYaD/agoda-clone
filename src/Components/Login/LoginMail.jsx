import React, {useReducer, useState} from 'react'
import { useNavigate } from "react-router-dom";
import Input from '../Input/Input'
import SubmitButton from '../SubmitButton/SubmitButton'
import {reducerFunction} from '../../Helper/Reducer'

function LoginMail({setLoginPage,emailLogin}) {

    const navigate = useNavigate();

    const INITIAL_STATE = {
        loading : false,
        data : {},
        error : false
    }

    const [state,dispatch] = useReducer(reducerFunction,INITIAL_STATE)

    const [loginEData, setLoginEData] = useState({email : "", password : "", mobileNo : null})

    const handleChange = (e) => {
        if (emailLogin) {
            let {name, value} = e.target
            setLoginEData({...loginEData, [name]: value});
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type : "FETCH_START"})
        fetch(`${process.env.REACT_APP_API_KEY}/login`,{
            method : "POST",
            body : JSON.stringify(loginEData),
            headers: { 
                'Content-Type': 'application/json'},
        })
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                dispatch({type : "FETCH_SUCCESS", payload : data})  
                if(data.status){
                    localStorage.setItem('token',data.token)
                    navigate('/profile', { replace: true })
                }
            })
            .catch(()=>{
                dispatch({type : "FETCH_ERROR"})
            })
        }


        
    return (
        <form onSubmit={handleSubmit}>
            <div className='FormError'>{!state.data.status?state.data.msg:null}</div>
            <Input pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" value={loginEData.email} title="Email" name="email" type="email" onchange={handleChange} />
            <Input pattern=".{8,}" value={loginEData.password} title="Password" name="password" type="password" onchange={handleChange} />
            <SubmitButton name={state.loading?"Loading...":"Sign in"} otherOptions={true} setLoginPage={setLoginPage} />
        </form>
    )
}

export default LoginMail