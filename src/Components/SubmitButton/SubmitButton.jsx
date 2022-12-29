import React from 'react'
import './SubmitButton.css'

function SubmitButton({setLoginPage,name,otherOptions}) {
    return (
        <>
            <div className='inputFieldWrapper'>
                <button className='submitBtn' type='submit'>{name}</button>
            </div>
            {
                (otherOptions)?(
                    <div className='loginOtherOption'>
                        <span onClick={()=>setLoginPage(false)}>Create Account</span>
                        <span>
                            <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="sc-fzoyAV jwemYc"><path d="M5.286 9.143V6.388A6.388 6.388 0 0 1 11.673 0h1.167a6.388 6.388 0 0 1 6.388 6.388 1 1 0 0 1-2 0A4.388 4.388 0 0 0 12.84 2h-1.167a4.388 4.388 0 0 0-4.387 4.388v2.755H19a2 2 0 0 1 2 2v10.714a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V11.143a2 2 0 0 1 2-2h.286zM13 17.829a3.001 3.001 0 1 0-2 0v2.15a1 1 0 1 0 2 0v-2.15zM11 15a1 1 0 1 1 2 0 1 1 0 0 1-2 0z"></path></svg>
                            Forgot password?
                        </span>
                    </div>
                ):null
            }
        </>
    )
}

export default SubmitButton