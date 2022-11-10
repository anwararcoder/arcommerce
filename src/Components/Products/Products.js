import React from 'react'
import ProductList from './ProductList'

const Products = ({products, title}) => {
  return (
    <section className="products">
        <div className="container">
            <div className="sec-title">
                <h2>{title}</h2>
            </div>
            <div className="row">
                <ProductList products={products} />
            </div>
        </div>
    </section>
  )
}

export default Products