import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import BreadcrumbHeader from '../Components/Breadcrumb Header/BreadcrumbHeader';
import LeaveReview from '../Components/Leave Review/LeaveReview';
import Products from '../Components/Products/Products';
import TitlePage from '../Components/TitlePage/TitlePage'
import { addToCart } from '../Redux Toolkit/Slices/CartSlice';
import { fetchProductsId } from '../Redux Toolkit/Slices/ProductsDetailsSlice';
import { fetchProducts } from '../Redux Toolkit/Slices/ProductsSlice';
const ProductDetails = () => {

  const [reviewsBox, setReviewsBox] = useState('');
  const id = useParams().id;
  const dispatch = useDispatch();

  

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

  const product = useSelector(state => state.productId);
  const categoryName = product.category;

  const products = useSelector(state => state.products);
  const ratedProductsCategory = products.filter(product => product.category === categoryName);
  
  // useEffect(() => {
  //   window.scrollTo(0,0)
  // }, []);
  
  useEffect(() => {
    dispatch(fetchProductsId(id));
    dispatch(fetchProducts());
  }, [product]);
  

  return (
    <TitlePage title={"Product Details"}>
      <BreadcrumbHeader title={`${product.productName}`} />
      <section className="product-details py-100-70">
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 d-flex align-items-center justify-content-between'>
              <div className='img-box'>
                <img className="img-fluid" src={product.imgUrl} alt={product.productName} />
              </div>
            </div>
            <div className='col-md-6 d-flex align-items-center justify-content-between'>
              <div className='text-box'>
                <h3>{product.productName}</h3>
                <div>
                  <ul className='rate'>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star-half"></i></li>
                  </ul>
                  <p className='avgrating'>( <span>{product.avgrating}</span> ) Ratings</p>
                </div>
                <div className="price">{product.price}</div>
                <p className='description'>{product.shortDesc}</p>
                <button className="btn btn-2" onClick={addToBoxCart}>Add To Cart</button>
              </div>
            </div>
          </div>
          <div className="reviews-box">
            <div className='title'>
              <h4 className={` ${reviewsBox === '' ? 'active' : ''} `} onClick={() => setReviewsBox('')}>description</h4>
              <h4 className={` ${reviewsBox === 're-view' ? 'active' : ''} `} onClick={() => setReviewsBox('re-view')}>reviews ({product.reviews?.length})</h4>
            </div>
            <div className="content">
              {
                reviewsBox === '' ? (
                  <div>
                    {product.description}
                  </div>
                ) : (
                  <div>
                    <p><span><b>Total Rating:</b> </span>{product.reviews.map((item, index) => <span key={index}>{item.rating}</span>)}</p>
                    <p><span><b>Description Rating:</b> </span>{product.reviews.map((item, index) => <span key={index}>{item.text}</span>)}</p>
                    <LeaveReview />
                  </div>
                )
              }
            </div>
          </div>
          <Products products={ratedProductsCategory} title="You Might Also Like" />
        </div>
      </section>
    </TitlePage>
  )
}

export default ProductDetails