import React from 'react'

const FormCheckOut = () => {
  return (
    <form className='row form-checkout'>
        <div className='col-md-6'>
            <div className='item'>
                <input type="text" name="name" placeholder="Enter Your Name" required />
            </div>
        </div>
        <div className='col-md-6'>
            <div className='item'>
                <input type="email" name="email" placeholder="Enter Your Email" required />
            </div>
        </div>
        <div className='col-md-6'>
            <div className='item'>
                <input type="tel" name="tel" placeholder="Enter Your Number Phone" required />
            </div>
        </div>
        <div className='col-md-6'>
            <div className='item'>
                <input type="text" name="address" placeholder="Enter Your Street Address" />
            </div>
        </div>
        <div className='col-md-6'>
            <div className='item'>
                <input type="text" name="name" placeholder="Enter Your Name" />
            </div>
        </div>
        <div className='col-md-6'>
            <div className='item'>
                <input type="text" name="city" placeholder="Enter Your City" />
            </div>
        </div>
        <div className='col-md-6'>
            <div className='item'>
                <input type="number" name="postal" placeholder="Enter Your Postal Code" />
            </div>
        </div>
        <div className='col-md-6'>
            <div className='item'>
                <input type="text" name="country" placeholder="Enter Your Country" />
            </div>
        </div>
    </form>
  )
}

export default FormCheckOut