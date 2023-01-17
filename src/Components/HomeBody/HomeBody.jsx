import React from 'react'
import AccommodationPromotions from '../Accommodation Promotions/Accommodation Promotions'
import DestinationsCarousel from '../DestinationsCarousel/DestinationsCarousel'
import ExploreMore from '../ExploreMore/ExploreMore'
import HomeRecommend from '../HomeRecommend/HomeRecommend'
import './HomeBody.css'

function HomeBody() {
  return (
    <section className='homePageWrapper'>
        <AccommodationPromotions />
        <DestinationsCarousel />
        <ExploreMore />
        <HomeRecommend />
    </section>
  )
}

export default HomeBody