import React from 'react'
import './BronzeMedals.css'

function BronzeMedals() {
    return (
        <div className='vipTag'>
            <div className='vipHead'>
                <img alt="star_with_vip" src="https://cdn6.agoda.net/images/LOY-5758/default/VIP.svg" />
            </div>
            <div className='accountLevel'>
                <span>Bronze</span>
                <div className='slash1'></div>
                <div className='slash2'></div>
            </div>
        </div>
    )
}

export default BronzeMedals