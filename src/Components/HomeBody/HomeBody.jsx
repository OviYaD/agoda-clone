import React from 'react'
import AccommodationPromotions from '../Accommodation Promotions/Accommodation Promotions'
import DestinationsCarousel from '../DestinationsCarousel/DestinationsCarousel'
import './HomeBody.css'

function HomeBody() {
  return (
    <section className='homePageWrapper'>
        <AccommodationPromotions />
        <DestinationsCarousel />
    </section>
  )
}

export default HomeBody