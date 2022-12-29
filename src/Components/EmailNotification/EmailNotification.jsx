import React from 'react'
import './EmailNotification.css'

function EmailNotification() {
    return (
        <div className='emailNotification'>
            <label>
                <input type="checkbox" defaultChecked />
                <span>Email me exclusive Agoda promotions. I can opt out later as stated in the Privacy Policy.</span>
            </label>
        </div>
    )
}

export default EmailNotification