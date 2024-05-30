import React, { useContext } from 'react'
import { CartItemsContext, CartQuantityContext, ItemQuantityContext } from '../components/CartContext'
import removeIcon from '../../public/trash-3.svg'
import { handler } from 'tailwindcss-aspect-ratio'

export default function Cart() {
  const [cartQuantity, setCartQuantity] = useContext(CartQuantityContext)
  const [cartItems, setCartItems] = useContext(CartItemsContext)
  const [quantity, setQuantity] = useContext(ItemQuantityContext)

  function handleRemoveClick(productId){
    
    const newCartData = cartItems.filter((item) => item.product.id !== productId)  
    setCartItems(newCartData)
    setCartQuantity(newCartData.reduce((total, item) => total + item.quantity, 0))
  }

  return (
    <div className='ShoppingCartPage'>
        <p className='CartPageHeader'>Shopping Cart</p>

        { cartItems && cartItems.length > 0 ? (
          <div className='CartHeaders'>
            <p className='ProductHeader'>Product</p>
            <p>Quantity</p>
            <p>Price</p>
            <p>Total Price</p>
        </div>) : (
        <p className='EmptyCart'>Cart is empty</p>)
        }
        {cartItems.map((product) => (
          <div className='ShoppingCartGrid' key={product.product.id}>
            <div className='LeftColumn'>
              <img src={product.product.image} alt={product.product.title}/>
              <p>{product.product.title}</p>
            </div>
            <p className='CartColumn'>{product.quantity}</p>
            <p className='CartColumn'>£{product.product.price}</p>
            <p className='CartColumn'>£{product.quantity * product.product.price}</p>
            <img 
              src={removeIcon} 
              alt='remove' 
              className='RemoveIcon'
              onClick={() => handleRemoveClick(product.product.id)}
              />
          </div>
        )
      )}
    </div>
  )
}
