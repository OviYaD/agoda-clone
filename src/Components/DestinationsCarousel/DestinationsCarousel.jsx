import React from 'react'
import { Link } from 'react-router-dom'
import { Slide } from 'react-slideshow-image';
import { properties } from '../Accommodation Promotions/Accommodation Promotions'
import './DestinationsCarousel.css'

function DestinationsCarousel() {

  const CarouselData = [
    {
      Carousel: [
        {
          link: "/",
          img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673588162/Agoda/1_14552_02_cq7pfn.jpg",
          city: "New Delhi and NCR",
          accommodations: "10,379 accommodations"
        },
        {
          link: "/",
          img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673588207/Agoda/1_11304_02_r2dcxu.jpg",
          city: "Goa",
          accommodations: "8,345 accommodations"
        },
        {
          link: "/",
          img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673588243/Agoda/1_16850_02_x565fm.jpg",
          city: "Mumbai",
          accommodations: "3,589 accommodations"
        },
        {
          link: "/",
          img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673588282/Agoda/1_4923_02_zhdh0x.jpg",
          city: "Bangalore",
          accommodations: "4,607 accommodations"
        },
        {
          link: "/",
          img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673588315/Agoda/1_8801_02_znpxa3.jpg",
          city: "Hyderabad",
          accommodations: "2,157 accommodations"
        },
        {
          link: "/",
          img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673588361/Agoda/1_17269_02_qyqkxd.jpg",
          city: "Chennai",
          accommodations: "2,455 accommodations"
        },
      ]
    },
    {
      Carousel: [
        {
          link: "/",
          img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673588409/Agoda/1_8845_02_ln0q6s.jpg",
          city: "Jaipur",
          accommodations: "2,635 accommodations"
        },
        {
          link: "/",
          img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673588446/Agoda/1_16854_02_uep2ae.jpg",
          city: "Pune",
          accommodations: "1,988 accommodations"
        },
        {
          link: "/",
          img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673588482/Agoda/1_6241_02_dxkpun.jpg",
          city: "Kolkata",
          accommodations: "2,506 accommodations"
        },
        {
          link: "/",
          img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673588521/Agoda/1_12565_02_eimsep.jpg",
          city: "Pondicherry",
          accommodations: "1,256 accommodations"
        },
        {
          link: "/",
          img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673588565/Agoda/1_3667_02_ewwdwc.jpg",
          city: "Udaipur",
          accommodations: "1,704 accommodations"
        },
        {
          link: "/",
          img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673588361/Agoda/1_17269_02_qyqkxd.jpg",
          city: "Chennai",
          accommodations: "2,455 accommodations"
        }
      ]
    },
  ]

  return (
    <section className='destinationsCarouselWrapper'>
      <span className='dcTitle'>Top destinations in India</span>
      <div className='destinationsCarousel'>
        <Slide {...properties}>
          {
            CarouselData.map((val, index) => {
              return (
                <div className='destinationsCarousel-1' key={index}>
                  {
                    val.Carousel.map((val, index) => {
                      return (
                        <div className='individualdestinationsCarouselWrapper' key={index}>
                          <Link className='individualdestinationsCarousel' to={val.link}>
                            <img src={val.img} alt='img' />
                            <span className='TopDestinationItemCity'>{val.city}</span>
                            <span className='accommodationsDestinationItemCity'>{val.accommodations}</span>
                          </Link>
                        </div>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </Slide>
      </div>
    </section>
  )
}

export default DestinationsCarousel