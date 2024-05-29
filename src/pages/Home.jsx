import React from 'react'
import homeImage1 from '../../public/1.jpg'
import homeImage2 from '../../public/2.jpg'
import homeImage3 from '../../public/3.jpg'
import homeImage4 from '../../public/4.jpg'
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className='HomeSection'>
      <div className='HomeLeftColumn'>
        <div className='HomeTextSection'>
          <p className='HomeHeader'>Summer styles are finally here</p>
          <p className='HomeText'>Our new summer collection is here to keep you stylish and comfortable all season long. Explore vibrant, durable pieces and find your perfect summer look today!</p>
        </div>
        <div className='ShopBtnContainer'>
          <Link to='/products'>
            <button className='ShopBtn'>Shop Now</button>
          </Link>
        </div>
      </div>
      <div className='HomeRightColumn'>
        <img src={homeImage1} className='HomeImage' alt='clothing' />
        <img src={homeImage2} className='HomeImage' alt='clothing' />
        <img src={homeImage3} className='HomeImage' alt='clothing' />
        <img src={homeImage4} className='HomeImage' alt='clothing' />
      </div>

    </div>
  )
}
