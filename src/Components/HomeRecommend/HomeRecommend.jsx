import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { getStars } from '../../Helper/Stars'
import './HomeRecommend.css'

function HomeRecommend() {

  const [tab, setTab] = useState(0)

  const homeRecommend = ["New Delhi and NCR", "Goa", "Mumbai", "Bangalore", "Hyderabad"]

  const mockData = [
    [
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673935415/Agoda/ef50f2b3de45d9bd9791fe9de4ae2f2d_ob8o7j.jpg", title: "Trendy Bed and Breakfast and Service Apartments", rating: "8.2", star: 5, city: "South Delhi, ", area: "New Delhi and NCR", currency: "INR", price: "2,541.29" },
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673956331/Agoda/9f744f8e2f9a0774ba0cf947bc2aa677_haurpi.jpg", title: "When In Gurgaon - Service Apartments Next to Artemis Hospital", rating: "8.3", star: 4.5 , city: "Gurgaon", area: "New Delhi and NCR", currency: "INR", price: "3,374.33" },
      { img: "", title: "", rating: "", star: "", city: "", area: "", currency: "", price: "" },
      { img: "", title: "", rating: "", star: "", city: "", area: "", currency: "", price: "" },
      { img: "", title: "", rating: "", star: "", city: "", area: "", currency: "", price: "" },
      { img: "", title: "", rating: "", star: "", city: "", area: "", currency: "", price: "" },
      { img: "", title: "", rating: "", star: "", city: "", area: "", currency: "", price: "" },
      { img: "", title: "", rating: "", star: "", city: "", area: "", currency: "", price: "" }
    ],
    [
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673952651/Agoda/b1d290be8e0a27df554b0cc247d5b846_hwqait.jpg", title: "Cabo Serai", rating: "9.1", star: 4.5, city: "Cabo De Rama Fort, ", area: "Goa", currency: "INR", price: "17,011.48" },
      { img: "", title: "", rating: "", star: "", city: "", area: "", currency: "", price: "" },
      { img: "", title: "", rating: "", star: "", city: "", area: "", currency: "", price: "" },
      { img: "", title: "", rating: "", star: "", city: "", area: "", currency: "", price: "" },
      { img: "", title: "", rating: "", star: "", city: "", area: "", currency: "", price: "" },
      { img: "", title: "", rating: "", star: "", city: "", area: "", currency: "", price: "" },
      { img: "", title: "", rating: "", star: "", city: "", area: "", currency: "", price: "" },
      { img: "", title: "", rating: "", star: "", city: "", area: "", currency: "", price: "" }
    ],
    [
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673952856/Agoda/8634991_19070819200077965005_ekr1qt.jpg", title: "Campistaan Karjat", rating: "8.2", star: 4.5, city: "Shedung, ", area: "Mumbai", currency: "INR", price: "5,498.02" },
      { img: "", title: "", rating: "", star: "", city: "", area: "", currency: "", price: "" },
      { img: "", title: "", rating: "", star: "", city: "", area: "", currency: "", price: "" },
      { img: "", title: "", rating: "", star: "", city: "", area: "", currency: "", price: "" },
      { img: "", title: "", rating: "", star: "", city: "", area: "", currency: "", price: "" },
      { img: "", title: "", rating: "", star: "", city: "", area: "", currency: "", price: "" }
    ],
    [
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673953096/Agoda/343909261_pcdaws.jpg", title: "LUHO (Luxury Homes)", rating: "9.4", star: null, city: "Kormangala", area: "Bangalore", currency: "INR", price: "4,050" },
      { img: "", title: "", rating: "", star: "", city: "", area: "", currency: "", price: "" },
      { img: "", title: "", rating: "", star: "", city: "", area: "", currency: "", price: "" },
      { img: "", title: "", rating: "", star: "", city: "", area: "", currency: "", price: "" },
      { img: "", title: "", rating: "", star: "", city: "", area: "", currency: "", price: "" },
      { img: "", title: "", rating: "", star: "", city: "", area: "", currency: "", price: "" },
      { img: "", title: "", rating: "", star: "", city: "", area: "", currency: "", price: "" }
    ],
    [
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673953884/Agoda/391661672_iusvhq.jpg", title: "Bridge Serviced Apartment in Banjara Hills", rating: "8.5", star: null, city: "Banjara Hills", area: "Hyderabad", currency: "INR", price: "18,000" },
      { img: "", title: "", rating: "", star: "", city: "", area: "", currency: "", price: "" },
      { img: "", title: "", rating: "", star: "", city: "", area: "", currency: "", price: "" },
      { img: "", title: "", rating: "", star: "", city: "", area: "", currency: "", price: "" }
    ]
  ]

  return (
    <main className='homeRecommendWrapper'>
      <div>
        <h3>Featured homes recommended for you</h3>
        <ul>
          {
            homeRecommend.map((val, index) => {
              return (
                <li key={index} className={tab === index ? 'homeActiveTab' : 'homeUnactiveTab'} onClick={() => setTab(index)}>
                  <div><span>{val}</span></div>
                </li>
              )
            })
          }
        </ul>
        <div>

          {
            mockData[tab].map((val, index) => {
              return (
                <div className='itemstyledRecommendedWrapper' key={index}>
                  <Link className='itemstyledRecommended'>
                    <div>
                      <div className='itemstyledDiv'>
                        <div style={{ position: "relative" }}>
                          <div className='itemstyledRating'>
                            <div style={{ display: "flex" }}>
                              <div className='itemstyledRatingWrapper'>
                                <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ transform: "scaleX(-1)" }}><path d="M1.499 2.553h20.32a2 2 0 0 1 2 2v14.983a2 2 0 0 1-2 2H4.829a2 2 0 0 1-2-2V8.333L.298 4.951a1.5 1.5 0 0 1 1.2-2.398z"></path></svg>
                                <div><span>{val.rating}</span></div>
                              </div>
                            </div>
                          </div>
                          <img className='itemstyledImage' src={val.img} alt='HomeRecommend' />
                        </div>
                      </div>
                      <div className='itemstyledDiv'>
                        <span className='itemstyledTitle'>{val.title}</span>
                      </div>
                      <div className='itemstyledDiv'>

                        <div className='itemstyledDetails'>
                          <div style={{ padding: "2px", display: "flex" }}>
                            {
                              (typeof val.star === 'number')? getStars(val.star).map((star, index) => {
                                return <Fragment key={index}>{star}</Fragment>
                              }):null
                            }
                          </div>
                        </div>

                        <div className='itemstyledDetails'>
                          <div className='locationLogoWrapper'>
                            <svg className='locationLogo' width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
                              <defs>
                                <path id="pin-line-filled_24px-a" d="M12.974 22.67a1.5 1.5 0 0 1-2.115-.166C5.96 16.767 3.5 12.46 3.5 9.5a8.5 8.5 0 0 1 17 0c0 2.96-2.46 7.267-7.36 13.004a1.5 1.5 0 0 1-.166.166zM12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                              </defs>
                              <use xlinkHref="#pin-line-filled_24px-a" />
                            </svg>
                          </div>
                        </div>

                        <div className='itemstyledDetails'>
                          <span className='stateNameItem'>{val.city}</span>
                        </div>

                        <div className='itemstyledDetails'>
                          <span className='stateNameItem'>{val.area}</span>
                        </div>

                      </div>

                      <div className='itemstyledDiv'></div>

                      <div className='itemstyledDiv'>
                        <div className='itemstyledDetails'>
                          <span className='priceDetailsItems'>{val.currency}</span>
                          <span className='priceDetailsItems'>{val.price}</span>
                        </div>
                      </div>

                    </div>
                  </Link>
                </div>
              )
            })
          }


        </div>
        <div id='homeRecommendButton'>
          <button>See more {`(${homeRecommend[0]})`} properties</button>
        </div>
      </div>
    </main>
  )
}

export default HomeRecommend