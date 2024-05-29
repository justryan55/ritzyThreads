import React from 'react'
import logo from '../../public/alpha-r-circle.svg'
import { Link } from 'react-router-dom'
import user from '../../public/user.svg'
import search from '../../public/search.svg'
import CartIcon from './CartIcon'
import instagram from '../../public/instagram.svg'
import facebook from '../../public/facebook.svg'
import X from '../../public/X.svg'


export const HeaderBar = ({ onLogoClick }) => {
  return (
    <div className='HeaderContainer'>
      <div className='LogoContainer'>
        <Link className='Logo' to='/' onClick={onLogoClick}>
            <img src={logo} 
            alt='logo'
            className='NavigationLogo' />
        </Link>
      </div>
      <div className='IconContainer'>
              <img src={search}
                   alt='search'
                   className='SearchIcon'/>
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
