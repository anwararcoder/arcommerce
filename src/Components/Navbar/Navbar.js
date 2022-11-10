import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAuth, signOut } from 'firebase/auth';
import NavUserImg from './../../assets/images/01_user.png';
const Navbar = () => {

  const [active, setActive] = useState('');
  const [activeNavLink, setActiveNavLink] = useState('#');
  const navigate = useNavigate();

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 10) {
      setActive('active')
    } else {
      setActive('')
    }
  });

  const cart = useSelector((state) => state.cart)
  const bigCart = cart.cart;

  const getTotalQuantity = () => {
    let total = 0
    bigCart.forEach(item => {
      total += item.quantity
    })
    return total
  }

  const auth = getAuth();
  const user = auth.currentUser;
  const logout = async () => {
    await signOut(auth);
    toast.success("Account LogOut Successfully")
    navigate('/')
  }

  return (
    <nav className={`navbar fixed-top navbar-expand-md ${active}`}>
      <div className="container">
        <div className='d-block d-md-flex justify-content-between align-items-center w-100'>
          <div className='logo-box'>
            <Link className="navbar-brand" to="/">ARCommerce</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarArcommerceApp" aria-controls="navbarArcommerceApp" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div>
            <div className="collapse navbar-collapse" id="navbarArcommerceApp">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link onClick={() => setActiveNavLink("/")} className={activeNavLink === "/" ? "nav-link active" : "nav-link"} aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link onClick={() => setActiveNavLink("shop")} className={activeNavLink === "shop" ? "nav-link active" : "nav-link"} aria-current="page" to="shop">Shop</Link>
                </li>
                <li className="nav-item">
                  <Link onClick={() => setActiveNavLink("cart")} className={activeNavLink === "cart" ? "nav-link active" : "nav-link"} aria-current="page" to="cart">cart</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="collapse navbar-collapse" id="navbarArcommerceApp">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="cart" className="nav-link">
                    <i className="bi bi-cart"></i>
                    <span className='number'>{getTotalQuantity() || 0}</span>
                  </Link>
                </li>
                <li className="nav-item dropdown user">
                  {
                    user ? (<Fragment>
                      <img className='nav-user-img nav-link dropdown-toggle' src={user?.photoURL} alt='User' role="button" data-bs-toggle="dropdown" aria-expanded="false" />
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="dashboard">Dashboard</Link></li>
                        <li><Link className="dropdown-item" onClick={logout}>LogOut</Link></li>
                      </ul>
                    </Fragment>) : (<Fragment>
                    <img className='nav-user-img nav-link dropdown-toggle' src={NavUserImg} alt='User' role="button" data-bs-toggle="dropdown" aria-expanded="false" />
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="login">Login</Link></li>
                      <li><Link className="dropdown-item" to="signup">Signup</Link></li>
                    </ul>
                  </Fragment>)
                  }
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar