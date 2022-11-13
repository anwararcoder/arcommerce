import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='row'>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <h2 className='brand-title'>AR-Ecommerce</h2>
                    <p className='caption'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Magna, sed diam nonumy eirmod tempor invidunt.</p>
                </div>
                <div className='col-sm-6 col-md-6 col-lg-2'>
                    <h5 className='title'>Categories</h5>
                    <ul className='links'>
                        <li><Link to='/shop'>men's clothing</Link></li>
                        <li><Link to='/shop'>jewelery</Link></li>
                        <li><Link to='/shop'>electronics</Link></li>
                        <li><Link to='/shop'>women's clothing</Link></li>
                    </ul>
                </div>
                <div className='col-sm-6 col-md-6 col-lg-2'>
                    <h5 className='title'>Useful Links</h5>
                    <ul className='links'>
                        <li><Link to='/shop'>Shop</Link></li>
                        <li><Link to='/cart'>Cart</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/signup'>Sign Up</Link></li>
                    </ul>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-4'>
                    <h5 className='title'>Contact</h5>
                    <ul className='contact'>
                        <li><i className="fa-solid fa-location-crosshairs"></i> Menouf EL-Menoufia, Egypt.</li>
                        <li><i className="fa-regular fa-envelope"></i> Nourramadan144@gmail.com.</li>
                        <li><i className="fa-solid fa-phone"></i> +201029134630</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="copyright">
            <p>@ 2020 AR-Ecommerce. With Love by <a href="https://themeforest.net/user/ar-coder/portfolio">AR-Coder</a></p>
        </div>
    </div>
  )
}

export default Footer