import React, { useState, useReducer } from 'react'
import axios from 'axios';
import {reducerFunction} from '../../Helper/Reducer'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { COUNTRIES } from '../../Helper/COUNTRIES'

function PhoneNumber({mobileNo}) {

    const INITIAL_STATE = {
        loading: false,
        data: {},
        error: false
    }

    const [state, dispatch] = useReducer(reducerFunction, INITIAL_STATE)


    const [editDetails, setEditDetails] = useState(true)

    const formik = useFormik({
        initialValues : {
            'mobileNo': mobileNo
        },
        validationSchema: Yup.object({
            mobileNo: Yup.string()
            .required("Required")
            .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
                    , 'Phone number is not valid')
            .min(10, "Too short")
            .max(10, "Too Long")
        }),
        onSubmit: (value) => {
            dispatch({ type: "FETCH_START" })
            
            axios.put(`${process.env.REACT_APP_API_KEY}/profile/mobile`,value,{ headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
            .then((res)=>{
                dispatch({ type: "FETCH_SUCCESS", payload: res.data })
                if (!res.data.status)  {
                    localStorage.removeItem("token");
                    window.location.reload();
                }
                setEditDetails(true)
            })
            .catch((err) => {
                dispatch({ type: "FETCH_ERROR", payload: err.response.data })
            })
        }
    })


    return (
        <>
            {
                (editDetails) ? (
                    <section className='PhoneNumber'>
                        <div className='displayPhone'>
                            <h2>Phone number</h2>
                        </div>
                        <div className='editPhone' onClick={() => { setEditDetails(false) }}>
                            <span>Edit</span>
                        </div>
                    </section>
                ) : (
                    <section className='nameComponentChange'>
                        <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e) }} noValidate>
                            <h2 className='formLabal'>Country/region calling code</h2>
                            <select className='form-control'>
                                <option>-- Please select your country/region calling code - -</option>
                                {
                                    COUNTRIES.map((val, index) => {
                                        return (<option key={index}>{`${val.name} (${val.mobileCode})`}</option>)
                                    })
                                }
                            </select>
                            <h2 className='formLabal'>Phone Number</h2>
                            <input 
                                name='mobileNo'
                                className='form-control' 
                                value={formik.values.mobileNo?formik.values.mobileNo:""} 
                                onChange={formik.handleChange}/>
                            <span className='errorMsg'>{formik.errors.mobileNo ? formik.errors.mobileNo : null}</span>
                            <div className='nameComponentChangeBtnWrapper'>
                                <button className='cancelBtn' onClick={() => { setEditDetails(true) }}>Cancel</button>
                                <button className='saveBtn' type='submit'>{state.loading ? "Loading..." : "Save"}</button>
                            </div>
                        </form>
                    </section>
                )
            }


        </>
    )
}

export default PhoneNumber