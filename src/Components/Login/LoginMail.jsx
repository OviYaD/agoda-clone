import React, { useReducer } from 'react'
import { useNavigate } from "react-router-dom";
import Input from '../Input/Input'
import SubmitButton from '../SubmitButton/SubmitButton'
import { reducerFunction } from '../../Helper/Reducer'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function LoginMail({ setLoginPage }) {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            mobileNo: null
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid Email Address").required("Required"),
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
        onSubmit: (values) => {
            dispatch({ type: "FETCH_START" })
            fetch(`${process.env.REACT_APP_API_KEY}/login`, {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    dispatch({ type: "FETCH_SUCCESS", payload: data })
                    if (data.status) {
                        localStorage.setItem('token', data.token)
                        navigate('/profile', { replace: true })
                    }
                })
                .catch(() => {
                    dispatch({ type: "FETCH_ERROR" })
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
            <Input errMsg={formik.errors.email ? formik.errors.email : null} type="email" name="email" value={formik.values.email} title="Email" onchange={formik.handleChange} />
            <Input errMsg={formik.errors.password ? formik.errors.password : null} type="password" name="password" value={formik.values.password} title="Password" onchange={formik.handleChange} />
            <SubmitButton name={state.loading ? "Loading..." : "Sign in"} otherOptions={true} setLoginPage={setLoginPage} />
        </form>
    )
}

export default LoginMail