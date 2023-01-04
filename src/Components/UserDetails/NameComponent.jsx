import React, { useState } from 'react'
import './UserDetails.css'


function NameComponent() {

    const [editDetails, setEditDetails] = useState(true)
 

    return (
        <>

            {
                (editDetails) ? (
                    <section className='nameComponent' style={{backgroundImage : true?"linear-gradient(90deg,#a6e66c,#bdf488)": "linear-gradient(90deg,#ffcc7b,#ffd899)"}}>
                        <div className='displayNameComponent'>
                            <div style={{backgroundColor: true?"#85c150":"#ffa726"}}>K</div>
                        </div>
                        <div className='displayName'>
                            <div>
                                <h2>Name</h2>
                                <span>Kishore Kumar M R</span>
                            </div>
                        </div>
                        <div className='editnameComponent' onClick={()=>setEditDetails(false)}>
                            <span>Edit</span>
                        </div>
                    </section>
                ) : (
                    <section className='nameComponentChange'>
                        <div>
                            <h2 className='formLabal'>First name</h2>
                            <input className='form-control' />
                            <h2 className='formLabal'>Last name</h2>
                            <input className='form-control' />
                            <div className='nameComponentChangeBtnWrapper'>
                                <button className='cancelBtn' onClick={()=>setEditDetails(true)}>Cancel</button>
                                <button className='saveBtn'>Save</button>
                            </div>
                        </div>
                    </section>
                )
            }



        </>
    )
}

export default NameComponent