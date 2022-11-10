import { configureStore } from '@reduxjs/toolkit'
import ProductsSlice from '../Slices/ProductsSlice'
import ServicesSlice from '../Slices/ServicesSlice'
import cartSlice from '../Slices/CartSlice'
import ProductsDetailsSlice from '../Slices/ProductsDetailsSlice'

export const store = configureStore({
    reducer: {
      products: ProductsSlice,
      productId: ProductsDetailsSlice,
      services: ServicesSlice,
      cart: cartSlice
    }
  })