import React, { useState } from 'react'
import Basic from './Basic'
import Free from './Free'
import Premium from './Premium'

import './Plan.css'
import EmailDemo from '../../../components/email-demo/EmailDemo'
function Plan(props) {
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
        <div className='plan' onClick={defaultSetting}>
            <Free planName='Free Plan' price='$0.00' tickMark='./assets/shared/desktop/icon-check.svg'/>
            <Basic planName='Basic Plan' price='$249.00' tickMark='./assets/shared/desktop/icon-check.svg'/>
            <Premium planName='Premium Plan' price='$499.00' tickMark='./assets/shared/desktop/icon-check.svg'/>
            <div className="ready">
                 <h2>Ready to start?</h2>
                <EmailDemo updatePlaceholder={placeholder}/>
             </div>
        </div>
    )
}

export default Plan
