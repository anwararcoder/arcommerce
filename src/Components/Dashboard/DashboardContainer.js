import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchProducts } from '../../Redux Toolkit/Slices/ProductsSlice';

const DashboardContainer = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products);
    
    useEffect(() => {
        dispatch(fetchProducts())
    }, []);

    const deleteProduct = async (id) => {
        fetch(`http://localhost:9000/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
              }
        })
        .then( (res) => res.json() )
        .then( (data) => {
            dispatch(fetchProducts())
            toast.success("Item Delete Successfully")
        } )
    }
    
    return (
        <section className="py-100-70">
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className="sec-title">
                            <h2>All Products</h2>
                            <Link to={`/addproduct`} className="btn btn-2 mt-3">Add Product</Link>
                        </div>
                        <div className="cart-content">
                            {
                                products?.map((product, index) => {
                                    return <div className="item" key={index}>
                                        <div className="part image">
                                            <img src={product.imgUrl} alt={product.productName} />
                                            <div className="part-content">
                                                <h5>{product.productName}</h5>
                                            </div>
                                        </div>
                                        <div className="part price">
                                            <span>${product.price}</span>
                                        </div>
                                        <div className="part price">
                                            <span>avgrating: {product.avgrating}</span>
                                        </div>
                                        <div className="part price">
                                            <span>{product.category}</span>
                                        </div>
                                        <div className="part crud-btns">
                                            <div>
                                                {/* <button className="btn btn-2">Add</button> */}
                                                <button onClick={() => deleteProduct(product.id)} className="btn btn-3">Delete</button>
                                                {/* <button onClick={() => dispatch(deleteItemProducts(product.id))} className="btn btn-3">Delete</button> */}
                                                <button className="btn btn-2">Edit</button>
                                                <Link to={`/shop/${product.id}`} className="btn btn-3">View</Link>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DashboardContainer