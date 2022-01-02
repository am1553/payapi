import React, { useState } from 'react'
import EmailDemo from '../../components/email-demo/EmailDemo'
import './Contact.css'

function Contact() {
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
        <div className='contact' onClick={defaultSetting}>
            <h2>Submit a help request and we’ll get in touch shortly.</h2>

            <form action="submit">

                <label htmlFor="name">Name</label>
                    <input type="text" id='name' name='name'/>

                <label htmlFor="email">Email Address</label>
                    <input type="text" id='email' name='email'/>

                <label htmlFor="company-name">Company Name</label>
                    <input type="text" id='company-name' name='company-name'/>

                <label htmlFor="title">Title</label>
                    <input type="text" id='title' name='title'/>

                <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="40" rows="10"></textarea>
                <div className="confirmation-wrapper">
                    <label htmlFor="confirmation">Stay up-to-date with company announcements and updates to our API</label>
                        <div className="checkbox-container">
                            <input type="checkbox" id='confirmation' name='confirmation' />
                            <div className="checkbox"></div>
                        </div>
                </div>
                
                <button type='submit' className='btn-text'>Submit</button>
            </form>

            <div className="contact-clients">
                <h4>Join the thousands of innovators already building with us</h4>
                <div className="clients-wrapper">
                    <img src="./assets/shared/desktop/tesla.svg" alt="" />
                    <img src="./assets/shared/desktop/microsoft.svg" alt="" />
                    <img src="./assets/shared/desktop/hewlett-packard.svg" alt="" />
                    <img src="./assets/shared/desktop/oracle.svg" alt="" />
                    <img src="./assets/shared/desktop/google.svg" alt="" />
                    <img src="./assets/shared/desktop/nvidia.svg" alt="" />
                </div>
            </div>

            <div className="ready">
                 <h2>Ready to start?</h2>
                <EmailDemo updatePlaceholder={placeholder}/>
             </div>
        </div>
    )
}

export default Contact
