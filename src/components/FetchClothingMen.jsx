import React, { useEffect, useState } from 'react'
import GalleryCard from './GalleryCard'

export default function FetchClothingMen() {
    const [clothingMen, setClothingMen] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getClothingMen = async () => {
        setIsLoading(true);
        try {
            const url = 'https://fakestoreapi.com/products/category/men\'s clothing'
            const data = await fetch(url)
            const clothingMenData = await data.json()
            setClothingMen(clothingMenData)
        } catch (err){
            console.log("Error:", err)
        } finally {
            setIsLoading(false)
        }
     }
     
    useEffect(() => {
        getClothingMen()
    }, [])

  return (
    <div>
        <div className='Loading'>
            {isLoading ? <p>Loading...</p> : null}
        </div>
        <div className='GalleryCardContainer'>
            {clothingMen.map((item) => (
                <GalleryCard key={item.id} item={item} />
            ))}
        </div>
    </div>
  )
}
