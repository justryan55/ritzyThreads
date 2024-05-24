import React, { useContext } from 'react'
import { CartItemsContext, CartQuantityContext } from '../components/CartContext'

export default function Cart() {
  const [cartQuantity, setCartQuantity] = useContext(CartQuantityContext)
  const [cartItems, setCartItems] = useContext(CartItemsContext)

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
          <div className='ShoppingCartGrid'>
            <div className='LeftColumn'>
              <img src={product.product.image} alt='product.product.title'/>
              <p>{product.product.title}</p>
            </div>
            <p className='CartColumn'>1</p>
            <p className='CartColumn'>£{product.product.price}</p>
            <p className='CartColumn'>Total Price</p>
          </div>
        )
      )}
    </div>
  )
}
