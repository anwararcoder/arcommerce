import React from 'react'
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeItem } from '../../Redux Toolkit/Slices/CartSlice';

const CartItem = ({id ,imgUrl, productName, price, quantity}) => {

    const dispatch = useDispatch();

    return (
        <div className='item'>
            <div className='part exit'>
                <button onClick={() => dispatch(removeItem(id))} className='exit-btn'><i className="fa-solid fa-xmark"></i></button>
            </div>
            <div className='part image'>
                <img src={imgUrl} alt={productName} />
                <div className='part-content'>
                    <h5>{productName}</h5>
                </div>
            </div>
            <div className='part price'>
                <span>${price}</span>
            </div>
            <div className='part quantity'>
                <div>
                    <button onClick={() => dispatch(incrementQuantity(id))} className='exit-btn'><i className="fa-solid fa-plus"></i></button>
                    <span>{quantity}</span>
                    <button onClick={() => dispatch(decrementQuantity(id))} className='exit-btn'><i className="fa-solid fa-minus"></i></button>
                </div>
            </div>
            <div className='part total-price'>
                <span>${quantity * price}</span>
            </div>
        </div>
    )
}

export default CartItem