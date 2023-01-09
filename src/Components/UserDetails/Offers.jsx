import React,{useState,useReducer} from 'react'
import axios from 'axios';
import { reducerFunction } from '../../Helper/Reducer'

function Offers({Trip}) {

    const [inputCheck, setInputChecked] = useState(Trip)

    const INITIAL_STATE = {
        loading: false,
        data: {},
        error: false
    }

    const [state, dispatch] = useReducer(reducerFunction, INITIAL_STATE)

    const handleChange = () => {
        dispatch({ type: "FETCH_START" })
        axios.post(`${process.env.REACT_APP_API_KEY}/subscription/promotion`, {promotion : !inputCheck}, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            .then((res) => {
                dispatch({ type: "FETCH_SUCCESS", payload: res.data })
                if (!res.data.status) {
                    localStorage.removeItem("token");
                    window.location.reload();
                }
                setInputChecked(!inputCheck)
            })
            .catch((err) => {
                dispatch({ type: "FETCH_ERROR", payload: err.response.data })
            })
    }


    return (
        <section className='section'>
            <h2>I would like to receive emails about Agoda promotions</h2>
            <div>
                <span className='toggleIT'>
                    <span style={{ display: state.data.status ? "block" : "none" }}
                        className='toggleMessageSaved'
                    >Saved</span>
                </span>
                <div className='toggleIT'>
                    <span className='buttonToggleEvent'>{inputCheck ? "YES" : "NO"}</span>
                    <div className='toggleBtnWrapper'>
                        <label className="switch" >
                            <input type="checkbox" defaultChecked={inputCheck} onClick={handleChange} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offers