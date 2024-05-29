import React, { useEffect, useState } from 'react'
import GalleryCard from './GalleryCard'

export default function FetchClothingWomen() {
    const [clothingWomen, setClothingWomen] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getClothingWomen = async () => {
        setIsLoading(true);
        try { 
            const url = 'https://fakestoreapi.com/products/category/women\'s clothing'
            const data = await fetch(url)
            const clothingWomenData = await data.json()
            setClothingWomen(clothingWomenData)                     
        } catch (err){
            console.log("Error:", err)
        } finally {
            setIsLoading(false)
        }      
    }

    useEffect(() => {
        getClothingWomen()
    }, [])




  return (
    <div>
        <div className='Loading'>
        {isLoading ? <p>Loading...</p> : null}
        </div>

        <div className='GalleryCardContainer'>
            {clothingWomen.map(item => (
                <GalleryCard key={item.id} item={item} />
            ))}
        </div>
    </div>
  )
}

