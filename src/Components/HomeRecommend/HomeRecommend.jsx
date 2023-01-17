import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { getStars } from '../../Helper/Stars'
import './HomeRecommend.css'

function HomeRecommend() {

  const [tab, setTab] = useState(0)

  const homeRecommend = ["New Delhi and NCR", "Goa", "Mumbai", "Bangalore", "Hyderabad"]

  const mockData = [
    [
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673935415/Agoda/ef50f2b3de45d9bd9791fe9de4ae2f2d_ob8o7j.jpg", title: "Trendy Bed and Breakfast and Service Apartments", rating: "8.2", star: 5, city: "South Delhi, ", area: homeRecommend[0], currency: "INR", price: "2,541.29" },
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673956331/Agoda/9f744f8e2f9a0774ba0cf947bc2aa677_haurpi.jpg", title: "When In Gurgaon - Service Apartments Next to Artemis Hospital", rating: "8.3", star: 4.5 , city: "Gurgaon", area: homeRecommend[0], currency: "INR", price: "3,374.33" },
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673960989/Agoda/321883804_xbi4ag.jpg", title: "RED BRICK HOME BY EARTHAA ESCAPES", rating: "7.9", star: null, city: "South Delhi", area: homeRecommend[0], currency: "INR", price: "4,275" },
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673961084/Agoda/5c2d243281f051693398217106e17859_eo9uf7.jpg", title: "Richa's Home", rating: "8.9", star: 5, city: "Noida", area: homeRecommend[0], currency: "INR", price: "1,744.96" },
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673961168/Agoda/285488_14072217260020403624_bbtg2e.jpg", title: "Red Maple Bed and Breakfast", rating: "7.8", star: 3.5, city: "South Delhi", area: homeRecommend[0], currency: "INR", price: "2,541.29" },
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673961383/Agoda/789245_15091412160035963138_qfa3cq.jpg", title: "Perch Arbor Suites", rating: "8.3", star: 4, city: "Gurgaon", area: homeRecommend[0], currency: "INR", price: "2,340.94" },
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673961454/Agoda/1059847_15102415340037140058_sdh7bn.jpg", title: "Perch Arbor Golf Course", rating: "8.4", star: 4.5, city: "Gurgaon", area: homeRecommend[0], currency: "INR", price: "2,552.66" },
    ],
    [
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673952651/Agoda/b1d290be8e0a27df554b0cc247d5b846_hwqait.jpg", title: "Cabo Serai", rating: "9.1", star: null, city: "Cabo De Rama Fort, ", area: homeRecommend[1], currency: "INR", price: "17,011.48" },
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673961615/Agoda/406503330_ker4za.jpg", title: "EKO STAY Gold- AQUA BEACH Villa", rating: "8.5", star: null, city: "Candolim", area: homeRecommend[1], currency: "INR", price: "14,040" },
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673961724/Agoda/2817b6b1deea594f0f0b43ce09bb9642_nlftqf.jpg", title: "TSK Crystal Homestays", rating: "9.1", star: null, city: "Baga", area: homeRecommend[1], currency: "INR", price: "1,292.45" },
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673961803/Agoda/862246_17012014230050440342_xlrhtg.jpg", title: "Dwarka Eco Beach Resort", rating: "8.8", star: 3.5, city: "Agonda", area: homeRecommend[1], currency: "INR", price: "16,500" },
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673961882/Agoda/3cc7846f6a1a002c5c25921e1cae4dea_nqwhtk.jpg", title: "Verandah Goa", rating: "8.5", star: 3.5, city: "Anjuna", area: homeRecommend[1], currency: "INR", price: "2,844.52" },
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673962207/Agoda/86cb941bcb8352a24760d17c0d38b848_x4uzwm.jpg", title: "Dersy Beach Resort", rating: "8.4", star: 4, city: "Agonda", area: homeRecommend[1], currency: "INR", price: "4,999.49" },
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673962297/Agoda/377f37727c890d22606628d3f1537f3b_ni9u5e.jpg", title: "Royal Agonda", rating: "8.4", star: 3, city: "Agonda", area: homeRecommend[1], currency: "INR", price: "3,999.49" },
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673962577/Agoda/9788d0310fe34b7c8f553de00a965d25_s4gdce.jpg", title: "Secret Garden Agonda", rating: "8", star: 2, city: "Agonda", area: homeRecommend[1], currency: "INR", price: "1,636.39" }
    ],
    [
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673952856/Agoda/8634991_19070819200077965005_ekr1qt.jpg", title: "Campistaan Karjat", rating: "8.2", star: 3.5, city: "Shedung, ", area: homeRecommend[2], currency: "INR", price: "5,498.02" },
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673968037/Agoda/3e4f4312cebf4c5a9d099aafa367649c_dxakac.jpg", title: "Mayura Aureole Co-living", rating: "8.4", star: 2, city: "Goregaon", area: homeRecommend[2], currency: "INR", price: "873.17" },
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673968201/Agoda/406731095_dkm7og.jpg", title: "SHAH SOCIAL PARTY VILLA In Royal Palms Mumbai", rating: "7.3", star: 4, city: "Goregaon", area: homeRecommend[2], currency: "INR", price: "7,000" },
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673968302/Agoda/241863913_i3e0lo.jpg", title: "Villa 406, Dr Wade with Private Pool and Gazebo in Royal Palms Mumbai", rating: "7.3", star: 4, city: "Goregaon", area: homeRecommend[2], currency: "INR", price: "13,100" },
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673968408/Agoda/359877955_y3tuec.jpg", title: "MAXXVALUE - SERVICE APARTMENT MAROL", rating: "6.8", star: null, city: "Andheri East", area: homeRecommend[2], currency: "INR", price: "8,000" },
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673968491/Agoda/346582348_hv0jup.jpg", title: "Home2 Suites and Service Apartments, Mumbai Airport", rating: "8.1", star: null, city: "Vile Parle", area: homeRecommend[2], currency: "INR", price: "4,500" },
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673968578/Agoda/25796880_210623132800102839575_rx34hh.jpg", title: "The Byke Studio Pure Veg Apartment - Thane", rating: "7.2", star: null, city: "Thane", area: homeRecommend[2], currency: "INR", price: "2,936.5" }
    ],
    [
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673953096/Agoda/343909261_pcdaws.jpg", title: "LUHO (Luxury Homes)", rating: "9.4", star: null, city: "Kormangala", area: homeRecommend[3], currency: "INR", price: "4,050" },
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673968720/Agoda/325235595_hyg49z.jpg", title: "RK - Inn Premium Suites", rating: "8.2", star: 3, city: "Electronic City", area: homeRecommend[3], currency: "INR", price: "1,800" },
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673968850/Agoda/54a41806fbb3258e070e2bb17b4097d7_aozmds.jpg", title: "Dhruv Palace by JT Royal", rating: "8.7", star: 3, city: "Electronic City", area: homeRecommend[3], currency: "INR", price: "1,179.67" },
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673968975/Agoda/3dea80b690f8578bb285a556528026b7_udpt79.jpg", title: "Alchemy suites", rating: "8.5", star: 4, city: "Kormangala", area: homeRecommend[3], currency: "INR", price: "3,600" },
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673969067/Agoda/402693548_h8hpnt.jpg", title: "Pristine Inn Manyata", rating: "7.5", star: null, city: "Devanahalli", area: homeRecommend[3], currency: "INR", price: "1,000" },
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673969145/Agoda/173847802_aydfxh.jpg", title: "Stay@", rating: "8.4", star: 4.5, city: "Whitefield", area: homeRecommend[3], currency: "INR", price: "2,300" },
    ],
    [
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673953884/Agoda/391661672_iusvhq.jpg", title: "Bridge Serviced Apartment in Banjara Hills", rating: "8.5", star: null, city: "Banjara Hills", area: homeRecommend[4], currency: "INR", price: "18,000" },
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673969243/Agoda/415aebebad8a5850a384e8143a8b8737_vovpnh.jpg", title: "Beehive Hostel", rating: "8.7", star: 4.5, city: "Banjara Hills", area: homeRecommend[4], currency: "INR", price: "1,370" },
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673969386/Agoda/333877589_p3ubfz.jpg", title: "Homewood Suites ( Service Apartments)", rating: "7.2", star: null, city: "Gachibowli", area:  homeRecommend[4], currency: "INR", price: "1,599" },
      { img: "https://res.cloudinary.com/dpwq3oij5/image/upload/v1673969474/Agoda/200332615_gd674n.jpg", title: "Blueberry Service Apartments", rating: "7.5", star: 4.5, city: "Banjara Hills", area:  homeRecommend[4], currency: "INR", price: "9,075" }
    ]
  ]

  return (
    <main className='homeRecommendWrapper'>
      <div>
        <h3>Featured homes recommended for you</h3>
        <ul>
          {
            homeRecommend.map((val, index) @Surya S=> {
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
          <button>See more {`(${homeRecommend[tab]})`} properties</button>
        </div>
      </div>
    </main>
  )
}

export default HomeRecommend