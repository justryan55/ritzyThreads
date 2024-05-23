import React, { useState, useContext } from 'react'
import { CartQuantityContext } from './CartContext'


export default function CartIcon() {
    const [cartQuantity] = useContext(CartQuantityContext)

    return (
      <div className='Cart'>
          <img src='/shopping-cart.svg' 
               alt='cart' 
               className='ShoppingIcon' />
          <p>{cartQuantity}</p>
      </div>
    )
  }