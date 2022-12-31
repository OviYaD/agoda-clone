import React, {useReducer, useState} from 'react'
import Input from '../Input/Input'
import SubmitButton from '../SubmitButton/SubmitButton'
import {reducerFunction} from '../../Helper/Reducer'

function LoginMobile({setLoginPage,emailLogin}) {

    const INITIAL_STATE = {
        loading : false,
        data : {},
        error : false
    }

    const [state, dispatch] = useReducer(reducerFunction,INITIAL_STATE)

    const [loginMData, setLoginMData] = useState({mobileNo : "", password : ""})

    const handleChange = (e) => {
        if (!emailLogin) {
            let {name, value} = e.target
            setLoginMData({...loginMData, [name]: value});
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type : "FETCH_START"})
        fetch("http://192.168.1.76:8080/login/mobile",{
            method : "POST",
            body : JSON.stringify(loginMData),
            headers: { 'Content-Type': 'application/json'}
        })
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                dispatch({type : "FETCH_SUCCESS", payload : data})  
            })
            .catch(()=>{
                dispatch({type : "FETCH_ERROR"})
            })

        }
        console.log(state.data)


    return (
        <form onSubmit={handleSubmit}>
            <div className='FormError'>{!state.data.status?state.data.msg:null}</div>
            <Input pattern="[0-9]{10}" value={loginMData.mobileNo} title="Mobile number" name="mobileNo" type="tel" onchange={handleChange} />
            <Input pattern=".{8,}" value={loginMData.password} title="Password" name="password" type="password" onchange={handleChange} />
            <SubmitButton name={state.loading?"Loading...":"Sign in"} otherOptions={true} setLoginPage={setLoginPage} />
        </form>
    )
}

export default LoginMobile