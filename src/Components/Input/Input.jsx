import React from 'react'
import './Input.css'

function Input({title, name, type, onchange, errMsg}) {

    return (
        <div className='inputFieldWrapper'>
            <div>{title}</div>
            <input 
                name ={name}
                placeholder={title} 
                type={type} 
                onChange={onchange} 
                />
            <span className='errorMsg'>{errMsg}</span>
        </div>
    )
}

export default Input