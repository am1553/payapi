import React from 'react'
import Perk from './components/Perk'
import './Perks.css'
function Perks() {
    return (
        <div className='perks'>
            <Perk 
            image='./assets/home/desktop/illustration-easy-to-implement.svg' 
            title='Easy to implement' 
            description='Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.' />

            <Perk 
            image='./assets/home/desktop/illustration-simple-ui.svg' 
            title='Simple UI & UX' 
            description='Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion. ' />
        </div>
    )
}

export default Perks
