import React from 'react'
import FormLogin from '../Components/Login/FormLogin'
import TitlePage from '../Components/TitlePage/TitlePage'
const Login = () => {
  return (
    <TitlePage title={"Login"}>
      <section className='login-page'>
        <div className='container'>
          <div className="sec-title text-center">
                <h2>Login</h2>
          </div>
          <FormLogin />
        </div>
      </section>
    </TitlePage>
  )
}

export default Login