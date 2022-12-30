import React, { useState } from 'react'
import {Validate} from '../../Helper/Validate'
import './Input.css'

function Input({title, name, type, onchange, value, pattern}) {

    const [errMsg, setErrMsg] = useState(null)


    const inputValidate = (e) => {
        let {value, type} = e.target
        setErrMsg(Validate(value,type))
    }

    return (
        <div className='inputFieldWrapper'>
            <div>{title}</div>
            <input 
                pattern={pattern}
                value={value} 
                name={name} 
                onBlur={inputValidate} 
                placeholder={title} 
                type={type} 
                onChange={onchange} 
                required/>
            <span className='errorMsg'>{errMsg}</span>
        </div>
    )
}

export default Input