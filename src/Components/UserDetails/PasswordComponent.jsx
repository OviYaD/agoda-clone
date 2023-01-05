import React, {useState} from 'react'
import './UserDetails.css'


function PasswordComponent() {

    const [editDetails, setEditDetails] = useState(true)

    return (
        <>
            {
                (editDetails) ? (
                    <section className='PhoneNumber'>
                        <div className='displayPhone'>
                            <h2>Password</h2>
                            <h1>●●●●●●●●●●</h1>
                        </div>
                        <div className='editPhone' onClick={() => { setEditDetails(false) }}>
                            <span>Edit</span>
                        </div>
                    </section>
                ) : (
                    <section className='nameComponentChange'>
                        <div>
                            <h2 className='formLabal'>Current password</h2>
                            <input className='form-control' placeholder='Current password'/>
                            <h2 className='formLabal'>New password</h2>
                            <input className='form-control' placeholder='New password'/>
                            <h2 className='formLabal'>Confirm new password</h2>
                            <input className='form-control' placeholder='Confirm new password' />
                            <div className='nameComponentChangeBtnWrapper'>
                                <button className='cancelBtn' onClick={() => { setEditDetails(true) }}>Cancel</button>
                                <button className='saveBtn'>Save</button>
                            </div>
                        </div>
                    </section>
                )
            }


        </>
    )
}

export default PasswordComponent