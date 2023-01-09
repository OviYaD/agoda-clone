import React, { useReducer } from 'react'
import {reducerFunction} from '../../Helper/Reducer'
import axios from 'axios';
import './UserDetails.css'


function SaveCredit({ paymentInfo, setPaymentInfo }) {

    const INITIAL_STATE = {
        loading: false,
        data: {},
        error: false
    }

    const [state, dispatch] = useReducer(reducerFunction, INITIAL_STATE)

    const handleChange = () => {
        dispatch({ type: "FETCH_START" })
        axios.post(`${process.env.REACT_APP_API_KEY}/payment/save`, {toSave : !paymentInfo}, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            .then((res) => {
                dispatch({ type: "FETCH_SUCCESS", payload: res.data })
                if (!res.data.status) {
                    localStorage.removeItem("token");
                    window.location.reload();
                }
            })
            .catch((err) => {
                dispatch({ type: "FETCH_ERROR", payload: err.response.data })
            })

            setPaymentInfo(!paymentInfo)
    }


    return (
        <section className='section'>
            <h2>Save my credit card information</h2>
            <div>
                <span className='toggleIT'>
                    <span 
                        style={{display : state.data.status?"block":"none"}}
                        className='toggleMessageSaved'
                    >Saved</span>
                </span>
                <div className='toggleIT'>
                    <span className='buttonToggleEvent'>{paymentInfo ? "YES" : "NO"}</span>
                    <div className='toggleBtnWrapper'>
                        <label className="switch" >
                            <input type="checkbox" defaultChecked={paymentInfo} onClick={handleChange} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SaveCredit