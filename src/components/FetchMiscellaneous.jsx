import React, { useEffect, useState } from 'react'
import GalleryCard from './GalleryCard'

export default function FetchMiscellaneous() {
  const [miscellaneous, setMiscellaneous] = useState([])

  const getMiscellaneous = async () => {
    const url = 'https://fakestoreapi.com/products/category/electronics'
    const data = await fetch(url)
    const miscellaneousData = await data.json()
    setMiscellaneous(miscellaneousData)
    
  }
  
  useEffect(() => {
    getMiscellaneous()
  }, [])


  return (
    <div className='GalleryCardContainer'>
      {miscellaneous.map(item => (
        <GalleryCard key={item.id} item={item} />
      ))}
    </div>
  )
}
