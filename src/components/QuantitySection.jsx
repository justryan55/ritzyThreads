import React, { createContext, useContext, useEffect, useState } from 'react'
import { CartQuantityContext, ItemQuantityContext } from './CartContext'
import { CartItemsContext } from './CartContext'
import plusIcon from '../../public/plus.svg'
import minusIcon from '../../public/minus.svg'
import shoppingCartIcon from '../../public/shopping-cart (1).svg'


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
            <p className=''>Quantity </p>
            <div className='QuantityInputs'>
                <label htmlFor='quantity'></label>
                <img src={minusIcon} alt='minus' onClick={decreaseQuantity} />
                <input type='numeric' 
                    name='quantity'
                    min={0}
                    onChange={handleOnChange}
                    value={quantity}>
                </input>
                <img src={plusIcon} alt='add' onClick={increaseQuantity} />
            </div>
        </div>
        <div className='AddToCartSection'>
            <button className='AddToCartBtn' onClick={addItemToCart}>
                <img src={shoppingCartIcon} alt='cart' />
                Add to cart
            </button>
        </div>
    </div>
  )
}