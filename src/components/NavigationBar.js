import React from 'react'
import ShoppingIcon from './ShoppingIcon'
import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <div className='Container'>
      <div className='NavigationContainer'>
        <div className='NavigationBar'>
            <li className='NavigationText'>
              <Link to='/women'><ul>Women's</ul></Link>
              <Link to='/men'><ul>Men's</ul></Link>
              <ul>Kids</ul>
              <Link to='/accessories'><ul>Accessories</ul></Link>
            </li>
            <Link to='/'>
              <img src='/alpha-r-circle.svg' 
                  alt='logo'
                  className='NavigationLogo' />
            </Link>
            <li className='NavigationText'>
                <Link to='/miscellaneous'><ul>Miscellaneous</ul></Link>
                <ul>Sale</ul>
                <Link to='/clothing'><ul>Products</ul></Link>
                <ul>Our Purpose</ul> 
            </li>
        </div>
      </div>
      <div className='icons'>
              <img src='/user.svg' 
                    alt='user'
                    className='NavigationUser'/>
              <Link to='/cart'>
                <ShoppingIcon />
              </Link>
            </div>
    </div>
  )
}
