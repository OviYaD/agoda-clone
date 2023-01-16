import React from 'react'
import AccommodationPromotions from '../Accommodation Promotions/Accommodation Promotions'
import DestinationsCarousel from '../DestinationsCarousel/DestinationsCarousel'
import ExploreMore from '../ExploreMore/ExploreMore'
import './HomeBody.css'

function HomeBody() {
  return (
    <section className='homePageWrapper'>
        <AccommodationPromotions />
        <DestinationsCarousel />
        <ExploreMore />
    </section>
  )
}

export default HomeBody