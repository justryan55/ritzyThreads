import React, { useState } from 'react'

export default function ShoppingIcon() {
  const [cartQuantity, setCartQuantity] = useState(0)



  return (
    <div className='Cart'>
        <img src='/shopping-cart.svg' 
             alt='cart' 
             className='ShoppingIcon' />
        <p>{cartQuantity}</p>
    </div>
  )
}