import React, { useState } from 'react'
import EmailDemo from '../../../../components/email-demo/EmailDemo'
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
            <p>Have any questions? <strong>Contact Us</strong></p>
            <EmailDemo updatePlaceholder={placeholder}/>
        </div>
    )
}

export default Introduction
