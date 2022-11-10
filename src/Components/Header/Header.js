import React from 'react'
import HeaderImage from './../../assets/images/01_header.png'
const Header = () => {
    return (
        <div className='header'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 d-flex align-items-center'>
                        <div>
                            <div className='top-headline'>Hot Deal In This Week</div>
                            <h1 className='headline'>Smart Awesome Products</h1>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div>
                            <img style={{ width: '100%' }} src={HeaderImage} alt="Header" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header