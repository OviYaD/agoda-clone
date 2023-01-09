import React, { useState, useReducer } from 'react'
import axios from 'axios';
import { reducerFunction } from '../../Helper/Reducer'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './UserDetails.css'


function PasswordComponent() {

    const INITIAL_STATE = {
        loading: false,
        data: {},
        error: false
    }

    const [state, dispatch] = useReducer(reducerFunction, INITIAL_STATE)

    const formik = useFormik({
        initialValues: {
            currentPassword: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: Yup.object({
            currentPassword: Yup.string().required("Required").test(
                "regex",
                "Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase",
                val => {
                    let regExp = new RegExp(
                        "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
                    );
                    return regExp.test(val);
                }
            ),
            password: Yup.string().required("Required").test(
                "regex",
                "Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase",
                val => {
                    let regExp = new RegExp(
                        "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
                    );
                    return regExp.test(val);
                }
            ),
            confirmPassword: Yup.string().required("Required")
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
        }),
        onSubmit: (values) => {
            dispatch({ type: "FETCH_START" })
            
            axios.put(`${process.env.REACT_APP_API_KEY}/profile/password`,{
                "oldPassword" : values.currentPassword,
                "newPassword" : values.password
            },{ headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
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
                setEditDetails(false)
            })
        }
    })

    const [editDetails, setEditDetails] = useState(true)

    return (
        <>
            {
                (editDetails) ? (
                    <section className='PhoneNumber'>
                        <div className='displayPhone'>
                            <h2>Password</h2>
                            <h1>●●●●●●●●●●</h1>
                        </div>
                        <div className='editPhone' onClick={() => { setEditDetails(false) }}>
                            <span>Edit</span>
                        </div>
                    </section>
                ) : (
                    <section className='nameComponentChange'>

                        <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e) }} noValidate >
                            <span className='errorMsg'>{!state.data.status ? state.data.msg : null}</span>

                            <h2 className='formLabal'>Current password</h2>
                            <input
                                type="password"
                                value={formik.values.currentPassword}
                                name="currentPassword"
                                onChange={formik.handleChange}
                                className='form-control'
                                placeholder='Current password' />
                            <span className='errorMsg'>{formik.errors.currentPassword ? formik.errors.currentPassword : null}</span>

                            <h2 className='formLabal'>New password</h2>
                            <input
                                type="password"
                                value={formik.values.password}
                                name="password"
                                onChange={formik.handleChange}
                                className='form-control'
                                placeholder='New password' />
                            <span className='errorMsg'>{formik.errors.password ? formik.errors.password : null}</span>

                            <h2 className='formLabal'>Confirm new password</h2>
                            <input
                                type="password"
                                value={formik.values.confirmPassword}
                                name="confirmPassword"
                                onChange={formik.handleChange}
                                className='form-control'
                                placeholder='Confirm new password' />
                            <span className='errorMsg'>{formik.errors.confirmPassword ? formik.errors.confirmPassword : null}</span>

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

export default PasswordComponent