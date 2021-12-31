import React from 'react'
import { Link } from 'react-router-dom'

import './Navigation.css'
function Navigation(props) {

    const handleClick = () => {
        props.active = 'navigation'
    }
    
    return (
        <div className={ props.active }>
            <hr></hr>
            <div className="links">
                <Link to='/' className='linkComponent' onClick={handleClick}><span className='link'>Home</span></Link>
                <Link to='/about' className='linkComponent' onClick={handleClick}><span className='link'>About</span></Link>
                <Link to='/contact' className='linkComponent' onClick={handleClick}><span className='link'>Contact</span></Link>
                <Link to='/pricing' className='linkComponent' onClick={handleClick}><span className='link'>Pricing</span></Link>
            </div>
            <button className='btn-text'>Schedule a Demo</button>
        </div>
    )
}

export default Navigation
