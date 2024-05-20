import React from 'react'
import NavigationBar from '../components/NavigationBar'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
  const { itemId, itemPrice, itemDescription } = useParams()



  return (
    <div>
        <NavigationBar />
        <p>The product ID is {itemId}</p>
        <p>Price: {itemPrice}</p>
        <p>{itemDescription}</p>
    </div>
  )
}
