import React from 'react'
import { Link } from 'react-router-dom'
import NavbarLogo from '../../Asset/Images/navLogo.svg'
import ApartmentsLogo from '../../Asset/Images/apartments.svg'
import ThreeDots from '../../Asset/Images/threeDots.svg'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='navbarWrapper'>
      <div className='leftNavbarWrapper'>
        <div className='logoWrapper'>
          <img src={NavbarLogo} alt="Logo" className='logoImg' />
        </div>
        <div className='otherLeftOption'>
          <ul className='listOfOtherLeftOption'>

            <li>
              <div className='option'>
                <div className='redTagMemu'>
                  <span>Bundle and save!</span>
                </div>
                <Link className='menuLink'>Flight + Hotel</Link>
              </div>
            </li>

            <li>
              <div className='option'>
                <Link className='menuLink'>Hotels & Homes</Link>
              </div>
            </li>

            <li>
              <div className='option'>
                <Link className='menuLink'>Flights</Link>
              </div>
            </li>

            <li>
              <div className='option'>
                <div className='redTagMemu'>
                  <span>New!</span>
                </div>
                <Link className='menuLink'>Coupons & Deals</Link>
              </div>
            </li>

            <li>
              <div className='option '>
                <span className='menuWithIcon'>
                  <img src={ApartmentsLogo} alt="ApartmentsLogo"/>
                </span>
                <Link className='menuLink'>Apartments</Link>
              </div>
            </li>

            <li>
              <div className='option'>
                <div className='redTagMemu'>
                  <span>New!</span>
                </div>
                <Link className='menuLink'>Things to do</Link>
              </div>
            </li>

            <li>
              <div className='option '>
                <span className='menuWithIcon'>
                  <img src={ThreeDots} alt="ApartmentsLogo"/>
                </span>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar