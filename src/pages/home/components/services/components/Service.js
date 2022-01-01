import React from 'react'
import './Service.css'
function Service(props) {
    return (
        <div className='service'>
            <img src={ props.image } alt="" />
            <h3 className="heading-three-small">{ props.title }</h3>
            <p>{ props.description }</p>
        </div>
    )
}

export default Service
