import React, { lazy, Suspense, useState } from 'react'
import Loader from '../Components/Loader/Loader'
import Navbar from '../Components/Navbar/Navbar'
import '../Asset/Styles/SignupLogin.css'
import FooterMenu from '../Components/FooterMenu/FooterMenu'
import Footer from '../Components/Footer/Footer'


function SignupLogin() {

  const LoginComponent = lazy(()=>import('../Components/Login/Login'))

  const SignupComponet = lazy(()=> import('../Components/Signup/Signup'))

  const [loginPage, setLoginPage] = useState(true)

  return (
    <div>
        <Navbar setLoginPage={setLoginPage} />
        <section className='SignupLoginWrapper'>
          <main>
            <div>
              <div className='formWrapper'>
                <Suspense fallback={<Loader />}>
                  {loginPage?<LoginComponent setLoginPage={setLoginPage} />:<SignupComponet setLoginPage={setLoginPage}/>}
                </Suspense>
              </div>
            </div>
          </main>
        </section>
        <FooterMenu />
        <Footer />
    </div>
  )
}

export default SignupLogin