import React from 'react'
import './Header.css'
import Navigation from '../navigation/Navigation'
function Header() {
    return (
        <div>
            <div className="logo">
                <img src="./assets/shared/desktop/logo.svg" alt="" />
            </div>
            <button></button>
            <Navigation />
        </div>
    )
}

export default Header
