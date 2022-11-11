import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import BreadcrumbHeader from '../Components/Breadcrumb Header/BreadcrumbHeader';
import TitlePage from '../Components/TitlePage/TitlePage';
import { fetchProductsId } from '../Redux Toolkit/Slices/ProductsDetailsSlice';

const EditProduct = () => {

    const [productName, setProductName] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [shortDesc, setShortDesc] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const id = useParams().id;
    const dispatch = useDispatch();
    const product = useSelector(state => state.productId);

    const editProduct = (event) => {
        event.preventDefault();

        fetch(`http://localhost:9000/products/${id}`, {
            method: 'PUT', // or 'POST'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                productName,
                imgUrl,
                category,
                price,
                shortDesc,
                description,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                toast.success("Product Edited Successfully")
                navigate('/dashboard')
                console.log('====================================');
                console.log(data);
                console.log('====================================');
            })
    }

    useEffect(() => {
        dispatch(fetchProductsId(id));
    }, []);



    return (
        <TitlePage title={`Edit : ${product.productName}`}>
            <BreadcrumbHeader title={`Edit : ${product.productName}`} />
            <section className="py-100-70">
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className="sec-title">
                                <h2>Edit : {product.productName}</h2>
                            </div>
                            <form className="row form-checkout" onSubmit={editProduct}>
                                <div className="col-md-6">
                                    <div className="item">
                                        <input value={productName} onChange={event => setProductName(event.target.value)} type="text" name="name" placeholder={product.productName} required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="item">
                                        <input value={imgUrl} onChange={event => setImgUrl(event.target.value)} type="url" name="imgUrl" placeholder={product.imgUrl} required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="item">
                                        <input value={category} onChange={event => setCategory(event.target.value)} type="text" name="category" placeholder={product.category} required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="item">
                                        <input value={price} onChange={event => setPrice(event.target.value)} type="number" name="price" placeholder={product.price} required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="item">
                                        <input value={shortDesc} onChange={event => setShortDesc(event.target.value)} type="text" name="shortDesc" placeholder={product.shortDesc} required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="item">
                                        <input value={description} onChange={event => setDescription(event.target.value)} type="text" name="description" placeholder={product.description} required />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="item">
                                        <button type="submit" className="btn btn-3" style={{ width: '100%' }}>Edit Product</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </TitlePage>

    )
}

export default EditProduct