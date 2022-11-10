import React from 'react'
import FormCheckOut from './FormCheckOut'
import TotalCost from './TotalCost'

const CheckOutContainer = () => {
    return (
        <section className='checkout-container py-100-70'>
            <div className='container'>
                <div className='row'>
                    <div className="col-lg-8">
                        <div className="sec-title">
                            <h2>Billing Information</h2>
                        </div>
                        <FormCheckOut />
                    </div>
                    <div className="col-lg-4">
                        <TotalCost />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CheckOutContainer