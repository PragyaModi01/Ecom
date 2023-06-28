import React from 'react'
import './Cards.css'

function Cards({product, addToCart}) {
  return (
    <div>
    <div className='flex01'>
      {
        product.map((item, index)=>{
            return (
                <div>
                    <div className='product-item'>
                        <img src={item.img} width="290rem" height="250rem" alt=""/>
                        <p style={{fontSize:"2rem"}}>{item.name}</p>
                        <p style={{fontSize:"1.2rem",marginTop:"-2rem"}}>Price : ₹{item.price}</p>
                        <button onClick={()=> addToCart(item)} className='hello'>Add To Cart</button>
                    </div>
                </div>
            )
        })
      }
    </div>
    </div>
  )
}

export default Cards
