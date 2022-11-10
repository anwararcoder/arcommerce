import React from 'react'
import CartItem from './CartItem'
import SubTotalCart from './SubTotalCart';

const CartContainer = ({ cart }) => {
    return (
        <section className='cart-container py-100-70'>
            <div className='container'>
                <div className='row'>
                    <div className="col-lg-8">
                        <div className="sec-title">
                            <h2>Cart</h2>
                        </div>
                        {
                            cart.length === 0 ? (
                                <h2 className="no-products">No Items Added To The Cart!!</h2>
                            ) : (
                                <div className='cart-content'>
                                    {/* <CartItem /> */}
                                    {cart?.map((item) => (
                                        <CartItem
                                            key={item.id}
                                            id={item.id}
                                            imgUrl={item.imgUrl}
                                            productName={item.productName}
                                            price={item.price}
                                            quantity={item.quantity}
                                        />
                                    ))}
                                </div>
                            )
                        }
                    </div>
                    <div className="col-lg-4">
                        <SubTotalCart cart={cart} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartContainer