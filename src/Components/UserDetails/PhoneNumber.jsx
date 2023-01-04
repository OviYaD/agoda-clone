import React, { useState } from 'react'
import { COUNTRIES } from '../../Helper/COUNTRIES'

function PhoneNumber() {

    const [editDetails, setEditDetails] = useState(true)


    return (
        <>
            {
                (editDetails) ? (
                    <section className='PhoneNumber'>
                        <div className='displayPhone'>
                            <h2>Phone number</h2>
                        </div>
                        <div className='editPhone' onClick={() => { setEditDetails(false) }}>
                            <span>Edit</span>
                        </div>
                    </section>
                ) : (
                    <section className='nameComponentChange'>
                        <div>
                            <h2 className='formLabal'>Country/region calling code</h2>
                            <select className='form-control'>
                                <option>-- Please select your country/region calling code - -</option>
                                {
                                    COUNTRIES.map((val, index) => {
                                        return (<option key={index}>{`${val.name} (${val.mobileCode})`}</option>)
                                    })
                                }
                            </select>
                            <h2 className='formLabal'>Phone Number</h2>
                            <input className='form-control' />
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

export default PhoneNumber