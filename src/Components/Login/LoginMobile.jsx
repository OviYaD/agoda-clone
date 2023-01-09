import React, { useReducer } from 'react'
import axios from 'axios';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Input from '../Input/Input'
import { useNavigate } from "react-router-dom";
import SubmitButton from '../SubmitButton/SubmitButton'
import { reducerFunction } from '../../Helper/Reducer'

function LoginMobile({ setLoginPage }) {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            mobileNo: "",
            password: "",
            email: null
        },
        validationSchema: Yup.object({
            mobileNo: Yup.string()
                .required("Required")
                .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
                    , 'Phone number is not valid')
                .min(10, "Too short")
                .max(10, "Too Long"),
            password: Yup.string().required("Required").test(
                "regex",
                "Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase",
                val => {
                    let regExp = new RegExp(
                        "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
                    );
                    return regExp.test(val);
                }
            )
        }),
        onSubmit: (value) => {

            dispatch({ type: "FETCH_START" })
            axios.post(`${process.env.REACT_APP_API_KEY}/login`,value)
            .then((res)=>{
                dispatch({ type: "FETCH_SUCCESS", payload: res.data })
                if(res.data.status) {
                    localStorage.setItem('token', res.data.token)
                    navigate('/profile', { replace: true })
                }
            })
            .catch((err) => {
                dispatch({ type: "FETCH_ERROR", payload: err.response.data })
            })
        }
    })


    const INITIAL_STATE = {
        loading: false,
        data: {},
        error: false
    }

    const [state, dispatch] = useReducer(reducerFunction, INITIAL_STATE)

    return (
        <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e) }} noValidate >
            <div className='FormError'>{!state.data.status ? state.data.msg : null}</div>
            <Input errMsg={formik.errors.mobileNo ? formik.errors.mobileNo : null} value={formik.mobileNo} title="Mobile number" name="mobileNo" type="tel" onchange={formik.handleChange} />
            <Input errMsg={formik.errors.password ? formik.errors.password : null} value={formik.password} title="Password" name="password" type="password" onchange={formik.handleChange} />
            <SubmitButton name={state.loading ? "Loading..." : "Sign in"} otherOptions={true} setLoginPage={setLoginPage} />
        </form>
    )
}

export default LoginMobile