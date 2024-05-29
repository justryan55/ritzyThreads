import React, { useEffect, useState } from 'react'
import GalleryCard from './GalleryCard'

export default function FetchClothingAll() {
    const [clothingAll, setClothingAll] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getClothingAll = async () => {
        setIsLoading(true);
        try {
            const url = 'https://fakestoreapi.com/products'
            const data = await fetch(url)
            const clothingAllData = await data.json()
            setClothingAll(clothingAllData)
        } catch (err){
            console.log("Error:", err)
        } finally {
            setIsLoading(false)
        }
        
    }

    useEffect(() => {
        getClothingAll()
    }, [])

    
  return (
    <div>
        <div className='Loading'>
            {isLoading ? <p>Loading...</p> : null}
        </div>

        <div className='GalleryCardContainer'>
            {clothingAll.map(item => (
                <GalleryCard key={item.id} item={item} />
            ))}
        </div>
    </div>
  )
}
