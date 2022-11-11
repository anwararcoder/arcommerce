import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BreadcrumbHeader from '../Components/Breadcrumb Header/BreadcrumbHeader'
import Products from '../Components/Products/Products'
import TitlePage from '../Components/TitlePage/TitlePage'
import { fetchProducts } from '../Redux Toolkit/Slices/ProductsSlice'
const Shop = () => {

  const dispatch = useDispatch();

  useEffect( () => {
      dispatch(fetchProducts());
  }, [] );

  const products = useSelector(state => state.products);


  const [ productFilter, setProductFilter ] = useState([]);

  useEffect(()=>{

    setProductFilter(products)

  },[])

  const handelFilter = (event) => {
    const filterValue = event.target.value;
    setProductFilter(products)
    if( filterValue == "all" ) {
      return setProductFilter(products)
    } else {
      return setProductFilter( products.filter(product => product.category === filterValue) );
    }
  }

  const handelSearch = (event) => {
    const searchValue = event.target.value;

    setProductFilter( products.filter( product => product.productName.toLowerCase().includes( searchValue.toLowerCase() ) ) )

  }
  

  return (
    <TitlePage title={"Shop"}>
      <BreadcrumbHeader title={'Shop'} />
      <div className='filter-box py-100-70'>
          <div className="container">
              <div className="row">
                  <div className="col-md-6">
                      <div className='row'>
                          <div className='col-sm-6'>
                              <select onChange={handelFilter}>
                                  <option value="all">Filter By Category</option>
                                  <option value="sofa">sofa</option>
                                  <option value="chair">chair</option>
                                  <option value="mobile">mobile</option>
                                  <option value="watch">watch</option>
                                  <option value="wireless">wireless</option>
                              </select>
                          </div>
                          <div className='col-sm-6'>
                              <select>
                                  <option>Sort By </option>
                                  <option value="ascending">ascending</option>
                                  <option value="descending">descending</option>
                              </select>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <form onSubmit={(event)=> event.preventDefault()}>
                          <input type="search" placeholder="Search" onChange={handelSearch} />
                          <button type="submit"><i className="bi bi-search"></i></button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
      {
        productFilter.length === 0 ? (<div className='container'><h2 className='no-products'>No Products Are Found!!</h2></div>) : (<Products products={productFilter} />)
      }
    </TitlePage>
  )
}

export default Shop