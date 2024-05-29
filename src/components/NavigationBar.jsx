import React, { useState } from 'react'
import CartIcon from './CartIcon'
import { Link } from 'react-router-dom';
import logo from '../../public/alpha-r-circle.svg'
import user from '../../public/user.svg'

export default function NavigationBar( {activeItem, setActiveItem}) {

  const handleClick = (item) => {
    setActiveItem(item)
  }

  const handleHomeClick = () => {
    setActiveItem(null)
  }

  return (
    <div className='NavigationContainer'>
      <div className='NavigationBar'>
        <div className='NavigationContent'>
            <li className='NavigationText'>
              <Link 
                className={`NavItem ${activeItem === "Women" ? 'active' : ''}`} 
                to='/women'
                onClick={() => handleClick("Women")}
              >
                <ul>Women's</ul>
              </Link>
              <Link 
                className={`NavItem ${activeItem === "Men" ? 'active' : ''}`} 
                to='/men'
                onClick={() => handleClick("Men")}

              >
                <ul>Men's</ul>
              </Link>
              <Link 
                className={`NavItem ${activeItem === "Kids" ? 'active' : ''}`} 
                to='/kids'
                onClick={() => handleClick("Kids")}
                >
                <ul>Kids</ul>
              </Link>
              <Link 
                className={`NavItem ${activeItem === "Accessories" ? 'active' : ''}`} 
                to='/accessories'
                onClick={() => handleClick("Accessories")}
              >
                <ul>Accessories</ul>
              </Link>
            </li>
            <Link 
              className='StoreTitleContainer' 
              to='/'
              onClick={() => { handleHomeClick()}}
            >
              <p className='StoreTitle'>Ritzy Threads</p>
            </Link>
            <li className='NavigationText'>
                <Link 
                className={`NavItem ${activeItem === "Miscellaneous" ? 'active' : ''}`} 
                to='/miscellaneous'
                onClick={() => handleClick("Miscellaneous")}
                >
                  <ul>Miscellaneous</ul>
                </Link>
                <Link 
                className={`NavItem ${activeItem === "Sale" ? 'active' : ''}`} 
                to='/sale'
                onClick={() => handleClick("Sale")}
                >
                  <ul>Sale</ul>
                </Link>
                <Link 
                className={`NavItem ${activeItem === "Products" ? 'active' : ''}`} 
                to='/products'
                onClick={() => handleClick("Products")}
                >
                  <ul>Products</ul>
                </Link>
                <Link 
                className={`NavItem ${activeItem === "Purpose" ? 'active' : ''}`} 
                to='/purpose'
                onClick={() => handleClick("Purpose")}
                >
                  <ul>Our Purpose</ul>
                </Link> 
            </li>
        </div>
      </div>
    </div>
  )
}
