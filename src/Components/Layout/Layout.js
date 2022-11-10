import React from 'react'
import Footer from '../Footer/Footer'
import Routers from '../../Routers/Routers'
import Navbar from '../Navbar/Navbar'

const Layout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  )
}

export default Layout