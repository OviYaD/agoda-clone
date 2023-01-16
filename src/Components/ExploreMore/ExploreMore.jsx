import React from 'react'
import { Link } from 'react-router-dom'
import './ExploreMore.css'

function ExploreMore() {


    const ExploreMoreDetails = [
        {
            img : "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673592857/Agoda/entire-apartment_koqjn3.jpg",
            title : "Apartments",
            properties : "156,786 properties"
        },
        {
            img : "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673593696/Agoda/entire-house_zxe4c1.jpg",
            title : "Vacation Rentals",
            properties : "517,703 properties"
        },
        {
            img : "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673593715/Agoda/entire-villa_rkndiq.jpg",
            title : "Private Villas",
            properties : "181,167 properties"
        },
        {
            img : "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673593732/Agoda/entire-bungalow_ih8woe.jpg",
            title : "Bungalows",
            properties : "8,801 properties"
        },
    ]

  return (
    <section className='exploreMoreWrapper'>
        <div className='exploreMoreTitle'>
            <h3>Explore more travel vacation rentals</h3>
        </div>
        <div className='exploreMoreShowcase'>
    
            {
                ExploreMoreDetails.map((val,index)=>{
                    return (
                        <div key={index}>
                            <Link className='exploreMoreDiv'>
                                <div>
                                    <img src={val.img} alt='img'/>
                                    <div className='exploreMoreDetails'>
                                        <span className='exploreMoreDivTitle'>{val.title}</span>
                                        <span className='exploreMoreDivDetails'>{val.properties}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default ExploreMore