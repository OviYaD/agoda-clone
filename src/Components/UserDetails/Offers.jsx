import React,{useState} from 'react'

function Offers() {

    const [inputCheck, setInputChecked] = useState(true)


    return (
        <section className='section'>
            <h2>I would like to receive emails about Agoda promotions</h2>
            <div>
                <span className='toggleIT'>
                    <span className='toggleMessageSaved'>Saved</span>
                    <span className='toggleMessageFailed'>Failed</span>
                </span>
                <div className='toggleIT'>
                    <span className='buttonToggleEvent'>{inputCheck ? "YES" : "NO"}</span>
                    <div className='toggleBtnWrapper'>
                        <label className="switch" >
                            <input type="checkbox" defaultChecked={inputCheck} onClick={() => setInputChecked(!inputCheck)} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offers