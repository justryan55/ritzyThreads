import React, { useState, useContext } from 'react'
import { CartQuantityContext } from './CartContext'
import shoppingCartIcon from '../../public/shopping-cart.svg'


export default function CartIcon() {
    const [cartQuantity] = useContext(CartQuantityContext)

    return (
      <div className='Cart'>
          <img src={shoppingCartIcon}
               alt='cart' 
               className='ShoppingIcon' />
          <p>{cartQuantity}</p>
      </div>
    )
  }