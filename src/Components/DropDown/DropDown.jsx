import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BronzeMedals from '../BronzeMedals/BronzeMedals'
import './DropDown.css'

function DropDown({size}) {

    const navigate = useNavigate();


    const handleEvent = () => {
        localStorage.removeItem("token");
        navigate('/getStarted')
    }

  return (
    <div className='dropDownWrapper' style={{transform : `translate3d(${size.x}px, ${size.y*10}px, 0px)`}}>
        <div>
            <div className='userMenuDropDown'>
                <div className='userMenuHead'>My Account</div>
                <div className='otherLinkMenu'>
                    <ul>
                        <li><Link className='userMenuDropDownLinks'>My bookings</Link></li>
                        <li><Link className='userMenuDropDownLinks'>Inbox</Link></li>
                        <li><Link className='userMenuDropDownLinks agodaCash'>
                            <p>AgodaCash</p>
                            <div>Rs. 0</div>
                        </Link></li>
                        <li><Link className='userMenuDropDownLinks'>Cashback Rewards</Link></li>
                        <li><Link className='userMenuDropDownLinks agodaVIP'>
                            <p>AgodaVIP</p>
                            <BronzeMedals />
                        </Link></li>
                        <li><Link className='userMenuDropDownLinks'>Saved properties list</Link></li>
                        <li><Link className='userMenuDropDownLinks'>Reviews</Link></li>
                        <li><Link className='userMenuDropDownLinks pointsMAX'>
                            <p>PointsMAX</p>
                            <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" className="SvgIconstyled__SvgIconStyled-sc-1i6f60b-0 coLXuD"><defs><path id="pointsmax-line-logo_24px-a" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-1c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm.839-8.532c.903 0 1.629-.706 1.629-1.57v-.828c0-.864-.726-1.57-1.63-1.57H10.5v3.968h2.339zM10.5 17a.5.5 0 1 1-1 0V9a.5.5 0 0 1 .5-.5h2.839c1.449 0 2.629 1.147 2.629 2.57v.828c0 1.422-1.18 2.57-2.63 2.57H10.5V17zM9.895 4.8a.5.5 0 1 1 .28.96 6.515 6.515 0 0 0-4.417 4.42.5.5 0 0 1-.96-.28 7.515 7.515 0 0 1 5.097-5.1z"></path></defs><use xlinkHref="#pointsmax-line-logo_24px-a"></use></svg>
                            </Link></li>
                        <li><Link className='userMenuDropDownLinks'>Profile</Link></li>
                    </ul>
                </div>
                <div className='signoutBox'>
                    <button onClick={handleEvent}>SIGN OUT</button>
                </div>
            </div>
            <span></span>
        </div>
    </div>
  )
}

export default DropDown