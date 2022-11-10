import React from 'react'
import { useSelector } from 'react-redux';

const TotalCost = () => {

    const cart = useSelector((state) => state.cart)
    const bigCart = cart.cart;

    const getTotal = () => {
        let totalQuantity = 0
        let totalPrice = 0
        bigCart.forEach(item => {
          totalQuantity += item.quantity
          totalPrice += item.price * item.quantity
        })
        return {totalPrice, totalQuantity}
      }

  return (
    <div className='total-cost'>
        <div className='content-text'>
            <span>Total Qty:</span>
            <span>{getTotal().totalQuantity} items</span>
        </div>
        <div className='content-text'>
            <span>SubTotal:</span>
            <span>${getTotal().totalPrice}</span>
        </div>
        <div className='content-text'>
            <span>Shipping:</span>
            <span>$0</span>
        </div>
        <div className='content-text-total-cost'>
            <span>Total Cost</span>
            <span>${getTotal().totalPrice}</span>
        </div>
        <button className="btn btn-2">Place an Order</button>
    </div>
  )
}

export default TotalCost