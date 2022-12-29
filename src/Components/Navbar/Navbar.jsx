import React from 'react'
import { Link } from 'react-router-dom'
import NavbarLogo from '../../Asset/Images/navLogo.svg'
import ThreeDots from '../../Asset/Images/threeDots.svg'
import { navbarData } from './data'
import './Navbar.css'

function Navbar({setLoginPage}) {
  return (
    <nav className='navbarWrapper'>
      <div className='leftNavbarWrapper'>
        <div className='logoWrapper'>
          <img src={NavbarLogo} alt="Logo" className='logoImg' />
        </div>
        <div className='otherLeftOption'>
          <ul className='listOfOtherLeftOption'>
            {
              navbarData.map((val, index) => {
                return (
                  (val.type === "tag") ? (<li key={index}>
                    <div className={(val.mobile)?"option navbarMobile":"option"} >
                      <div className='redTagMemu'>
                        <span>{val.tag}</span>
                      </div>
                      <Link className='menuLink'>{val.link}</Link>
                    </div>
                  </li>) : (val.type === "nonTag") ? (
                    <li key={index}>
                      <div className={(val.mobile)?"option navbarMobile":"option"}>
                        <Link className='menuLink'>{val.link}</Link>
                      </div>
                    </li>) : (
                    <li key={index}>
                      <div className={(val.mobile)?"option navbarMobile":"option"}>
                        <span className='menuWithIcon'>
                          <img src={val.src} alt={val.alt} />
                        </span>
                        <Link className='menuLink'>{val.link}</Link>
                      </div>
                    </li>
                  )
                )
              })
            }

            <li>
              <div className='option '>
                <span className='menuWithIcon'>
                  <img src={ThreeDots} alt="ApartmentsLogo" />
                </span>
              </div>
            </li>

          </ul>
        </div>
      </div>
      <div className='rightNavbarWrapper'>
        <div className='buttonWrapper'>
          <button className='listYourPlaceBtn'>List your place</button>
        </div>
        <div className='countryOption'>
            <img className='countryOptionImg' src="https://cdn6.agoda.net/images/mobile/flag-us@2x.png" alt="Flag" />
        </div>
        <div className='currency'>
          <span>Rs.</span>
        </div>
        <div className='loginSignupBtnWrapper'>
            <div className="loginSignupBtnHolder">
              <button className='loginBtn' onClick={()=>setLoginPage(true)}>Sign in</button>
              <button className='signupBtn' onClick={()=>setLoginPage(false)}>Create account</button>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar