import React from 'react'
import './Information.css'
function Information(props) {
    return (
        <div className='information'>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    )
}

export default Information
