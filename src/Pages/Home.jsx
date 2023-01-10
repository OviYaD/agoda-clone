import React from 'react'
import CovidHeader from '../Components/CovidHeader/CovidHeader'
import Navbar from '../Components/Navbar/Navbar'
import TileContainer from '../Components/TileContainer/TileContainer'

function Home() {
  return (
    <div>
        <Navbar home={true} />
        <CovidHeader />
        <TileContainer />
    </div>
  )
}

export default Home