import React, { useEffect, useState } from 'react'
import GalleryCard from './GalleryCard'

export default function FetchClothingWomen() {
    const [clothingWomen, setClothingWomen] = useState([])

    const getClothingWomen = async () => {
        const url = 'https://fakestoreapi.com/products/category/women\'s clothing'
        const data = await fetch(url)
        const clothingWomenData = await data.json()
        setClothingWomen(clothingWomenData)
    }

    useEffect(() => {
        getClothingWomen()
    }, [])




  return (
    <div className='GalleryCardContainer'>
        {clothingWomen.map(item => (
            <GalleryCard key={item.id} item={item} />
        ))}
    </div>
  )
}

