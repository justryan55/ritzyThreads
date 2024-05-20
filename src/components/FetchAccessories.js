import React, { useEffect, useState } from 'react'
import GalleryCard from './GalleryCard'

export default function FetchAccessories() {
    const [accessory, setAccessory] = useState([])
    
    const getAccessories = async () => {
      const url = 'https://fakestoreapi.com/products/category/jewelery'
      const data = await fetch(url)
      const accessoryData = await data.json()
      setAccessory(accessoryData)
      console.log(accessoryData)
    }

    useEffect(() => {
      getAccessories()
    }, [])

  return (
    <div className='GalleryCardContainer'>
      {accessory.map(item => (
        <GalleryCard key={item.id} item={item}/>
      ))}
    </div>
  )
}

