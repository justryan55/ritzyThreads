import React from 'react'
import CartIcon from './CartIcon'
import { Link } from 'react-router-dom';
import logo from '../../public/alpha-r-circle.svg'
import user from '../../public/user.svg'

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
              <img src={logo} 
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
              <img src={user}
                    alt='user'
                    className='NavigationUser'/>
              <Link to='/cart'>
                <CartIcon />
              </Link>
            </div>
    </div>
  )
}
