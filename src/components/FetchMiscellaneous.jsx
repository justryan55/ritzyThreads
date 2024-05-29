import React, { useEffect, useState } from 'react'
import GalleryCard from './GalleryCard'

export default function FetchMiscellaneous() {
  const [miscellaneous, setMiscellaneous] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  const getMiscellaneous = async () => {
    setIsLoading(true);
    try { 
      const url = 'https://fakestoreapi.com/products/category/electronics'
      const data = await fetch(url)
      const miscellaneousData = await data.json()
      setMiscellaneous(miscellaneousData)
    } catch (err){
      console.log("Error:", err)
    } finally {
      setIsLoading(false)
    }       
  }

  useEffect(() => {
    getMiscellaneous()
  }, [])


  return (
    <div>
      <div className='Loading'>
      {isLoading ? <p>Loading...</p> : null}
      </div>

      <div className='GalleryCardContainer'>
        {miscellaneous.map(item => (
          <GalleryCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
