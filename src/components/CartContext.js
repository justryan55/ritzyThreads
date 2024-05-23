import React, { useState, createContext, useContext } from 'react'

export const CartQuantityContext = createContext(0)
export const CartItemsContext = createContext([])

export function CartProvider( { children }) {
  const [cartQuantity, setCartQuantity] = useState(0)
  const [cartItems, setCartItems] = useState([])

  return (
    <CartQuantityContext.Provider value={[cartQuantity, setCartQuantity, cartItems, setCartItems]}>
      {children}
    </CartQuantityContext.Provider>
  )
}
