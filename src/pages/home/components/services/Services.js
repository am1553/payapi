import React, { useState } from 'react'
import Service from './components/Service'
import EmailDemo from '../../../../components/email-demo/EmailDemo'
import './Services.css'
function Services() {
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
        <div className='services' onClick={defaultSetting}>
            <Service 
            image='./assets/home/desktop/icon-personal-finances.svg'
            title='Personal Finances'
            description='Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.'
             />
            <Service 
            image='./assets/home/desktop/icon-banking-and-coverage.svg'
            title='Banking & Coverage'
            description='With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.'
             />
            <Service 
            image='./assets/home/desktop/icon-consumer-payments.svg'
            title='Consumer Payments'
            description='It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.'
             />

             <div className="ready">
                 <h2>Ready to start?</h2>
                <EmailDemo updatePlaceholder={placeholder}/>
             </div>
        </div>
    )
}

export default Services
