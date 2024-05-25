import React, { createContext, useContext, useEffect, useState } from 'react'
import { CartQuantityContext, ItemQuantityContext } from './CartContext'
import { CartItemsContext } from './CartContext'


export default function QuantitySection({product}) {
    const [quantity, setQuantity] = useContext(ItemQuantityContext)
    const [cartQuantity, setCartQuantity] = useContext(CartQuantityContext)
    const [cartItems, setCartItems] = useContext(CartItemsContext)
    

    function increaseQuantity(){
        setQuantity(prevQuantity => Number(prevQuantity) + 1)
    }

    function decreaseQuantity(){
        if (quantity === 0){
            return
        }

        setQuantity(prevQuantity => Number(quantity) - 1)
    }

    function handleOnChange(e){
        if (e.target.value < 0){
            setQuantity(0)
        } else {
            setQuantity(Number(e.target.value))
        }
    } 

    function addItemToCart(){
        if (quantity > 0){
            setCartQuantity(prevCartQuantity => prevCartQuantity + quantity)
            setCartItems(prevCartItems => [...prevCartItems, { product, quantity } ])
            
        }

        
    }
    console.log('cartQuantity', cartQuantity)

  return (
    <div className='QuantitySection'>
        <div className='Quantity'>
            <label htmlFor='quantity'>Quantity: </label>
            <img src='/minus.svg' alt='minus' onClick={decreaseQuantity} />
            <input type='numeric' 
                name='quantity'
                min={0}
                onChange={handleOnChange}
                value={quantity}>
            </input>
            <img src='/plus.svg' alt='add' onClick={increaseQuantity} />
        </div>
        <div className='AddToCartSection'>
            <button className='AddToCart' onClick={addItemToCart}>
                <img src='/shopping-cart.svg' alt='cart' />
                Add to cart
            </button>
        </div>
    </div>
  )
}