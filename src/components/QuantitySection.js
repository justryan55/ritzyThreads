import React, { useState } from 'react'


export default function QuantitySection() {
    const [quantity, setQuantity] = useState(0)

    function increaseQuantity(){
        setQuantity(quantity + 1)
    }

    function decreaseQuantity(){
        if (quantity === 0){
            return
        }

        setQuantity(quantity - 1)
    }

    function handleOnChange(e){
        if (e.target.value < 0){
            setQuantity(0)
        } else {
            setQuantity(e.target.value)
        }
    } 

    function addItemToCart(){
        console.log(quantity)
        
    }

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
