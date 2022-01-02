import React from 'react'
import Introduction from './components/introduction/Introduction'
import Clients from './components/clients/Clients'
import Perks from './components/perks/Perks'
import Services from './components/services/Services'

function Home() {
    return (
        <div>
            <Introduction />
            <Clients />
            <Perks />
            <Services />
        </div>
    )
}

export default Home
