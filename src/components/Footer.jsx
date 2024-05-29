import React from 'react'
import { Link } from 'react-router-dom'
import instagram from '../../public/instagram.svg'
import facebook from '../../public/facebook.svg'
import X from '../../public/X.svg'
import github from '../../public/github.svg'

export const Footer = () => {
  return (
    <div className='Footer'>
        <div className='SocialContainer'>Follow Us
            <div className='Socials'>
                <Link to='https://www.instagram.com/' target='_blank'>
                    <img src={instagram} 
                    alt='instagram'
                    className='SocialIcon' />
                </Link>
                <Link to='https://www.facebook.com/' target='_blank'>
                    <img src={facebook} 
                    alt='facebook'
                    className='SocialIcon' />
                </Link>
                <Link to='https://www.x.com/' target='_blank'>
                    <img src={X} 
                    alt='twitter'
                    className='SocialIcon' />
                </Link>
                <Link to='https://github.com/justryan55?tab=repositories' target='_blank'>
                    <img src={github} 
                    alt='github'
                    className='SocialIcon' />
                </Link>
            </div>
        </div>
    </div>
  )
}
