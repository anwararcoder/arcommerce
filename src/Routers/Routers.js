import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Shop from '../Pages/Shop'
import ProductDetails from '../Pages/ProductDetails'
import Cart from '../Pages/Cart'
import CheckOut from '../Pages/CheckOut'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Dashboard from '../Pages/Dashboard'
import AddProduct from '../Pages/AddProduct'
import EditProduct from '../Pages/EditProduct'

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="shop" element={ <Shop /> } />
        <Route path="shop/:id" element={ <ProductDetails /> } />
        <Route path="cart" element={ <Cart /> } />
        <Route path="checkout" element={ <CheckOut /> } />
        <Route path="login" element={ <Login /> } />
        <Route path="signup" element={ <Signup /> } />
        <Route path="dashboard" element={ <Dashboard /> } />
        <Route path="addproduct" element={ <AddProduct /> } />
        <Route path="editproduct/:id" element={ <EditProduct /> } />
    </Routes>
  )
}

export default Routers