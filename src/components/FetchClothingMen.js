import React, { useEffect, useState } from 'react'
import GalleryCard from './GalleryCard'

export default function FetchClothingMen() {
    const [clothingMen, setClothingMen] = useState([])

    const getClothingMen = async () => {
        const url = 'https://fakestoreapi.com/products/category/men\'s clothing'
        const data = await fetch(url)
        const clothingMenData = await data.json()
        setClothingMen(clothingMenData)
    }

    useEffect(() => {
        getClothingMen()
    }, [])

  return (
    <div className='GalleryCardContainer'>
        {clothingMen.map((item) => (
            <GalleryCard key={item.id} item={item} />
        ))}
    </div>
  )
}
