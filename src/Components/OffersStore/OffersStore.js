import React from 'react'
import Clock from '../Clock/Clock'
import ImageOffersStore from './../../assets/images/01_header.png'

const OffersStore = () => {
  return (
    <div className='offers-store'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-7 d-flex align-items-center'>
                    <div className='text-box'>
                        <div className="sec-title">
                            <span>Limited Offers</span>
                            <h2>Quality Products</h2>
                        </div>
                        <Clock />
                        <button className="btn">Visit Store</button>
                    </div>
                </div>
                <div className='col-md-5'>
                    <div className='img-box'>
                        <img className='img-fluid' src={ImageOffersStore} alt="Header" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OffersStore