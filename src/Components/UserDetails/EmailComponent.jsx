import React from 'react'
import './UserDetails.css'
import {AiFillWarning} from 'react-icons/ai'

function EmailComponent({isVerified,email}) {
  return (
    <section className='emailComponent'>
        <div className='emailVerified'>
            <h2>Email</h2>
            <div className='emailUnVerified' style={{display :isVerified?"none":"block"}}>
                <span className='emailComponentWarning'>
                    <AiFillWarning className='warningLogo'/>
                    Your email hasn’t been verified.    
                </span>
                <span className='emailVerifyBtn'>Verify email</span>
            </div>
            <div>
                <span className='emailHolder'>{email}</span>
                <span style={{display : !isVerified?"none":"inline"}} className='verified'>VERIFIED</span>
            </div>
        </div>
    </section>
  )
}

export default EmailComponent