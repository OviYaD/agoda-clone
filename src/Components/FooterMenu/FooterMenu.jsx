import React from 'react'
import './FooterMenu.css'
import FooterMenuData from './Data.json'
import { Link } from 'react-router-dom'

function FooterMenu() {
  return (
    <footer className='footerMenuWrapper'>
        <div className='footerMenuListWrapper'>
            {
                FooterMenuData.map((val,index)=>{
                    return (
                        <div className='footerMenu' key={index}>
                            <h5>{val.heading}</h5>
                            <ul>
                                {
                                    val.menuList.map((val,index)=>{
                                        return(<li key={index}><Link className='footerMenuLink' to={val.link}>{val.menuTitle}</Link></li>)
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    </footer>
  )
}

export default FooterMenu