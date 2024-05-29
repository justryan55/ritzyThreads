import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import QuantitySection from './QuantitySection'

export default function ItemCard() {
  const { itemId } = useParams()
  const [product, setProduct] = useState([])

  const fetchProductData = async () => {
    const url = 'https://fakestoreapi.com/products'
    const data = await fetch(url)
    const productData = await data.json()
    const selectedProduct = productData.find(item => item.id === parseInt(itemId))
    setProduct(selectedProduct)
  }

  useEffect(() => {
    fetchProductData()
  }, [itemId])


  return (
    <div className='ItemCardContainer'>
      <div className='ItemCard'>
        <img src={product.image} alt={product.title} />
        <div className='ItemDetails'>
          <p className='ItemTitle'>{product.title}</p>
          <p className='ItemDescription'>{product.description}</p>
          <p className='ItemPrice'>£{product.price}</p>
          <QuantitySection product={product} />
        </div>
      </div>
    </div>
  )
}
