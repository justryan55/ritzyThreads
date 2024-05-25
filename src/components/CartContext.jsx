import React, { useState, createContext, useContext } from 'react'

export const CartQuantityContext = createContext(0)
export const CartItemsContext = createContext([])
export const ItemQuantityContext = createContext(0) 


export function CartProvider( { children }) {
  const [cartQuantity, setCartQuantity] = useState(0)
  const [cartItems, setCartItems] = useState([])
  const [quantity, setQuantity] = useState(0)

  return (
    <CartQuantityContext.Provider value={[cartQuantity, setCartQuantity]}>
      <CartItemsContext.Provider value={[cartItems, setCartItems]}>
        <ItemQuantityContext.Provider value={[quantity, setQuantity]}>
          {children}
        </ItemQuantityContext.Provider>
      </CartItemsContext.Provider>
    </CartQuantityContext.Provider>
)
}
