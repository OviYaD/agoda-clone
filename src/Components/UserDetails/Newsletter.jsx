import React, { useReducer } from 'react'
import axios from 'axios';
import { reducerFunction } from '../../Helper/Reducer'

function Newsletter({ newsLetter }) {

    const INITIAL_STATE = {
        loading: false,
        data: {},
        error: false
    }

    const [state, dispatch] = useReducer(reducerFunction, INITIAL_STATE)


    const handleChange = (val) => {
        dispatch({ type: "FETCH_START" })

        axios.post(`${process.env.REACT_APP_API_KEY}/subscription/newsLetter`, { newsLetter: val }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
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
    }

    return (
        <section className='newsletter'>
            <div>
                <h2>Newsletter</h2>
                <span className='toggleIT'>
                    <span
                        style={{ display: state.data.status ? "block" : "none" }}
                        className='toggleMessageSaved'
                    >Saved</span>
                </span>
            </div>
            <form className='newsletterOptions'>
                <div className='newsletterRadioBtn'>
                    <input onClick={() => handleChange(0)} name='newsLetter' type="radio" defaultChecked={newsLetter === "DAILY" ? true : false} />
                    <label>Daily</label>
                </div>
                <div className='newsletterRadioBtn'>
                    <input onClick={() => handleChange(1)} name='newsLetter' type="radio" defaultChecked={newsLetter === "TWICE" ? true : false} />
                    <label>Twice a week</label>
                </div>
                <div className='newsletterRadioBtn'>
                    <input onClick={() => handleChange(2)} name='newsLetter' type="radio" defaultChecked={newsLetter === "WEEK" ? true : false} />
                    <label>Weekly</label>
                </div>
                <div className='newsletterRadioBtn'>
                    <input onClick={() => handleChange(3)} name='newsLetter' type="radio" defaultChecked={newsLetter === "NEVER" ? true : false} />
                    <label>Never</label>
                </div>
            </form>
        </section>
    )
}

export default Newsletter
