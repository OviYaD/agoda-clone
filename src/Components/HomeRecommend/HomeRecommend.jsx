import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { getStars } from '../../Helper/Stars'
import './HomeRecommend.css'

function HomeRecommend() {

  const [tab, setTab] = useState(0)

  const homeRecommend = ["New Delhi and NCR","Goa","Mumbai","Bangalore","Hyderabad"]

  // const mockData = [
  //   {

  //   }
  // ]

  return (
    <main className='homeRecommendWrapper'>
      <div>
        <h3>Featured homes recommended for you</h3>
        <ul>
          {
            homeRecommend.map((val,index)=>{
              return (
                <li key={index} className={tab===index?'homeActiveTab':'homeUnactiveTab'} onClick={()=> setTab(index)}>
                  <div><span>{val}</span></div>
                </li>
              )
            })
          }
        </ul>
        <div>

          <div className='itemstyledRecommendedWrapper'>
            <Link className='itemstyledRecommended'>
              <div>
                <div className='itemstyledDiv'>
                  <div style={{position : "relative"}}>
                    <div className='itemstyledRating'>
                      <div style={{display : "flex"}}>
                        <div className='itemstyledRatingWrapper'>
                          <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{transform: "scaleX(-1)"}}><path d="M1.499 2.553h20.32a2 2 0 0 1 2 2v14.983a2 2 0 0 1-2 2H4.829a2 2 0 0 1-2-2V8.333L.298 4.951a1.5 1.5 0 0 1 1.2-2.398z"></path></svg>
                          <div><span>7.9</span></div>
                        </div>
                      </div>
                    </div>
                    <img className='itemstyledImage' src='https://res.cloudinary.com/dpwq3oij5/image/upload/v1673935415/Agoda/ef50f2b3de45d9bd9791fe9de4ae2f2d_ob8o7j.jpg' alt='HomeRecommend'/>
                  </div>
                </div>
                <div className='itemstyledDiv'>
                  <span className='itemstyledTitle'>Square by Noida Studios</span>
                </div>
                <div className='itemstyledDiv'>

                  <div className='itemstyledDetails'>
                    <div style={{padding : "2px", display: "flex"}}>
                      {
                        getStars(5).map((star,index) => {
                          return <Fragment key={index}>{star}</Fragment>
                        })
                      }
                    </div>
                  </div>

                  <div className='itemstyledDetails'>
                    <div className='locationLogoWrapper'>
                      <svg className='locationLogo' width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
                        <defs>
                          <path id="pin-line-filled_24px-a" d="M12.974 22.67a1.5 1.5 0 0 1-2.115-.166C5.96 16.767 3.5 12.46 3.5 9.5a8.5 8.5 0 0 1 17 0c0 2.96-2.46 7.267-7.36 13.004a1.5 1.5 0 0 1-.166.166zM12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                        </defs>
                        <use xlinkHref="#pin-line-filled_24px-a"/>
                      </svg>
                    </div>
                  </div> 

                  <div className='itemstyledDetails'>
                    <span className='stateNameItem'>Noida, </span>
                  </div>

                  <div className='itemstyledDetails'>
                    <span className='stateNameItem'>New Delhi and NCR</span>
                  </div>

                </div>

                <div className='itemstyledDiv'></div>

                <div className='itemstyledDiv'>
                  <div className='itemstyledDetails'>
                    <span className='priceDetailsItems'>INR</span>
                    <span className='priceDetailsItems'>1,994.29</span>
                  </div>
                </div>

              </div>
            </Link>
          </div>

        </div>
        <div id='homeRecommendButton'>
          <button>See more (New Delhi and NCR) properties</button>
        </div>
      </div>
    </main>
  )
}

export default HomeRecommend