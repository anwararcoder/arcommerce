import React from 'react'
import { Link } from 'react-router-dom'

const SubTotalCart = ({cart}) => {

    const getTotal = () => {
        let totalQuantity = 0
        let totalPrice = 0
        cart.forEach(item => {
          totalQuantity += item.quantity
          totalPrice += item.price * item.quantity
        })
        return {totalPrice, totalQuantity}
      }

  return (
    <div className='sub-total-cart'>
        <div className="sec-title">
            <h2>Cart Totals</h2>
        </div>
        <div className='subtotal'>
            <span>Subtotal For ( {getTotal().totalQuantity} Items )</span>
            <span>${getTotal().totalPrice}</span>
        </div>
        <div className='subtotal-btns'>
            {
                cart.length === 0 ? (<div></div>) : (<Link to="/checkout" className="btn btn-2">CheckOut</Link>)
            }
            <Link to="/shop" className="btn btn-3">Continue Shopping</Link>
        </div>
    </div>
  )
}

export default SubTotalCart