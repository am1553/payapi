import React, { useState } from 'react'
import './emaildemo.css'
function EmailDemo(props) {

    return (
        <div className='email-demo'>
            <input type="text" placeholder={props.updatePlaceholder} className='btn-text input' />
            <button className='btn-text'>Schedule a Demo</button>
        </div>
    )
}

export default EmailDemo
