import React from 'react'
import './Input.css'

function Input({title, name, type, onchange, value}) {
    return (
        <div className='inputFieldWrapper'>
            <div>{title}</div>
            <input value={value} name={name} placeholder={title} type={type} onChange={onchange} required/>
        </div>
    )
}

export default Input