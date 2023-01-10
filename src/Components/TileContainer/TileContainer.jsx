import React from 'react'
import {CiSearch} from 'react-icons/ci'
import {MdOutlineEditCalendar} from 'react-icons/md'
import {HiOutlineUsers} from 'react-icons/hi'
import {IoIosArrowDown} from 'react-icons/io'
import './TileContainer.css'

function TileContainer() {
    return (
        <section className='TileContainer'>
            <div></div>
            <section>
                <div className='TileContainerWrapper'>
                    <div></div>
                    <section className='TileMenu'>
                        <ul>

                            <li>
                                <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="TileMenuActive"><path fillRule="evenodd" d="M7 2.18a1 1 0 0 1 .164.014l10 1.667a1 1 0 0 1 .836.986V11L21 11a1 1 0 0 1 1 1v10h-8v-5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v5H6V3.18a1 1 0 0 1 1-1zM5 10v12H2V11a1 1 0 0 1 1-1h2zm16 7h-3v1h3v-1zm0-3h-3v1h3v-1zm-9.5-4H9v2.5h1.01V11h1.49v-1zm4 0H13v2.5h1.01V11h1.49v-1zm-4-4H9v2.5h1.01V7h1.49V6zm4 0H13v2.5h1.01V7h1.49V6z"></path></svg>
                                <div className='TileMenuList TileMenuListActive'>
                                    <h6>Hotels & Homes</h6>
                                    <div></div>
                                </div>
                            </li>

                            <li>
                                <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="TileMenuUnActive"><path fillRule="evenodd" d="M12 2c5.523 0 10 4.477 10 10 0 5.43-4.327 9.848-9.72 9.996L12 22a10 10 0 0 1-9-5.637l-.08-.169A9.963 9.963 0 0 1 2 12C2 6.477 6.477 2 12 2zm-.5 12h-3v4h3v-4zm4 0h-3v4h3v-4zm-4-5c-1.624.274-2.84 1.632-2.985 3.272l-.012.19L8.5 13h3V9zm1 0v4h3v-.508l-.01-.193c-.129-1.593-1.265-2.917-2.796-3.261L12.5 9zM12 3.5a8.5 8.5 0 0 0-8.485 9.014L12 4.5l8.485 8.013A8.5 8.5 0 0 0 12 3.5z"></path></svg>
                                <div className='TileMenuList TileMenuListUnActive'>
                                    <h6>Private stays</h6>
                                    {/* <div></div> */}
                                </div>
                            </li>

                            <li>
                                <div className='TileContainerLabel'>
                                    <p>Bundle & Save</p>
                                </div>
                                <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="TileMenuUnActive"><path fillRule="evenodd" d="M10 13v9.023H2V14a1 1 0 0 1 1-1h7zm11.5-3a.5.5 0 0 1 .5.5V22H11V10.5a.5.5 0 0 1 .5-.5h10zM8 18H4v1h4v-1zm8-2h-2v2h1.01v-1H16v-1zm3 0h-2v2h1.01v-1H19v-1zM8 15H4v.954h4V15zm8-2h-2v2h1.01v-1H16v-1zm3 0h-2v2h1.01v-1H19v-1zM8.127 1.301a2 2 0 0 1 1.61.106l4.94 2.576 3.726-1.357a1.19 1.19 0 1 1 .814 2.236L8.473 8.772a2 2 0 0 1-2.25-.635L4 5.337l.485-.177a2 2 0 0 1 1.868.267l1.442 1.06L10.95 5.34 7.085 1.681z"></path></svg>
                                <div className='TileMenuList TileMenuListUnActive'>
                                    <h6>Flight + Hotel</h6>
                                    {/* <div></div> */}
                                </div>
                            </li>


                            <li>
                                <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="TileMenuUnActive"><path fillRule="evenodd" d="M4.775 4.604L3 6.379l8.408 4.02-3.827 3.826-2.15-.704a1.034 1.034 0 0 0-1.053.252l-1.28 1.281 3.557 2.29 2.291 3.56 1.281-1.283c.276-.275.373-.682.252-1.052l-.704-2.15 3.826-3.826L17.62 21l1.776-1.776c.26-.258.362-.636.27-.99l-2.411-9.298 3.29-3.29a1.551 1.551 0 0 0-2.193-2.193l-3.29 3.29-9.297-2.41a1.035 1.035 0 0 0-.99.27"></path></svg>
                                <div className='TileMenuList TileMenuListUnActive'>
                                    <h6>Flights</h6>
                                    {/* <div></div> */}
                                </div>
                            </li>


                            <li>
                                <div className='TileContainerLabel'>
                                    <p>New!</p>
                                </div>
                                <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="TileMenuUnActive"><path fillRule="evenodd" clipRule="evenodd" d="M9 1.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V3H4a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3h-2v2l-.007.117A1 1 0 0 1 19 20H5l-.117-.007A1 1 0 0 1 4 19V7h16v3h2V5a2 2 0 0 0-2-2h-3V1.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V3H9V1.5zm10 10a.5.5 0 0 0-1 0V13h-1.5a.5.5 0 0 0 0 1H18v1.5a.5.5 0 0 0 .5.5l.09-.008A.5.5 0 0 0 19 15.5V14h1.5l.09-.008A.5.5 0 0 0 20.5 13H19v-1.5zM9.5 9.125a.875.875 0 1 0 0 1.75h3.173l-2.477 5.78a.875.875 0 0 0 1.608.69l3-7A.875.875 0 0 0 14 9.125H9.5z" fill="#2A2A2E"></path></svg>
                                <div className='TileMenuList TileMenuListUnActive'>
                                    <h6>Long stays</h6>
                                    {/* <div></div> */}
                                </div>
                            </li>

                            <li>
                                <div className='TileContainerLabel'>
                                    <p>New!</p>
                                </div>
                                <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="TileMenuUnActive"><path d="M12 10.5c.54 0 1.013.352 1.173.86l.031.119L15.187 21H16a1 1 0 0 1 1 1v1H7v-1a1 1 0 0 1 1-1h.812l1.984-9.521A1.23 1.23 0 0 1 12 10.5zM13.5 1a.5.5 0 0 1 .5.5v.723A8.993 8.993 0 0 1 18.71 5H21.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-.723A9.03 9.03 0 0 1 21 11c0 1.052-.18 2.062-.512 3H21.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.467-.321 9.008 9.008 0 0 1-2.21 1.471l-.21-1.01A8.03 8.03 0 0 0 18 16.29L18 15.28l-3.423-2.106-.28-1.348 3.82 2.353A.499.499 0 0 1 18.5 14l.918.001c.375-.927.582-1.94.582-3.001 0-.69-.087-1.36-.252-2H18.5a.5.5 0 0 1-.5-.5v-.606l-4.168 2.565a2.236 2.236 0 0 0-.779-.695L18 6.72l.001-1.01a7.999 7.999 0 0 0-4-2.458L14 4.5a.5.5 0 0 1-.5.5h-1v4.557a2.231 2.231 0 0 0-1 0V5h-1a.5.5 0 0 1-.5-.5V3.252a7.999 7.999 0 0 0-4 2.457V6.72l4.947 3.044c-.31.167-.578.405-.78.696L6 7.895V8.5a.5.5 0 0 1-.5.5H4.252A8.015 8.015 0 0 0 4 11c0 1.061.207 2.074.582 3.001L5.5 14c.153 0 .29.07.382.178l3.82-2.351-.281 1.347L6 15.279v1.012a8.03 8.03 0 0 0 2.387 1.849l-.21 1.01a9.014 9.014 0 0 1-2.21-1.472A.498.498 0 0 1 5.5 18h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h1.012A8.985 8.985 0 0 1 3 11c0-.687.077-1.357.223-2H2.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h2.791a8.993 8.993 0 0 1 4.71-2.777L10 1.5a.5.5 0 0 1 .5-.5h3z"></path></svg>                               
                                 <div className='TileMenuList TileMenuListUnActive'>
                                    <h6>Things to do</h6>
                                    {/* <div></div> */}
                                </div>
                            </li>

                        </ul>
                        <div>
                            <div className='TabContent'>
                                <div className='SearchboxWrapper'>
                                    <div className='searchboxFunnel'>
                                        <button className='funnelSwitcherPrimary'>Overnight Stays</button>
                                        <button className='funnelSwitcherSecondary'>Day Use Stays</button>
                                    </div>
                                    <div className='IconBox'>
                                        <div className='IconBoxWrapper'>
                                            <CiSearch className='searchIcon'/>
                                            <div>
                                                <input />
                                            </div>
                                        </div>
                                    </div>
                                    <section className='calendarWrapper'>
                                    <div className='IconBoxFromTo'>
                                        <div className='IconBoxFromToWrapper'>
                                            <MdOutlineEditCalendar className='searchIcon' />
                                            <div>
                                                <div className='date'>27 Feb 2023</div>
                                                <div className='day'>Monday</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='IconBoxFromTo'>
                                        <div className='IconBoxFromToWrapper'>
                                            <MdOutlineEditCalendar className='searchIcon' />
                                            <div>
                                                <div className='date'>27 Feb 2023</div>
                                                <div className='day'>Monday</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='occupancy'>
                                        <div className='IconBoxFromToWrapper'>
                                            <HiOutlineUsers className='searchIcon' />
                                            <div>
                                                <div className='date'>5 adults</div>
                                                <div className='day'>5 rooms</div>
                                            </div>
                                        </div>
                                        <div>
                                            <IoIosArrowDown className='downArrow' />
                                        </div>
                                    </div>

                                    </section>
                                </div>
                                <div></div>
                                <div className='addFight'>
                                    <div className='BundleSaveTag'>
                                        <p>Bundle & Save</p>
                                    </div>
                                    <div className='addFightBtn'>
                                        <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="plusBtn"><path d="M13.506 13.672h5.03c.553 0 1.456-.569 1.456-1.52 0-.95-.903-1.48-1.456-1.48h-5.03l-.017-5.21c0-.553-.518-1.457-1.489-1.457-.97 0-1.51.904-1.51 1.456l.016 5.21h-5.11c-.552 0-1.378.549-1.378 1.482 0 .932.826 1.519 1.379 1.519h5.109l-.012 5.013c0 .553.647 1.324 1.51 1.324.864 0 1.49-.771 1.49-1.324l.012-5.013z"></path></svg>
                                        <span>Add a flight</span>
                                        <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fightBtn"><path d="M13.639 6.772l3.386-3.386a4.5 4.5 0 0 1 1.77-1.091l1.68-.555a1.86 1.86 0 0 1 2.348 2.355l-.558 1.676a4.5 4.5 0 0 1-1.088 1.76l-3.404 3.404 2.155 9.77a1.3 1.3 0 0 1-.35 1.199l-.673.673a1.3 1.3 0 0 1-2.055-.286l-3.834-6.868-3.676 3.072.839 2.626a1 1 0 0 1-.235 1l-.98 1.012a1 1 0 0 1-1.57-.172l-2.226-3.622-3.63-2.228a1 1 0 0 1-.195-1.548l.986-1.017a1 1 0 0 1 1.028-.254l2.779.907 3.017-3.657L2.31 7.745a1.3 1.3 0 0 1-.288-2.056l.672-.673a1.3 1.3 0 0 1 1.194-.351l9.752 2.107z"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <div className='searchBtnWrapper'>
                                <button>Search</button>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </section>
    )
}

export default TileContainer