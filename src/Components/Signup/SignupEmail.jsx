import React, { useReducer } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios';
import Input from '../Input/Input'
import { reducerFunction } from '../../Helper/Reducer'
import EmailNotification from '../EmailNotification/EmailNotification'
import SubmitButton from '../SubmitButton/SubmitButton'


function SignupEmail({ emailSignup }) {

    const INITIAL_STATE = {
        loading: false,
        data: {},
        error: false
    }

    const [state, dispatch] = useReducer(reducerFunction, INITIAL_STATE)


    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            mobileNo: null
        },
        validationSchema: Yup.object({
            firstName: Yup.string().min(4, "Must be min 4 Characters").required("Required"),
            lastName: Yup.string().min(4, "Must be min 4 Characters").required("Required"),
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
            ),
            confirmPassword: Yup.string().required("Required")
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
        }),
        onSubmit: (value) => {
            delete value.confirmPassword;

            dispatch({ type: "FETCH_START" })
            
            axios.post(`${process.env.REACT_APP_API_KEY}/register`,value)
            .then((res)=>{
                dispatch({ type: "FETCH_SUCCESS", payload: res.data })
                if (res.data.status)  {
                    emailSignup(false);
                }
            })
            .catch((err) => {
                dispatch({ type: "FETCH_ERROR", payload: err.response.data })
            })
        }
    })


    return (
        <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e) }} noValidate >
            <div className='FormError'>{!state.data.status ? state.data.msg : null}</div>
            <Input errMsg={formik.errors.firstName ? formik.errors.firstName : null} value={formik.firstName} title="First name" name="firstName" type="text" onchange={formik.handleChange} />
            <Input errMsg={formik.errors.lastName ? formik.errors.lastName : null} value={formik.lastName} title="Last name" name="lastName" type="text" onchange={formik.handleChange} />
            <Input errMsg={formik.errors.email ? formik.errors.email : null} value={formik.email} title="Email" name="email" type="email" onchange={formik.handleChange} />

            <Input errMsg={formik.errors.password ? formik.errors.password : null} value={formik.password} title="Password" name="password" type="password" onchange={formik.handleChange} />
            <Input errMsg={formik.errors.confirmPassword ? formik.errors.confirmPassword : null} value={formik.confirmPassword} title="Confirm Password" name="confirmPassword" type="password" onchange={formik.handleChange} />

            <EmailNotification />
            <SubmitButton name={state.loading ? "Loading..." : "Sign up"} otherOptions={false} />
        </form>
    )
}

export default SignupEmail