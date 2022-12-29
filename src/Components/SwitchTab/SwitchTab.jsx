import React from 'react'
import './SwitchTab.css'

function SwitchTab({state,setState}) {
    return (
        <div className='inputField'>
            <div className='switchTab'>
                <ul>
                    <li 
                        className={(state)?"selectedTab":"unselectedTab"}
                        onClick={()=>setState(true)}>EMAIL</li>
                    <li 
                        className={(!state)?"selectedTab":"unselectedTab"}
                        onClick={()=>setState(false)}>MOBILE</li>
                </ul>
            </div>
        </div>
    )
}

export default SwitchTab