import React, {useState} from 'react'
import './UserDetails.css'


function SaveCredit() {

    const [inputCheck, setInputChecked] = useState(true)


    return (
        <section className='section'>
            <h2>Save my credit card information</h2>
            <div>
                <span className='toggleIT'>
                    <span className='toggleMessageSaved'>Saved</span>
                    <span className='toggleMessageFailed'>Failed</span>
                </span>
                <div className='toggleIT'>
                    <span className='buttonToggleEvent'>{inputCheck?"YES":"NO"}</span>
                    <div className='toggleBtnWrapper'>
                        <label className="switch" >
                            <input type="checkbox" defaultChecked={inputCheck} onClick={()=>setInputChecked(!inputCheck)}/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SaveCredit