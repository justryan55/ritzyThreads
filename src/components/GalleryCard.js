import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({item}) => {

  const navigate = useNavigate()

  function handleClick() {
    navigate(`/product/${item.id}`)

  }

  return (
    <div className='GalleryCard' onClick={handleClick}>
        <img src={item.image} alt={item.name} />
        <p className='GalleryCardTitle'>{item.title}</p>
        <p>£{item.price}</p>
    </div>
  )
}

export default Card
