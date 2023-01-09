import React, { useState, useReducer } from 'react'
import axios from 'axios';
import { reducerFunction } from '../../Helper/Reducer'
import './UserDetails.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'


function NameComponent({firstName,lastName,isVerified}) {

    const INITIAL_STATE = {
        loading: false,
        data: {},
        error: false
    }

    const [state, dispatch] = useReducer(reducerFunction, INITIAL_STATE)

    const formik = useFormik({
        initialValues : {
            'firstName': firstName,
            'lastName': lastName,
        },
        validationSchema : Yup.object({
            firstName: Yup.string().required("Required"),
            lastName: Yup.string().required("Required")
        }),
        onSubmit: (value) => {
            dispatch({ type: "FETCH_START" })
            
            axios.put(`${process.env.REACT_APP_API_KEY}/profile/name`,value,{ headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
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

    const [editDetails, setEditDetails] = useState(true)

    return (
        <>
            {
                (editDetails) ? (
                    <section className='nameComponent' style={{backgroundImage : isVerified?"linear-gradient(90deg,#a6e66c,#bdf488)": "linear-gradient(90deg,#ffcc7b,#ffd899)"}}>
                        <div className='displayNameComponent'>
                            <div style={{backgroundColor: isVerified?"#85c150":"#ffa726"}}>{firstName[0].toUpperCase()}</div>
                        </div>
                        <div className='displayName'>
                            <div>
                                <h2>Name</h2>
                                <span>{firstName} {lastName}</span>
                            </div>
                        </div>
                        <div className='editnameComponent' onClick={()=>setEditDetails(false)}>
                            <span>Edit</span>
                        </div>
                    </section>
                ) : (
                    <section className='nameComponentChange'>
                        <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e) }} noValidate>
                            <h2 className='formLabal'>First name</h2>
                            <input 
                                className='form-control' 
                                value={formik.values.firstName} 
                                onChange={formik.handleChange}
                                name="firstName"
                            />
                            <span className='errorMsg'>{formik.errors.firstName ? formik.errors.firstName : null}</span>
                            <h2 className='formLabal'>Last name</h2>
                            <input 
                                className='form-control' 
                                value={formik.values.lastName} 
                                onChange={formik.handleChange}
                                name="lastName"
                            />
                            <span className='errorMsg'>{formik.errors.lastName ? formik.errors.lastName : null}</span>
                            <div className='nameComponentChangeBtnWrapper'>
                                <button className='cancelBtn' onClick={()=>setEditDetails(true)}>Cancel</button>
                                <button className='saveBtn' type='submit'>{state.loading ? "Loading..." : "Save"}</button>
                            </div>
                        </form>
                    </section>
                )
            }
        </>
    )
}

export default NameComponent