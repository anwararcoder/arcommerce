import React, { useEffect } from 'react'
import Header from '../Components/Header/Header'
import { fetchServices } from '../Redux Toolkit/Slices/ServicesSlice';
import { fetchProducts } from '../Redux Toolkit/Slices/ProductsSlice';
import Services from '../Components/Services/Services';
import { useDispatch, useSelector } from 'react-redux';
import Products from '../Components/Products/Products';
import OffersStore from '../Components/OffersStore/OffersStore';

const Home = () => {
  document.title = "ARCommerce - Home" 

  useEffect(() => {
    window.scrollTo(0,0)
  }, []);

  const dispatch = useDispatch()
  useEffect( () => {
      dispatch(fetchServices());
  }, [] );
  const services = useSelector(state => state.services);

  useEffect( () => {
      dispatch(fetchProducts());
  }, [] );
  const products = useSelector(state => state.products);
  const FilterByCategory = (category) => {
    return products.filter(product => product.category === category)
  }

  return (
    <>
      <Header />
      <Services services={services} />
      <Products products={FilterByCategory("sofa")} title="Category Sofa" />
      <Products products={FilterByCategory("chair")} title="Category chair" />
      <OffersStore />
      <Products products={FilterByCategory("mobile")} title="Category mobile" />
      <Products products={FilterByCategory("watch")} title="Category watch" />
      <Products products={FilterByCategory("wireless")} title="Category wireless" />
    </>
  )
}

export default Home