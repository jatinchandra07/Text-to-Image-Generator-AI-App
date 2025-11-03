import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex items-center justify-center gap-4 py-3 mt-20'>

        <Link to="/">
          <img src={assets.logo}  alt="" width={150} />
        </Link>
        <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @Jatin Chandra | All right reserved.</p>

        <div className='flex gap-2.5'>
          <a href="https://www.facebook.com/jatin.chandra.925" target="_blank" rel="noopener noreferrer">
            <img src={assets.facebook_icon} alt="" width={35}/></a>
           <a href="https://x.com/jatinchandra07" target="_blank" rel="noopener noreferrer">
            <img src={assets.twitter_icon} alt="" width={35}/></a>
             <a href="https://www.instagram.com/jatin_chandra1702" target="_blank" rel="noopener noreferrer">
            <img src={assets.instagram_icon} alt="" width={35}/></a>
        </div>
    </div>
  )
}

export default Footer
