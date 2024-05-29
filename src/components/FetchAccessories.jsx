import React, { useEffect, useState } from 'react'
import GalleryCard from './GalleryCard'

export default function FetchAccessories() {
    const [accessory, setAccessory] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    
    const getAccessories = async () => {
      setIsLoading(true);
      try {
        const url = 'https://fakestoreapi.com/products/category/jewelery'
        const data = await fetch(url)
        const accessoryData = await data.json()
        setAccessory(accessoryData)
        setIsLoading(false)
      } catch (err){
        console.log("Error:", err)
      } finally {
        setIsLoading(false)
      }
      
    }

    useEffect(() => {
      getAccessories()
    }, [])

  return (
    <div>
      <div className='Loading'>
        {isLoading ? <p>Loading...</p> : null}
      </div>
      <div className='GalleryCardContainer'>
        {accessory.map(item => (
          <GalleryCard key={item.id} item={item}/>
        ))}
      </div>
    </div>
  )
}

