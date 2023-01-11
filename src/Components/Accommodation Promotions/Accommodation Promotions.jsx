import React from 'react'
import './Accommodation Promotions.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function AccommodationPromotions() {

    const properties = {
        indicators: true,
        prevArrow: <button className='bannerCarouselLeftArrow'><svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.616 1.616a1.25 1.25 0 0 1 1.859 1.666l-.091.102L7.767 12l8.617 8.616a1.25 1.25 0 0 1 .091 1.666l-.091.102a1.25 1.25 0 0 1-1.666.091l-.102-.091-9.5-9.5a1.25 1.25 0 0 1-.091-1.666l.091-.102 9.5-9.5z"></path></svg></button>,
        nextArrow: <button className='bannerCarouselRightArrow'><svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.384 1.616a1.25 1.25 0 0 0-1.859 1.666l.091.102L15.233 12l-8.617 8.616a1.25 1.25 0 0 0-.091 1.666l.091.102a1.25 1.25 0 0 0 1.666.091l.102-.091 9.5-9.5a1.25 1.25 0 0 0 .091-1.666l-.091-.102-9.5-9.5z"></path></svg></button>
    }

    const CarouselData = [
        {
            "img1" : "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673418386/Agoda/en-us_zjrgla.png",
            "img2" : "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673418211/Agoda/en-us_p0oey8.png"
        },
        {
            "img1" : "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673418186/Agoda/en-us_ymelb6.png",
            "img2" : "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673418163/Agoda/IN_Evergreen_20220725_spafnb.png"
        },
        {
            "img1" : "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673418135/Agoda/en-us_oewe5a.png",
            "img2" : "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673418386/Agoda/en-us_zjrgla.png"
        }
    ]

  return (
    <div className='apWrapper'>
        <div className='apT'>
            <div></div>
            <h3>Accommodation Promotions</h3>
            <section>
                <span className='apViewAll'>
                    <span>View all</span>
                    <span>{" >"}</span>    
                </span>
            </section>
        </div>
        <div className='aptBannerCarousel'>
       
            <Slide  {...properties}>
                {
                    CarouselData.map((val,index)=>{
                        return (
                            <div className="each-slide-effect centerCarousel">
                                <div className='bannerCarouselImage' style={{backgroundImage : `url(${val.img1})`}}></div>
                                <div className='bannerCarouselImage' style={{backgroundImage : `url(${val.img2})`}}></div>
                            </div>
                        )
                    })
                }
            </Slide>
        </div>
    </div>
  )
}

export default AccommodationPromotions