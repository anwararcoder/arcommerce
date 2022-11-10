import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import BreadcrumbHeader from '../Components/Breadcrumb Header/BreadcrumbHeader'
import TitlePage from '../Components/TitlePage/TitlePage'

const AddProduct = () => {

    const [productName, setProductName] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [shortDesc, setShortDesc] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const addProduct = (event) => {
        event.preventDefault();

        fetch('http://localhost:9000/products', {
            method: 'POST', // or 'PUT'
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
            toast.success("Account Added Successfully")
            navigate('/dashboard')
        })
    }

    return (
        <TitlePage title={"Add Product"}>
            <BreadcrumbHeader title={'Add Product'} />
            <section className="py-100-70">
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className="sec-title">
                                <h2>Add Product</h2>
                            </div>
                            <form className="row form-checkout" onSubmit={addProduct}>
                                <div className="col-md-6">
                                    <div className="item">
                                        <input value={productName} onChange={event => setProductName(event.target.value)} type="text" name="name" placeholder="Name Product" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="item">
                                        <input value={imgUrl} onChange={event => setImgUrl(event.target.value)} type="url" name="imgUrl" placeholder="Enter Url Photo Product" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="item">
                                        <input value={category} onChange={event => setCategory(event.target.value)} type="text" name="category" placeholder="Category Product" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="item">
                                        <input value={price} onChange={event => setPrice(event.target.value)} type="number" name="price" placeholder="Price Product" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="item">
                                        <input value={shortDesc} onChange={event => setShortDesc(event.target.value)} type="text" name="shortDesc" placeholder="Short Description Product" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="item">
                                        <input value={description} onChange={event => setDescription(event.target.value)} type="text" name="description" placeholder="Description Product" required />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="item">
                                        <button type="submit" className="btn btn-3" style={{ width: '100%' }}>Add Product</button>
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

export default AddProduct