import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { addToCart } from '../../Redux Toolkit/Slices/CartSlice'

const ProductCard = ({product}) => {
    const dispatch = useDispatch()

    const addToBoxCart = () => {
        dispatch(
            addToCart({
                id: product.id,
                imgUrl: product.imgUrl,
                productName: product.productName,
                category: product.category,
                price: product.price
            })
        )
        toast.success('Product Added Successfully To Cart');
    }

  return (
    <Fragment>
        <div className='col-md-6 col-lg-3'>
            <div className='product-card'>
                <div className='img-box'>
                    <Link to={`/shop/${product.id}`}><img className="img-fluid" src={product.imgUrl} alt={product.productName} /></Link>
                </div>
                <div className="text-box">
                    <Link to={`/shop/${product.id}`}><h4>{product.productName}</h4></Link>
                    <p>{product.category}</p>
                    <div className="more-box">
                        <span className='price'>${product.price}</span>
                        <button onClick={addToBoxCart} className='click'>+</button>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
    
  )
}

export default ProductCard