import React, {useReducer, useState} from 'react'
import Input from '../Input/Input'
import { useNavigate } from "react-router-dom";
import SubmitButton from '../SubmitButton/SubmitButton'
import {reducerFunction} from '../../Helper/Reducer'

function LoginMobile({setLoginPage,emailLogin}) {

    const navigate = useNavigate();


    const INITIAL_STATE = {
        loading : false,
        data : {},
        error : false
    }

    const [state, dispatch] = useReducer(reducerFunction,INITIAL_STATE)

    const [loginMData, setLoginMData] = useState({mobileNo : "", password : "", email : null })

    const handleChange = (e) => {
        if (!emailLogin) {
            let {name, value} = e.target
            setLoginMData({...loginMData, [name]: value});
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type : "FETCH_START"})
        fetch(`${process.env.REACT_APP_API_KEY}/login`,{
            method : "POST",
            body : JSON.stringify(loginMData),
            headers: { 'Content-Type': 'application/json'}
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