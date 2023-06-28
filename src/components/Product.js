import React, { useEffect, useState } from 'react'
import './Product.css';

function Product({cart, handleShow,remove, removeAll}) {

    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])

    const Order = () =>{
      alert("Ordering....")
      console.log("Ordering")
    }
  return (
    <div>
    <div className='popup'>
    <div className='model'>
      <div style={{display:"flex" , justifyContent:"center"}}>
        <h1 className='cart'> Shopping cart</h1>
        <span style={{marginLeft:"60%", cursor:"pointer"}}>
          <i className='fas fa-xmark' onClick={() => handleShow(false)}></i>
        </span>
        </div>
      {
        CART?.map((cartItem, cartIndex)=>{
            return(
                <div style={{display:"flex"}}>
                    <img src={cartItem.img} alt="" className='product-img'/>
                    <span className='product-name'>{cartItem.name}</span>
                    <button onClick={() =>{
                        const _CART = CART.map((item, index) => {
                            return cartIndex === index ? { ...item, quantity: item.quantity - 1} : item
                        })
                        setCART(_CART)
                    }} className='btn'>-</button>
                    <span className='btn01'>{cartItem.quantity}</span>
                    <button onClick={() =>{
                        const _CART = CART.map((item, index) => {
                            return cartIndex === index ? { ...item, quantity: item.quantity + 1} : item
                        })
                        setCART(_CART)
                    }} className='btn'>+</button>
                    <span className='product-price'>{cartItem.price * cartItem.quantity}</span>

                    <button onClick={() => {remove(cartIndex)}} style={{backgroundColor:"rgb(195, 144, 144)", border:"none", height:"2rem" , color:"white", width:"10rem", marginTop:"1rem"}}>Remove</button>
                </div>
            )
        })
      }

      <h2> Total <span></span>
        {
            CART.map(item => item.price * item.quantity).reduce((total, value)=> total + value, 0)
        }
      </h2>
      <button onClick={Order} style={{backgroundColor:"rgb(195, 144, 144)", border:"none", height:"2rem" , color:"white", width:"10rem"}}>Order</button>
    </div>
    </div>
    </div>
  )
}

export default Product
