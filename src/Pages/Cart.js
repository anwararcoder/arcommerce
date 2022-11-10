import React from 'react'
import { useSelector } from 'react-redux'
import BreadcrumbHeader from '../Components/Breadcrumb Header/BreadcrumbHeader'
import CartContainer from '../Components/Cart/CartContainer'
import TitlePage from '../Components/TitlePage/TitlePage'
const Cart = () => {

  const cart = useSelector((state) => state.cart)
  const bigCart = cart.cart;

  return (
    <TitlePage title={"Cart"}>
      <BreadcrumbHeader title={'Cart'} />
      <CartContainer cart={bigCart} />
    </TitlePage>
  )
}

export default Cart