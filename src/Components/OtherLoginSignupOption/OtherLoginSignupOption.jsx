import React from 'react'
import './OtherLoginSignupOption.css'

function OtherLoginSignupOption({ SigninBtn, setLoginPage }) {
    return (
        <>
            <div className='otherLoginOption'>
                <div className='loginViaGoogle'>
                    <div className='googleBtnWrapper'>
                        <button>
                            <div className='BtnTitleWrapper'>
                                <img src='https://cdn6.agoda.net/images/universal-login/google-logo-v2.svg' alt='Google' />
                                <span>Google</span>
                            </div>
                        </button>
                    </div>
                </div>
                <div className='facbookApple'>
                    <div className='loginViaFacebook'>
                        <button>
                            <div className='BtnTitleWrapper'>
                                <img src='https://cdn6.agoda.net/images/universal-login/facebook-logo.svg' alt='Google' />
                                <span>FaceBook</span>
                            </div>
                        </button>
                    </div>
                    <div className='loginViaApple'>
                        <button>
                            <div className='BtnTitleWrapper'>
                                <img src='https://cdn6.agoda.net/images/universal-login/apple-logo.svg' alt='Google' />
                                <span>Apple</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            {
                (SigninBtn) ? (
                    <div className='SigninBtnWrapper'>
                        <div className='dividerLine'></div>
                        <button className='SigninBtn' onClick={()=>{setLoginPage(true)}}>Already have an account? Sign in</button>
                    </div>
                ) : null
            }
            <div className='footer'>
                <span>By signing in, I agree to Agoda's <span className='footerLink'>Terms of Use</span> and <span className='footerLink'>Privacy Policy</span>.</span>
            </div>
        </>
    )
}

export default OtherLoginSignupOption