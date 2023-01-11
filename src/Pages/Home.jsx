import React from 'react'
import CovidHeader from '../Components/CovidHeader/CovidHeader'
import HomeBody from '../Components/HomeBody/HomeBody'
import Navbar from '../Components/Navbar/Navbar'
import TileContainer from '../Components/TileContainer/TileContainer'

function Home() {
  return (
    <div>
        <Navbar home={true} />
        <CovidHeader />
        <TileContainer />
        <HomeBody />
    </div>
  )
}

export default Home