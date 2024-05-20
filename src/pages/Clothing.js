import React from 'react'
import NavigationBar from '../components/NavigationBar'
import FetchClothingAll from '../components/FetchClothingAll'

export default function Clothing() {
  return (
    <div>
        <NavigationBar />
        <FetchClothingAll />
    </div>
  )
}
