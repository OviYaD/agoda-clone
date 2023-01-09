import React, { useEffect, useReducer } from 'react'
import axios from 'axios';
import { reducerFunction } from '../Helper/Reducer'
import Navbar from '../Components/Navbar/Navbar'
import '../Asset/Styles/Profile.css'
import AccountNavbar from '../Components/AccountNavbar/AccountNavbar'
import FooterMenu from '../Components/FooterMenu/FooterMenu'
import Footer from '../Components/Footer/Footer'
import UserDetails from '../Components/UserDetails/UserDetails'

function Profile() {

  const INITIAL_STATE = {
    loading: false,
    data: {},
    error: false
  }

  const [state, dispatch] = useReducer(reducerFunction, INITIAL_STATE)


  useEffect(() => {
    dispatch({ type: "FETCH_START" })
    axios.get(`${process.env.REACT_APP_API_KEY}/profile`,{ headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
      .then((res) => {
        console.log(res.data)
        dispatch({ type: "FETCH_SUCCESS", payload: res.data })
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR", payload: err.response.data })
        if(!err.response.data.status){
          localStorage.removeItem("token");
          window.location.reload();
        }
      })
  }, [])

  return (
    <main className='profileComponent'>
      <Navbar showProfile={true} />
      <main className='profilePageWrapper'>
        <section className='leftPanel'>
          <AccountNavbar />
          <div className='leftPanelUnderLine'></div>
        </section>
        {
          state.data.data &&
          <section className='rightPanel'>
            <UserDetails data={state.data.data}/>
          </section>
        }
      </main>
      <FooterMenu />
      <Footer />
    </main>
  )
}

export default Profile