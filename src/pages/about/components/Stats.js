import React from 'react'
import './Stats.css'
function Stats(props) {
    return (
        <div className='stats'>
            <p>{ props.title }</p>
            <h1 className="heading-one-large">{props.stat}</h1>
        </div>
    )
}

export default Stats
