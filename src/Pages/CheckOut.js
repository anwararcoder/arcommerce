import React, { useEffect } from 'react'
import CheckOutContainer from '../Components/CheckOut/CheckOutContainer'
import BreadcrumbHeader from '../Components/Breadcrumb Header/BreadcrumbHeader'
import TitlePage from '../Components/TitlePage/TitlePage'
const CheckOut = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, []);
  return (
    <TitlePage title={"CheckOut"}>
      <BreadcrumbHeader title={'CheckOut'} />
      <CheckOutContainer />
    </TitlePage>
  )
}

export default CheckOut