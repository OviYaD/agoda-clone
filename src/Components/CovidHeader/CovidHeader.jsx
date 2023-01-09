import React from 'react'
import './CovidHeader.css'

function CovidHeader() {
  return (
    <header className='covidHeader'>
        <img src='https://img.agoda.net/images/INTTRV-45/default/Bags-heart_2021-09-30.svg' alt='shoppingLogo' />
        <span>Traveling internationally? Get updated information on COVID-19 travel guidance and restrictions.</span>
        <button>Learn more</button>
    </header>
  )
}

export default CovidHeader