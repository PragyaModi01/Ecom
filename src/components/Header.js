import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div>
    <div className='flex'>
      <div onClick={() => props.handleShow(false)} className='nav'>Shopping Cart</div>
      <div onClick={() => props.handleShow(true)}><i class="fa-solid fa-cart-shopping" style={{fontSize:"25px" , cursor:"pointer"}}></i>
        <sup style={{fontSize:"25px"}}>{props.count}</sup>
        {/* <Link to="/login">Login</Link> */}
        <Link to="/login" style={{color:"black", textDecoration:"none" , fontWeight:"bold"}}>Login</Link>
      </div>
    </div>
    </div>
  )
}

export default Header
