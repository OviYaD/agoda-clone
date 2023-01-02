import React from 'react'
import './Footer.css'

function Footer() {

  const data = [
    "0px -90px",
    "-144px -148px",
    "0px -148px",
    "-288px -148px",
    "-144px -90px",
    "-288px -90px"
  ]

  return (
    <footer className='copyrightSectionWrapper'>
      <div>
        <p className='copyrightTag'>All material herein © 2005–2022 Agoda Company Pte. Ltd. All Rights Reserved.</p>
        <p className='copyrightTag'>Agoda is part of Booking Holdings Inc., the world leader in online travel & related services.</p>
        <div className='companyCopyright'>
          <div>
            {
              data.map((val,index)=>{
                return <i key={index} className='copyrightCompanyLogo' style={{backgroundPosition : val}}></i>
              })
            }
          </div>
        </div>
        <small>sg-pc-6f-website-cronos-user-7747f69d4b-fzl7z</small>
      </div>
    </footer>
  )
}

export default Footer