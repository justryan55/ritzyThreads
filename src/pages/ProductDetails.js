import React, { useEffect, useState } from 'react'
import NavigationBar from '../components/NavigationBar'
import { useParams } from 'react-router-dom'
import ItemCard from '../components/ItemCard'

export default function ProductDetails() {
  return (
    <div>
        <NavigationBar />
        <ItemCard />
    </div>
  )
}
