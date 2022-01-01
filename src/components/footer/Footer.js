import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
function Footer() {
    return (
        <div className='footer'>
            <div className="logo">
                <img src="./assets/shared/desktop/logo.svg" alt="" />
            </div>
            <ul className="footer-nav">
            <Link to='/pricing' className='link-component'><li className='footer-links'>Pricing</li></Link>
            <Link to='/about' className='link-component'><li className='footer-links'>About</li></Link>
            <Link to='/contact' className='link-component'><li className='footer-links'>Contact</li></Link>
            </ul>
            <ul className='socials'>
                <a href="https://www.facebook.com" target="_blank"><li><img src="./assets/shared/desktop/facebook.svg" alt="" /></li></a>
                <a href="https://twitter.com" target="_blank"><li><img src="./assets/shared/desktop/twitter.svg" alt="" /></li></a>
                <a href="https://linkedin.com" target="_blank"><li><img src="./assets/shared/desktop/linkedin.svg" alt="" /></li></a>
            </ul>
        </div>
    )
}

export default Footer
