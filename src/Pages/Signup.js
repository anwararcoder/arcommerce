import React, { useEffect } from 'react'
import FormSignup from '../Components/Signup/FormSignup'
import TitlePage from '../Components/TitlePage/TitlePage'
const Signup = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  }, []);

  return (
    <TitlePage title={"Signup"}>
      <section className='login-page signup-page'>
        <div className='container'>
          <div className="sec-title text-center">
                <h2>SignUp</h2>
          </div>
          <FormSignup />
        </div>
      </section>
    </TitlePage>
  )
}

export default Signup