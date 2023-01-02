import React from 'react'
import DropDown from '../DropDown/DropDown'
import './SignedInNavbar.css'

function SignedInNavbar() {

    return (
        <div className='accountDetails'>
            <div>

                <div className='accountDp'>
                    <h1>K</h1>
                </div>

                <span className='accountName'>
                    <p>Kishore Kumar M.</p>
                    <div className='vipTag'>
                        <div className='vipHead'>
                            <img alt="star_with_vip" src="https://cdn6.agoda.net/images/LOY-5758/default/VIP.svg" />
                        </div>
                        <div className='accountLevel'>
                            <span>Bronze</span>
                            <div className='slash1'></div>
                            <div className='slash2'></div>
                        </div>
                    </div>
                </span>

                <span className='accountAmmount'>
                    <span>

                        <span className='giftCardIcon'>
                            <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="SvgIconstyled__SvgIconStyled-sc-1i6f60b-0 cxSrHy"><path fillRule="evenodd" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm1.125 2a.875.875 0 0 0-.868.765l-.007.11v1.128c-.445-.01-.853.005-1.226.037l-.274.028V4.875a.875.875 0 0 0-1.743-.11L9 4.875v1.592a5.544 5.544 0 0 0-.608.262 4.08 4.08 0 0 0-1.257.984c-.357.43-.575.926-.58 1.474 0 .686.556 1.242 1.242 1.242.307 0 .631-.098.805-.295.143-.176.285-.35.42-.53l.196-.276c.252-.389.603-.71 1.02-.937.48-.206.892-.29 1.377-.31l.25-.006h.442l.15.006c.99.073 1.779.86 1.855 1.849l.006.157v.226l-5.28 1.16-.254.074c-.756.229-1.432.525-1.979 1.07a2.88 2.88 0 0 0-.804 2.055 3.027 3.027 0 0 0 .486 1.658 3.37 3.37 0 0 0 1.39 1.213c.112.053.227.101.343.145l.247.086c.078.025.218.066.41.106l.123.024v1.221a.875.875 0 0 0 1.743.11l.007-.11v-1.161c.368-.04.766-.115 1.183-.243l.317-.106v1.51a.875.875 0 0 0 1.743.11l.007-.11-.001-2.434.033-.02.242-.167.237-.174h.072l.173.266c.239.349.512.673.815.968.25.257.587.41.944.424.375.002.738-.131 1.016-.37.269-.192.434-.498.447-.827a5.15 5.15 0 0 0-.29-1.155 5.69 5.69 0 0 1-.28-1.434l-.01-.293v-3.34l.005-.303a6.047 6.047 0 0 0-.487-2.347 2.934 2.934 0 0 0-1.675-1.446 9.253 9.253 0 0 0-.822-.23l-.418-.087L14 4.875A.875.875 0 0 0 13.125 4zm1.194 8.007v1.128c0 1.358-1.1 2.458-2.458 2.458h-.46a1.916 1.916 0 0 1-1.29-.423 1.313 1.313 0 0 1-.516-1.024 1.081 1.081 0 0 1 .418-.91c.26-.207.502-.305.883-.436l3.423-.793z"></path></svg>
                        </span>

                        <span className='giftCardBalance'>Rs. 0</span>

                    </span>
                    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="SvgIconstyled__SvgIconStyled-sc-1i6f60b-0 ljMdqo"><path fillRule="evenodd" d="M2.602 7h18.796a.5.5 0 0 1 .376.83l-9.02 10.31a1 1 0 0 1-1.506 0L2.226 7.83A.5.5 0 0 1 2.602 7z"></path></svg>
                </span>

                
            </div>
            <DropDown />    
        </div>

    )
}

export default SignedInNavbar