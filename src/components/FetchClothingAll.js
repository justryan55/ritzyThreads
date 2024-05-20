import React, { useEffect, useState } from 'react'
import GalleryCard from './GalleryCard'

export default function FetchClothingAll() {
    const [clothingAll, setClothingAll] = useState([])

    const getClothingAll = async () => {
        const url = 'https://fakestoreapi.com/products'
        const data = await fetch(url)
        const clothingAllData = await data.json()
        setClothingAll(clothingAllData)
    }

    useEffect(() => {
        getClothingAll()
    }, [])

    
  return (
    <div className='GalleryCardContainer'>
        {clothingAll.map(item => (
            <GalleryCard key={item.id} item={item} />
        ))}

        
    </div>
  )
}
