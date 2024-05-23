import React, { useState, createContext, useContext } from 'react'

const CartQuantityContext = createContext(0)


export function CartProvider( { children }) {
  const [cartQuantity, setCartQuantity] = useState(0)

  return (
    <CartQuantityContext.Provider value={[cartQuantity, setCartQuantity]}>
      {children}
    </CartQuantityContext.Provider>
  )
}

export default function Cart(){
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