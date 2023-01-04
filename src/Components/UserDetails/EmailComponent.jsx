import React from 'react'
import './UserDetails.css'
import {AiFillWarning} from 'react-icons/ai'

function EmailComponent() {
  return (
    <section className='emailComponent'>
        <div className='emailVerified'>
            <h2>Email</h2>
            <div className='emailUnVerified' style={{display : true?"none":"block"}}>
                <span className='emailComponentWarning'>
                    <AiFillWarning className='warningLogo'/>
                    Your email hasn’t been verified.    
                </span>
                <span className='emailVerifyBtn'>Verify email</span>
            </div>
            <div>
                <span className='emailHolder'>kishorekumar@codingmart.com</span>
                <span style={{display : false?"none":"inline"}} className='verified'>VERIFIED</span>
            </div>
        </div>
    </section>
  )
}

export default EmailComponent