import React, { useState } from 'react'
import './Introduction.css'
function Introduction() {

    const [placeholder, setPlaceholder] = useState('Enter email address')

    const defaultSetting = (e) => {
        const clickClasslist = e.target.classList
        if(clickClasslist.contains('input')) {
            setPlaceholder('')
        } else {
            setPlaceholder('Enter email address')
        }
    }

    return (
        <div className='introduction' onClick={defaultSetting}>
            <img src="./assets/home/desktop/illustration-phone-mockup.svg" alt="" />
            <h1 className='heading-one-small'>Start building with our APIs for absolutely free.</h1>
            <input type="text" placeholder={placeholder} className='btn-text input' />
            <button className='btn-text'>Schedule a Demo</button>
            <p>Have any questions? <strong>Contact Us</strong></p>
        </div>
    )
}

export default Introduction
