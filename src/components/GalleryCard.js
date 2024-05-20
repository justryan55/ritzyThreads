import React from 'react'

const Card = ({item}) => {
  return (
    <div className='GalleryCard'>
        <img src={item.image} alt={item.name} />
        <p className='GalleryCardTitle'>{item.title}</p>
        <p>£{item.price}</p>
    </div>
  )
}

export default Card
