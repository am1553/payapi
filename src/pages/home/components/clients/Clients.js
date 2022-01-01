import React from 'react'
import { Link } from 'react-router-dom'
import './Client.css'
function Clients() {
    return (
        <div className='clients'>
            <div className="logo-wrapper">
                <img src="./assets/shared/desktop/tesla.svg" alt="" />
                <img src="./assets/shared/desktop/microsoft.svg" alt="" />
                <img src="./assets/shared/desktop/hewlett-packard.svg" alt="" />
                <img src="./assets/shared/desktop/oracle.svg" alt="" />
                <img src="./assets/shared/desktop/google.svg" alt="" />
                <img src="./assets/shared/desktop/nvidia.svg" alt="" />
            </div>
            <div className="text-wrapper">
                <h2>Who we work with</h2>
                <p>
                Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users. 
                </p>
            </div>
            <Link to={'/about'}><button className='about-us-btn btn-text'>About Us</button></Link>
        </div>
    )
}

export default Clients
