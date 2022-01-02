import React, { useState } from 'react'
import EmailDemo from '../../components/email-demo/EmailDemo'
import './About.css'
import Information from './components/Information'
import Stats from './components/Stats'

function About() {

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
        <div className='about' onClick={defaultSetting}>

            <h2>We empower innovators by delivering access to the financial system</h2>

            <Information 
            title='Our Business' 
            description='At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers. '
            />
            <Information 
            title='Our Vision' 
            description='Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology. '
            />

            <img src="./assets/about/mobile/image-team-members.jpg" alt="" />
            <hr />

            <Stats title='Team Members' stat='300+'/>
            <Stats title='Offices in the US' stat='3'/>
            <Stats title='Transactions analyzed' stat='10M+'/>

            <hr />

            <Information 
            title='The People' 
            description="We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills."
            />
            <Information 
            title='The Culture' 
            description="We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title."
            />





            <div className="ready">
                 <h2>Ready to start?</h2>
                <EmailDemo updatePlaceholder={placeholder}/>
            </div>
        </div>
    )
}

export default About
