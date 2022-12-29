import React from 'react'
import './FormDivider.css'

function FormDivider({tag}) {
    return (
        <>
            <div className='formDivider'>
                <div className='dividerLine'></div>
                <span>{tag}</span>
                <div className='dividerLine'></div>
            </div>
        </>
    )
}

export default FormDivider