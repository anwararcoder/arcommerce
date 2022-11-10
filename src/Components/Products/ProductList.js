import React, { Fragment } from 'react'
import ProductCard from './ProductCard'

const ProductList = ({products}) => {

  return (
    <Fragment>
        {
            products.map( (product, index) => {
                return <ProductCard key={index} product={product} />
            })
        }
    </Fragment>
  )
}

export default ProductList