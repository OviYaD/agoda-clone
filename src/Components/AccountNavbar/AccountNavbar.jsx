import React from 'react'
import { Link } from 'react-router-dom'
import './AccountNavbar.css'
import {BsCalendarCheck,BsChatLeftDots} from 'react-icons/bs'
import {AiOutlineStar} from 'react-icons/ai'
import {MdStars} from 'react-icons/md'
import {SiBitcoincash} from 'react-icons/si'
import {RiCopperCoinLine} from 'react-icons/ri'
import {BiUser, BiRadioCircle} from 'react-icons/bi'


function AccountNavbar() {
  return (
    <nav className="accountNavbarWrapper">
      <ul>

        <li className='accountNavbarList'>
          <Link className='accountNavbarListLink-Inactive'>
            <BsCalendarCheck className='accountNavbarListIcons-Inactive'></BsCalendarCheck>
            <span>My bookings</span>
          </Link>
        </li>


        <li className='accountNavbarList'>
          <Link className='accountNavbarListLink-Inactive'>
            <BsChatLeftDots className='accountNavbarListIcons-Inactive'></BsChatLeftDots>
            <span>Inbox</span>
          </Link>
        </li>

        <li className='accountNavbarList'>
          <Link className='accountNavbarListLink-Inactive'>
            <AiOutlineStar className='accountNavbarListIcons-Inactive'></AiOutlineStar>
            <span>Reviews</span>
          </Link>
        </li>

        <li className='accountNavbarList'>
          <Link className='accountNavbarListLink-Inactive'>
            <MdStars className='accountNavbarListIcons-Inactive'></MdStars>
            <span>AgodaVIP</span>
          </Link>
        </li>

        <li className='accountNavbarList'>
          <Link className='accountNavbarListLink-Inactive'>
            <SiBitcoincash className='accountNavbarListIcons-Inactive'></SiBitcoincash>
            <span>AgodaCash</span>
          </Link>
        </li>


        <li className='accountNavbarList'>
          <Link className='accountNavbarListLink-Inactive'>
            <SiBitcoincash className='accountNavbarListIcons-Inactive'></SiBitcoincash>
            <span>Cashback Rewards</span>
          </Link>
        </li>


        <li className='accountNavbarList'>
          <Link className='accountNavbarListLink-Inactive'>
            <RiCopperCoinLine className='accountNavbarListIcons-Inactive'></RiCopperCoinLine>
            <span>PointsMAX</span>
          </Link>
        </li>

        <li className='accountNavbarList'>
          <Link className='accountNavbarListLink-active'>
            <BiUser className='accountNavbarListIcons-active'></BiUser>
            <span>Profile</span>
          </Link>
        </li>

        <li className='accountNavbarList'>
          <Link className='accountNavbarListLink-sub'>
            <BiRadioCircle className='accountNavbarListIcons-sub'></BiRadioCircle>
            <span>User details</span>
          </Link>
        </li>

        <li className='accountNavbarList'>
          <Link className='accountNavbarListLink-sub'>
            <BiRadioCircle className='accountNavbarListIcons-sub'></BiRadioCircle>
            <span>Payment methods</span>
          </Link>
        </li>

        <li className='accountNavbarList'>
          <Link className='accountNavbarListLink-sub'>
            <BiRadioCircle className='accountNavbarListIcons-sub'></BiRadioCircle>
            <span>Email subscriptions</span>
          </Link>
        </li>


      </ul>
    </nav>
  )
}

export default AccountNavbar