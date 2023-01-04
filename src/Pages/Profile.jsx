import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import '../Asset/Styles/Profile.css'
import AccountNavbar from '../Components/AccountNavbar/AccountNavbar'
import FooterMenu from '../Components/FooterMenu/FooterMenu'
import Footer from '../Components/Footer/Footer'
import UserDetails from '../Components/UserDetails/UserDetails'

function Profile() {
  
  return (
    <main className='profileComponent'>
        <Navbar showProfile={true}/>
        <main className='profilePageWrapper'>
          <section className='leftPanel'>
            <AccountNavbar />
            <div className='leftPanelUnderLine'></div>
          </section>
          <section className='rightPanel'>
            <UserDetails />
          </section>
        </main>
        <FooterMenu />
        <Footer />
    </main>
  )
}

export default Profile