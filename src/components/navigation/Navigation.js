import React from 'react'
import { Link } from 'react-router-dom'

import './Navigation.css'
function Navigation(props) {

    
    return (
        <div className={props.active}>
            <hr></hr>
            <div className="links">
                <Link to='/' className='linkComponent' onClick={ props.checkPanel }><span className='link'>Home</span></Link>
                <Link to='/pricing' className='linkComponent' onClick={ props.checkPanel }><span className='link'>Pricing</span></Link>
                <Link to='/about' className='linkComponent' onClick={ props.checkPanel }><span className='link'>About</span></Link>
                <Link to='/contact' className='linkComponent' onClick={ props.checkPanel }><span className='link'>Contact</span></Link>
            </div>
            <button className='btn-text'>Schedule a Demo</button>
        </div>
    )
}

export default Navigation
